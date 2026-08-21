/* ============================================================
   QENREC - PROJECT WORKSPACE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {


  /* ==========================================================
     MOBILE SIDEBAR
     ========================================================== */

  const sidebar =
    document.querySelector(
      "#projectSidebar"
    );

  const overlay =
    document.querySelector(
      "#projectOverlay"
    );

  const mobileMenu =
    document.querySelector(
      "#projectMobileMenu"
    );

  const closeButton =
    document.querySelector(
      "#projectSidebarClose"
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
     PROJECT TABS
     ========================================================== */

  const tabs =
    document.querySelectorAll(
      ".project-tab"
    );


  tabs.forEach(
    (tab) => {

      tab.addEventListener(
        "click",
        () => {

          tabs.forEach(
            (item) => {

              item.classList.remove(
                "is-active"
              );

            }
          );


          tab.classList.add(
            "is-active"
          );

        }
      );

    }
  );


  /* ==========================================================
     SHARE BUTTON
     ========================================================== */

  const shareButton =
    document.querySelector(
      ".project-secondary-button"
    );


  shareButton?.addEventListener(
    "click",
    async () => {

      const projectUrl =
        window.location.href;


      try {

        await navigator.clipboard.writeText(
          projectUrl
        );

        const original =
          shareButton.innerHTML;


        shareButton.innerHTML = `
          <i class="ph ph-check"></i>
          Link copied
        `;


        setTimeout(
          () => {

            shareButton.innerHTML =
              original;

          },
          1800
        );

      } catch (error) {

        console.log(
          "Unable to copy project URL.",
          error
        );

      }

    }
  );


});