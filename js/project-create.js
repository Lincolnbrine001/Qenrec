/* ============================================================
   QENREC - CREATE PROJECT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {


  /* ==========================================================
     MOBILE SIDEBAR
     ========================================================== */

  const sidebar =
    document.querySelector(
      "#createSidebar"
    );

  const overlay =
    document.querySelector(
      "#createOverlay"
    );

  const mobileMenu =
    document.querySelector(
      "#createMobileMenu"
    );

  const closeButton =
    document.querySelector(
      "#createSidebarClose"
    );


  function openSidebar() {

    sidebar?.classList.add(
      "is-open"
    );

    overlay?.classList.add(
      "is-visible"
    );

  }


  function closeSidebar() {

    sidebar?.classList.remove(
      "is-open"
    );

    overlay?.classList.remove(
      "is-visible"
    );

  }


  mobileMenu?.addEventListener(
    "click",
    openSidebar
  );


  closeButton?.addEventListener(
    "click",
    closeSidebar
  );


  overlay?.addEventListener(
    "click",
    closeSidebar
  );


  /* ==========================================================
     CREATE PROJECT
     ========================================================== */

  const form =
    document.querySelector(
      "#projectCreateForm"
    );


  form?.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const submitButton =
        form.querySelector(
          ".create-submit"
        );


      const projectName =
        document.querySelector(
          "#projectName"
        )?.value.trim();


      if (!projectName) {

        return;

      }


      /*
       * This is only the front-end stage.
       * Later this will create a real database record.
       */

      if (submitButton) {

        submitButton.disabled =
          true;

        submitButton.innerHTML = `
          Creating project
          <i class="ph ph-spinner-gap"></i>
        `;

      }


      window.setTimeout(
        () => {

          /*
           * Temporary front-end destination.
           * The real project workspace will replace this
           * once that screen is implemented.
           */

          window.location.href =
            "project.html";

        },
        700
      );

    }
  );


});