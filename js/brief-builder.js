document.addEventListener("DOMContentLoaded", () => {

  const sidebar =
    document.querySelector("#builderSidebar");

  const overlay =
    document.querySelector("#builderOverlay");

  const mobileMenu =
    document.querySelector("#builderMobileMenu");

  const closeButton =
    document.querySelector("#builderSidebarClose");


  function openSidebar() {

    sidebar?.classList.add("is-open");

    overlay?.classList.add("is-visible");

  }


  function closeSidebar() {

    sidebar?.classList.remove("is-open");

    overlay?.classList.remove("is-visible");

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


  /*
   * Section selection
   */

  const sections =
    document.querySelectorAll(
      ".builder-section-item"
    );


  sections.forEach(
    (section) => {

      section.addEventListener(
        "click",
        () => {

          sections.forEach(
            (item) => {

              item.classList.remove(
                "is-active"
              );

            }
          );


          section.classList.add(
            "is-active"
          );

        }
      );

    }
  );

});