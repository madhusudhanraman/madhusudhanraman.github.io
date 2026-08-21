(function () {
  "use strict";

  let lineThickness = "1pt";

  function thicknessClass(thickness) {
    return "youngtab-" + thickness.replace(/[^a-zA-Z0-9]/g, "_");
  }

  function installCSS(thickness) {
    const className = thicknessClass(thickness);

    if (document.getElementById(className)) {
      return className;
    }

    const style = document.createElement("style");
    style.id = className;

    style.textContent = `
      mjx-mrow.youngtab-tableau {
        display: inline-block !important;
        vertical-align: middle;
        line-height: 1;
      }

      mjx-mrow.youngtab-row {
        display: flex !important;
        height: 1.55em;
      }

      mjx-mrow.youngtab-cell {
        box-sizing: border-box;
        width: 1.55em;
        height: 1.55em;

        display: inline-flex !important;
        align-items: center;
        justify-content: center;

        border: ${thickness} solid currentColor;

        margin-left: -${thickness};
        margin-top: -${thickness};
      }

      mjx-mrow.youngtab-row:first-child
      mjx-mrow.youngtab-cell {
        margin-top: 0;
      }

      mjx-mrow.youngtab-cell:first-child {
        margin-left: 0;
      }
    `;

    document.head.appendChild(style);

    return className;
  }

  function splitRows(text) {
    const rows = [];
    let current = "";
    let depth = 0;

    for (let i = 0; i < text.length; i++) {
      const c = text[i];

      if (c === "{") depth++;
      if (c === "}") depth--;

      if (c === "," && depth === 0) {
        rows.push(current);
        current = "";
      } else {
        current += c;
      }
    }

    rows.push(current);

    return rows;
  }

  function tokenizeRow(row) {
    const tokens = [];
    let i = 0;

    while (i < row.length) {

      if (/\s/.test(row[i])) {
        i++;
        continue;
      }

      /*
       * {...} is one tableau entry.
       */
      if (row[i] === "{") {
        let depth = 1;
        let j = i + 1;

        while (j < row.length && depth > 0) {
          if (row[j] === "{") depth++;
          if (row[j] === "}") depth--;
          j++;
        }

        tokens.push(row.slice(i + 1, j - 1));
        i = j;
        continue;
      }

      /*
       * TeX commands such as \alpha are one entry.
       */
      if (row[i] === "\\") {
        let j = i + 1;

        while (
          j < row.length &&
          /[A-Za-z@]/.test(row[j])
        ) {
          j++;
        }

        tokens.push(row.slice(i, j));
        i = j;
        continue;
      }

      /*
       * Ordinary characters are individual entries.
       */
      tokens.push(row[i]);
      i++;
    }

    return tokens;
  }

  function makeCell(content, className) {
    return (
      "\\class{youngtab-cell " +
      className +
      "}{" +
      content +
      "}"
    );
  }

  function makeRow(contents, className) {
    return (
      "\\class{youngtab-row}{" +
      contents.map(function (x) {
        return makeCell(x, className);
      }).join("") +
      "}"
    );
  }

  function makeDiagram(shape) {
    const rows = shape
      .split(",")
      .map(function (x) {
        return parseInt(x.trim(), 10);
      })
      .filter(function (x) {
        return Number.isFinite(x) && x > 0;
      });

    const className = installCSS(lineThickness);

    const rowMarkup = rows.map(function (n) {
      const cells = [];

      for (let i = 0; i < n; i++) {
        cells.push("\\phantom{1}");
      }

      return makeRow(cells, className);
    });

    return (
      "\\class{youngtab-tableau}{" +
      "\\begin{gathered}" +
      rowMarkup.join(" \\\\ ") +
      "\\end{gathered}" +
      "}"
    );
  }

  function makeTableau(content) {
    const rows = splitRows(content);
    const className = installCSS(lineThickness);

    const rowMarkup = rows.map(function (row) {
      return makeRow(
        tokenizeRow(row),
        className
      );
    });

    return (
      "\\class{youngtab-tableau}{" +
      "\\begin{gathered}" +
      rowMarkup.join(" \\\\ ") +
      "\\end{gathered}" +
      "}"
    );
  }

  function findClosingParen(text, start) {
    let depth = 1;
    let braces = 0;

    for (let i = start; i < text.length; i++) {
      const c = text[i];

      if (c === "{") {
        braces++;
      } else if (c === "}") {
        braces--;
      } else if (braces === 0) {
        if (c === "(") {
          depth++;
        } else if (c === ")") {
          depth--;

          if (depth === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }

  function processText(text) {

    /*
     * Handle \Ylinethick{...}
     */
    text = text.replace(
      /\\Ylinethick\s*\{([^{}]+)\}/g,
      function (_, thickness) {
        lineThickness = thickness.trim();
        return "";
      }
    );

    let result = "";
    let position = 0;

    while (position < text.length) {

      const yng = text.indexOf("\\yng", position);
      const young = text.indexOf("\\young", position);

      let index = -1;
      let command = "";

      if (
        yng !== -1 &&
        (young === -1 || yng < young)
      ) {
        index = yng;
        command = "\\yng";
      } else if (young !== -1) {
        index = young;
        command = "\\young";
      }

      if (index === -1) {
        result += text.slice(position);
        break;
      }

      result += text.slice(position, index);

      const open = text.indexOf(
        "(",
        index + command.length
      );

      if (open === -1) {
        result += text.slice(index);
        break;
      }

      const close = findClosingParen(
        text,
        open + 1
      );

      if (close === -1) {
        result += text.slice(index);
        break;
      }

      const argument = text.slice(
        open + 1,
        close
      );

      if (command === "\\yng") {
        result += makeDiagram(argument);
      } else {
        result += makeTableau(argument);
      }

      position = close + 1;
    }

    return result;
  }

  /*
   * IMPORTANT:
   *
   * This script is loaded with defer, so by the time this
   * executes the document has been parsed and document.body
   * exists.
   */
  function processDocument() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(function (node) {
      const parent = node.parentElement;

      if (!parent) return;

      if (
        parent.closest(
          "pre, code, script, style, textarea"
        )
      ) {
        return;
      }

      const text = node.nodeValue;

      if (
        text.includes("\\yng") ||
        text.includes("\\young") ||
        text.includes("\\Ylinethick")
      ) {
        node.nodeValue = processText(text);
      }
    });
  }

  processDocument();

})();