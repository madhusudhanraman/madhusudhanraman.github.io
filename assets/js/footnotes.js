document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector(".page__content");
  if (!article) return;

  const footnoteContainer = article.querySelector(".footnotes");
  if (!footnoteContainer) return;

  const footnotes = Array.from(
    footnoteContainer.querySelectorAll("li[id^='fn:']")
  );

  if (!footnotes.length) return;

  const references = Array.from(
    article.querySelectorAll("a.footnote[href^='#fn:']")
  );

  if (!references.length) return;


  /*
   * ------------------------------------------------------------
   * Utility functions
   * ------------------------------------------------------------
   */

  function getFootnote(reference) {
    const href = reference.getAttribute("href");
    if (!href) return null;

    return article.querySelector(
      "#" + CSS.escape(href.substring(1))
    );
  }

  function getReferenceNumber(reference) {
    return reference.textContent.trim();
  }

  function getReferenceParagraph(reference) {
    return reference.closest(
      "p, li, blockquote, figcaption, td, th"
    );
  }

  function createFootnoteContent(footnote, reference) {
    const wrapper = document.createElement("div");
    wrapper.className = "footnote-content";

    const number = document.createElement("span");
    number.className = "footnote-number";
    number.textContent = getReferenceNumber(reference);

    const content = document.createElement("div");
    content.className = "footnote-text";

    const clone = footnote.cloneNode(true);

    clone.removeAttribute("id");

    clone.querySelectorAll(".reversefootnote").forEach(function (link) {
      link.remove();
    });

    while (clone.firstChild) {
      content.appendChild(clone.firstChild);
    }

    wrapper.appendChild(number);
    wrapper.appendChild(content);

    return wrapper;
  }


/*
 * ------------------------------------------------------------
 * Desktop sidebar
 * ------------------------------------------------------------
 */

const sidebar = document.createElement("aside");

sidebar.className = "footnote-sidebar";
sidebar.setAttribute("aria-label", "Footnotes");

document.body.appendChild(sidebar);


/*
 * Keep track of the footnote elements currently in the sidebar.
 *
 * We don't immediately delete notes that are no longer visible.
 * Instead, we fade them out first.
 */
const desktopNotes = new Map();


function createDesktopFootnote(reference) {
  const footnote = getFootnote(reference);

  if (!footnote) return null;

  const note = document.createElement("div");

  note.className = "footnote-sidebar__item";

  note.appendChild(
    createFootnoteContent(footnote, reference)
  );

  return note;
}


/*
 * Display every footnote whose reference is currently
 * visible in the viewport.
 */
