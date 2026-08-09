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
   * Create desktop sidebar
   * ------------------------------------------------------------
   */

  const sidebar = document.createElement("aside");
  sidebar.className = "footnote-sidebar";
  sidebar.setAttribute("aria-label", "Footnote");

  document.body.appendChild(sidebar);

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
    return reference.closest("p, li, blockquote, figcaption, td, th");
  }

  function createFootnoteContent(footnote, reference) {
    const wrapper = document.createElement("div");
    wrapper.className = "footnote-content";

    const number = document.createElement("span");
    number.className = "footnote-number";
    number.textContent = getReferenceNumber(reference);

    const content = document.createElement("div");
    content.className = "footnote-text";

    /*
     * Clone the footnote so that the original endnote remains
     * untouched and available as a fallback.
     */
    const clone = footnote.cloneNode(true);

    /*
     * Remove the original list-item ID so that we don't create
     * duplicate IDs in the document.
     */
    clone.removeAttribute("id");

    /*
     * Remove Kramdown's backlink.
     */
    clone.querySelectorAll(".reversefootnote").forEach(function (link) {
      link.remove();
    });

    /*
     * Move the contents of the cloned <li> into our container.
     */
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

  function showDesktopFootnote(reference) {
    if (window.innerWidth < 1200) return;

    const footnote = getFootnote(reference);
    if (!footnote) return;

    sidebar.innerHTML = "";
    sidebar.appendChild(
      createFootnoteContent(footnote, reference)
    );

    /*
     * Position the sidebar beside the reference.
     */
    const rect = reference.getBoundingClientRect();

    /*
     * Put the top of the sidebar approximately level with
     * the footnote reference.
     */
    let top = rect.top + window.scrollY;

    /*
     * Convert to fixed-position coordinates.
     */
    top = rect.top;

    sidebar.style.top = top + "px";
    sidebar.classList.add("is-visible");
  }

  function hideDesktopFootnote() {
    sidebar.classList.remove("is-visible");
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

    /*
     * If this footnote is already open, close it.
     */
    const existing = paragraph.nextElementSibling;

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
      .querySelectorAll("a.footnote[aria-expanded='true']")
      .forEach(function (link) {
        link.setAttribute("aria-expanded", "false");
      });

    /*
     * Create the inline note.
     */
    const note = document.createElement("aside");
    note.className = "mobile-footnote";

    note.appendChild(
      createFootnoteContent(footnote, reference)
    );

    /*
     * Add a return-to-text link.
     */
    const back = document.createElement("a");
    back.className = "mobile-footnote__back";
    back.href = "#";
    back.textContent = "↩";
    back.setAttribute(
      "aria-label",
      "Return to footnote reference"
    );

    back.addEventListener("click", function (event) {
      event.preventDefault();

      reference.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      reference.focus({
        preventScroll: true
      });
    });

    note.appendChild(back);

    /*
     * Insert immediately after the paragraph containing
     * the footnote reference.
     */
    paragraph.insertAdjacentElement("afterend", note);

    reference.setAttribute("aria-expanded", "true");
  }

  /*
   * ------------------------------------------------------------
   * Reference event handlers
   * ------------------------------------------------------------
   */

  references.forEach(function (reference) {
    reference.setAttribute("aria-expanded", "false");

    reference.addEventListener("click", function (event) {
      event.preventDefault();

      if (window.innerWidth < 1200) {
        openMobileFootnote(reference);
      } else {
        showDesktopFootnote(reference);
      }
    });

    /*
     * Desktop hover behavior.
     */
    reference.addEventListener("mouseenter", function () {
      showDesktopFootnote(reference);
    });

    reference.addEventListener("focus", function () {
      if (window.innerWidth >= 1200) {
        showDesktopFootnote(reference);
      }
    });
  });

  /*
   * ------------------------------------------------------------
   * Desktop scrolling behavior
   * ------------------------------------------------------------
   *
   * Find the reference closest to the upper-middle part of the
   * viewport and display its footnote.
   */

  let ticking = false;

  function updateDesktopFootnote() {
    if (window.innerWidth < 1200) {
      hideDesktopFootnote();
      return;
    }

    let closest = null;
    let closestDistance = Infinity;

    const targetY = window.innerHeight * 0.35;

    references.forEach(function (reference) {
      const rect = reference.getBoundingClientRect();

      /*
       * Only consider references currently near the viewport.
       */
      if (
        rect.bottom < 0 ||
        rect.top > window.innerHeight
      ) {
        return;
      }

      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - targetY);

      if (distance < closestDistance) {
        closestDistance = distance;
        closest = reference;
      }
    });

    if (closest) {
      showDesktopFootnote(closest);
    } else {
      hideDesktopFootnote();
    }
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateDesktopFootnote();
        ticking = false;
      });

      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, {
    passive: true
  });

  window.addEventListener("resize", function () {
    /*
     * Remove mobile notes when switching to desktop.
     */
    if (window.innerWidth >= 1200) {
      article
        .querySelectorAll(".mobile-footnote")
        .forEach(function (note) {
          note.remove();
        });

      article
        .querySelectorAll("a.footnote")
        .forEach(function (link) {
          link.setAttribute("aria-expanded", "false");
        });

      updateDesktopFootnote();
    } else {
      hideDesktopFootnote();
    }
  });

  /*
   * Initial desktop state.
   */
  updateDesktopFootnote();
});
