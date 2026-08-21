(function () {
  "use strict";

  /*
   * A small MathJax 3 front-end for the syntax used by the
   * LaTeX youngtab package:
   *
   *     \yng(3,2,1)
   *     \young(134,25)
   *     \Ylinethick{1pt}
   *
   * The commands are converted to MathJax \class{} markup,
   * and CSS then turns the individual cells into boxes.
   */

  let lineThickness = "0.4pt";
  let thicknessCounter = 0;

  /*
   * Make a safe CSS class name from a thickness such as "1pt",
   * "0.8pt", or "1.2px".
   */
  function thicknessClass(thickness) {
    const name = thickness
      .replace(/[^a-zA-Z0-9]/g, "_");

    return "yt-thickness-" + name;
  }

  /*
   * Register the CSS needed for a particular line thickness.
   */
  function registerThickness(thickness) {
    const className = thicknessClass(thickness);

    if (document.getElementById(className)) {
      return className;
    }

    const style = document.createElement("style");
    style.id = className;

    style.textContent = `
      mjx-mrow.yt-cell.${className} {
        --yt-line-thickness: ${thickness};

        box-sizing: border-box;

        width: 1.55em;
        height: 1.55em;

        display: inline-flex !important;

        align-items: center;
        justify-content: center;

        border: var(--yt-line-thickness) solid currentColor;

        /*
         * Adjacent cells share a boundary rather than producing
         * a doubled line.
         */
        margin-left: calc(-1 * var(--yt-line-thickness));
        margin-top: calc(-1 * var(--yt-line-thickness));
      }

      mjx-mrow.yt-cell.${className}:first-child {
        margin-left: 0;
      }

      mjx-mrow.yt-row {
        display: flex !important;
        align-items: stretch;
        height: 1.55em;
      }

      mjx-mrow.yt-row:first-child
      mjx-mrow.yt-cell.${className} {
        margin-top: 0;
      }

      mjx-mrow.yt-tableau {
        display: inline-block !important;
        vertical-align: middle;
        line-height: 1;
      }
    `;

    document.head.appendChild(style);

    return className;
  }

  /*
   * Split something like
   *
   *     abc,{d,e},f
   *
   * at commas that are not inside braces.
   */
  function splitRows(text) {
    const rows = [];
    let current = "";
    let braceDepth = 0;

    for (let i = 0; i < text.length; i++) {
      const c = text[i];

      if (c === "{") {
        braceDepth++;
        current += c;
      } else if (c === "}") {
        braceDepth--;
        current += c;
      } else if (c === "," && braceDepth === 0) {
        rows.push(current);
        current = "";
      } else {
        current += c;
      }
    }

    rows.push(current);

    return rows;
  }

  /*
   * Tokenize one row of a \young tableau.
   *
   * Examples:
   *
   *     abc       -> a b c
   *     {a_i}bc   -> {a_i} b c
   *     \alpha bc -> \alpha b c
   */
  function tokenizeRow(row) {
    const tokens = [];
    let i = 0;

    while (i < row.length) {

      /*
       * Ignore whitespace between entries.
       */
      if (/\s/.test(row[i])) {
        i++;
        continue;
      }

      /*
       * A braced expression is one tableau entry.
       */
      if (row[i] === "{") {
        let depth = 1;
        let j = i + 1;

        while (j < row.length && depth > 0) {
          if (row[j] === "{") depth++;
          if (row[j] === "}") depth--;
          j++;
        }

        if (depth === 0) {
          tokens.push(row.slice(i + 1, j - 1));
          i = j;
          continue;
        }
      }

      /*
       * A TeX command is one entry.
       *
       * Thus \alpha counts as one box rather than six.
       */
      if (row[i] === "\\") {
        let j = i + 1;

        while (
          j < row.length &&
          /[A-Za-z@]/.test(row[j])
        ) {
          j++;
        }

        /*
         * Handle commands such as \^ or \_.
         */
        if (j === i + 1 && j < row.length) {
          j++;
        }

        /*
         * If the command has a braced argument, keep the
         * argument with the command.
         */
        if (
          j < row.length &&
          row[j] === "{"
        ) {
          let depth = 1;
          let k = j + 1;

          while (k < row.length && depth > 0) {
            if (row[k] === "{") depth++;
            if (row[k] === "}") depth--;
            k++;
          }

          if (depth === 0) {
            j = k;
          }
        }

        tokens.push(row.slice(i, j));
        i = j;
        continue;
      }

      /*
       * Ordinary characters are individual boxes.
       */
      tokens.push(row[i]);
      i++;
    }

    return tokens;
  }

  /*
   * Generate one tableau cell.
   */
  function cell(content, className) {
    return (
      "\\class{yt-cell " +
      className +
      "}{" +
      content +
      "}"
    );
  }

  /*
   * Generate one row.
   */
  function makeRow(cells, className) {
    return (
      "\\class{yt-row}{" +
      cells.map(c => cell(c, className)).join("") +
      "}"
    );
  }

  /*
   * Generate the complete tableau.
   */
  function makeTableau(rows) {
    const className = registerThickness(lineThickness);

    const rowMarkup = rows.map(row => {
      const tokens = tokenizeRow(row);

      return makeRow(tokens, className);
    });

    /*
     * gathered gives us vertically stacked rows while each
     * individual row is made into a flex container by CSS.
     */
    return (
      "\\class{yt-tableau}{" +
      "\\begin{gathered}" +
      rowMarkup.join(" \\\\ ") +
      "\\end{gathered}" +
      "}"
    );
  }

  /*
   * Generate a Young diagram from
   *
   *     \yng(3,2,1)
   */
  function makeDiagram(shape) {
    const rows = shape
      .split(",")
      .map(s => parseInt(s.trim(), 10))
      .filter(n => Number.isFinite(n) && n > 0);

    const className = registerThickness(lineThickness);

    const rowMarkup = rows.map(n => {
      const cells = [];

      for (let i = 0; i < n; i++) {
        cells.push(
          cell("\\phantom{1}", className)
        );
      }

      return makeRow(cells, className);
    });

    return (
      "\\class{yt-tableau}{" +
      "\\begin{gathered}" +
      rowMarkup.join(" \\\\ ") +
      "\\end{gathered}" +
      "}"
    );
  }

  /*
   * Find the closing parenthesis belonging to a command.
   *
   * We need this because \young(...) can contain braces and
   * other material.
   */
  function findClosingParenthesis(text, start) {
    let parenDepth = 1;
    let braceDepth = 0;

    for (let i = start; i < text.length; i++) {
      const c = text[i];

      if (c === "{") {
        braceDepth++;
      } else if (c === "}") {
        braceDepth--;
      } else if (braceDepth === 0) {
        if (c === "(") {
          parenDepth++;
        } else if (c === ")") {
          parenDepth--;

          if (parenDepth === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }

  /*
   * Replace \Ylinethick{...}, \yng(...), and \young(...)
   * in a text node.
   */
  function processText(text) {

    /*
     * \Ylinethick{1pt}
     */
    const thicknessRegex =
      /\\Ylinethick\s*\{([^{}]+)\}/g;

    text = text.replace(
      thicknessRegex,
      function (_, thickness) {
        lineThickness = thickness.trim();
        registerThickness(lineThickness);
        return "";
      }
    );

    /*
     * Process \yng(...)
     */
    let result = "";
    let position = 0;

    while (position < text.length) {

      const yngIndex = text.indexOf("\\yng", position);
      const youngIndex = text.indexOf("\\young", position);

      let index = -1;
      let command = null;

      if (yngIndex !== -1 &&
          (youngIndex === -1 || yngIndex < youngIndex)) {
        index = yngIndex;
        command = "\\yng";
      } else if (youngIndex !== -1) {
        index = youngIndex;
        command = "\\young";
      }

      if (index === -1) {
        result += text.slice(position);
        break;
      }

      result += text.slice(position, index);

      /*
       * Find the opening parenthesis.
       */
      const open = text.indexOf("(", index + command.length);

      if (open === -1) {
        result += text.slice(index);
        break;
      }

      const close = findClosingParenthesis(
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
        result += makeTableau(
          splitRows(argument)
        );
      }

      position = close + 1;
    }

    return result;
  }

  /*
   * Walk through the document and modify text nodes before
   * MathJax performs its initial typesetting.
   */
  function preprocessDocument() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {
      const parent = node.parentElement;

      if (!parent) {
        return;
      }

      /*
       * Never modify code examples, scripts, etc.
       */
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

  /*
   * Hook into MathJax's startup sequence.
   *
   * The HTML extension provides \class{}.
   */
  window.MathJax = window.MathJax || {};

  window.MathJax.tex =
    window.MathJax.tex || {};

  window.MathJax.tex.packages =
    window.MathJax.tex.packages || {};

  window.MathJax.tex.packages["[+]"] =
    window.MathJax.tex.packages["[+]"] || [];

  if (
    !window.MathJax.tex.packages["[+]"]
      .includes("html")
  ) {
    window.MathJax.tex.packages["[+]"]
      .push("html");
  }

  window.MathJax.startup =
    window.MathJax.startup || {};

  const oldReady =
    window.MathJax.startup.ready;

  window.MathJax.startup.ready =
    function () {

      preprocessDocument();

      if (oldReady) {
        oldReady();
      } else {
        window.MathJax.startup.defaultReady();
      }
    };

})();