function updateDesktopFootnotes() {

  if (window.innerWidth < 1200) {
    sidebar.classList.remove("is-visible");

    /*
     * Fade everything out rather than deleting it immediately.
     */
    desktopNotes.forEach(function (item) {
      item.element.classList.remove("is-visible");
    });

    return;
  }


  /*
   * Determine which references are currently visible.
   */
  const visibleReferences = [];

  references.forEach(function (reference) {

    const rect = reference.getBoundingClientRect();

    if (
      rect.bottom >= 0 &&
      rect.top <= window.innerHeight
    ) {
      visibleReferences.push({
        reference: reference,
        rect: rect
      });
    }
  });


  /*
   * Keep track of which notes are currently visible.
   */
  const visibleKeys = new Set();


  visibleReferences.forEach(function (entry) {

    const reference = entry.reference;

    /*
     * Use the reference itself as the key.
     */
    visibleKeys.add(reference);


    /*
     * If this note isn't already in the sidebar,
     * create it.
     */
    if (!desktopNotes.has(reference)) {

      const element =
        createDesktopFootnote(reference);

      if (!element) return;

      sidebar.appendChild(element);

      desktopNotes.set(reference, {
        element: element,
        desiredTop:
          entry.rect.top +
          entry.rect.height / 2,
        height: 0
      });

      /*
       * Force layout so the browser recognizes the
       * initial hidden state before we fade it in.
       */
      element.offsetHeight;

      requestAnimationFrame(function () {
        element.classList.add("is-visible");
      });

    } else {

      /*
       * The note already exists. Just update its desired
       * position.
       */
      const item = desktopNotes.get(reference);

      item.desiredTop =
        entry.rect.top +
        entry.rect.height / 2;
    }
  });


  /*
   * Fade out notes whose references are no longer visible.
   */
  desktopNotes.forEach(function (item, reference) {

    if (!visibleKeys.has(reference)) {

      item.element.classList.remove("is-visible");

      /*
       * Remove the element only after the fade-out has
       * completed.
       */
      setTimeout(function () {

        /*
         * It may have become visible again while the
         * fade-out was occurring.
         */
        if (!desktopNotes.has(reference)) {
          return;
        }

        if (visibleKeys.has(reference)) {
          return;
        }

        /*
         * Check whether the element is still hidden.
         */
        if (
          !item.element.classList.contains(
            "is-visible"
          )
        ) {
          item.element.remove();
          desktopNotes.delete(reference);
        }

      }, 600);
    }
  });


  /*
   * ----------------------------------------------------------
   * Position the visible notes
   * ----------------------------------------------------------
   */

  const items = [];

  desktopNotes.forEach(function (item, reference) {

    if (!visibleKeys.has(reference)) {
      return;
    }

    item.height =
      item.element.offsetHeight;

    items.push(item);
  });


  /*
   * Sort according to vertical position.
   */
  items.sort(function (a, b) {
    return a.desiredTop - b.desiredTop;
  });


  const gap = 24;
  const margin = 16;

  let previousBottom = margin;


  items.forEach(function (item) {

    let top =
      item.desiredTop -
      item.height / 2;


    /*
     * Don't allow the note to extend above
     * the viewport.
     */
    top = Math.max(
      top,
      margin
    );


    /*
     * Prevent overlapping notes.
     */
    if (
      top <
      previousBottom + gap
    ) {
      top =
        previousBottom +
        gap;
    }


    /*
     * Don't allow the note to extend below
     * the viewport.
     */
    const maximumTop =
      window.innerHeight -
      item.height -
      margin;

    top = Math.min(
      top,
      maximumTop
    );


    item.element.style.top =
      top + "px";


    previousBottom =
      top + item.height;
  });


  /*
   * The sidebar itself is visible as long as at least
   * one footnote is present.
   */
  if (visibleKeys.size > 0) {
    sidebar.classList.add("is-visible");
  } else {
    sidebar.classList.remove("is-visible");
  }
}

  /*
   * ------------------------------------------------------------
   * Mobile inline footnotes
   * ------------------------------------------------------------
   */

  function closeMobileFootnote(reference) {
    const paragraph = getReferenceParagraph(reference);

    if (!paragraph) return;

    const existing = paragraph.nextElementSibling;

    if (
      existing &&
      existing.classList.contains("mobile-footnote")
    ) {
      existing.remove();
      reference.setAttribute("aria-expanded", "false");
    }
  }


  function openMobileFootnote(reference) {
    const paragraph = getReferenceParagraph(reference);
    const footnote = getFootnote(reference);

    if (!paragraph || !footnote) return;

    const existing = paragraph.nextElementSibling;

    /*
     * Tapping an open reference closes its note.
     */
    if (
      existing &&
      existing.classList.contains("mobile-footnote")
    ) {
      existing.remove();
      reference.setAttribute("aria-expanded", "false");
      return;
    }

    /*
     * Close any other open mobile footnotes.
     */
    article
      .querySelectorAll(".mobile-footnote")
      .forEach(function (note) {
        note.remove();
      });

    article
      .querySelectorAll(
        "a.footnote[aria-expanded='true']"
      )
      .forEach(function (link) {
        link.setAttribute(
          "aria-expanded",
          "false"
        );
      });

    /*
     * Create the inline note.
     */
    const note = document.createElement("aside");

    note.className = "mobile-footnote";

    note.appendChild(
      createFootnoteContent(
        footnote,
        reference
      )
    );



    /*
     * Insert immediately after the paragraph.
     */
    paragraph.insertAdjacentElement(
      "afterend",
      note
    );

    reference.setAttribute(
      "aria-expanded",
      "true"
    );
  }


  /*
   * ------------------------------------------------------------
   * Reference events
   * ------------------------------------------------------------
   */

  references.forEach(function (reference) {

    reference.setAttribute(
      "aria-expanded",
      "false"
    );

    reference.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        if (window.innerWidth < 1200) {
          openMobileFootnote(reference);
        } else {
          /*
           * On desktop, clicking simply ensures that the
           * corresponding note is visible.
           */
          updateDesktopFootnotes();
        }
      }
    );

    /*
     * Keyboard focus should also update the desktop notes.
     */
    reference.addEventListener(
      "focus",
      function () {
        if (window.innerWidth >= 1200) {
          updateDesktopFootnotes();
        }
      }
    );
  });


  /*
   * ------------------------------------------------------------
   * Scrolling
   * ------------------------------------------------------------
   */

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateDesktopFootnotes();
        ticking = false;
      });

      ticking = true;
    }
  }

  window.addEventListener(
    "scroll",
    onScroll,
    { passive: true }
  );


  /*
   * ------------------------------------------------------------
   * Resizing
   * ------------------------------------------------------------
   */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth >= 1200) {

        /*
         * Remove mobile notes when switching to desktop.
         */
        article
          .querySelectorAll(".mobile-footnote")
          .forEach(function (note) {
            note.remove();
          });

        article
          .querySelectorAll(
            "a.footnote"
          )
          .forEach(function (link) {
            link.setAttribute(
              "aria-expanded",
              "false"
            );
          });

        updateDesktopFootnotes();

      } else {

        sidebar.classList.remove(
          "is-visible"
        );

        sidebar.innerHTML = "";
      }
    }
  );


  /*
   * ------------------------------------------------------------
   * Initial state
   * ------------------------------------------------------------
   */

  updateDesktopFootnotes();
});
