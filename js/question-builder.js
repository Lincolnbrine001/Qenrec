document.addEventListener("DOMContentLoaded", () => {


  /* ==========================================================
     MOBILE SIDEBAR
     ========================================================== */

  const sidebar =
    document.querySelector("#qbSidebar");

  const overlay =
    document.querySelector("#qbOverlay");

  const mobileMenu =
    document.querySelector("#qbMobileMenu");

  const closeButton =
    document.querySelector("#qbSidebarClose");


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


  /* ==========================================================
     QUESTION TYPE
     ========================================================== */

  const questionType =
    document.querySelector("#questionType");

  const optionsField =
    document.querySelector("#optionsField");

  const previewShort =
    document.querySelector("#previewShort");

  const previewOptions =
    document.querySelector("#previewOptions");


  function updateQuestionType() {

    const type =
      questionType.value;


    const showOptions =
      type === "single" ||
      type === "multiple";


    optionsField.style.display =
      showOptions
        ? "block"
        : "none";


    previewShort.style.display =
      showOptions
        ? "none"
        : "flex";


    previewOptions.style.display =
      showOptions
        ? "grid"
        : "none";

  }


  questionType.addEventListener(
    "change",
    updateQuestionType
  );


  updateQuestionType();


  /* ==========================================================
     LIVE QUESTION PREVIEW
     ========================================================== */

  const questionText =
    document.querySelector("#questionText");

  const questionDescription =
    document.querySelector("#questionDescription");

  const previewQuestion =
    document.querySelector("#previewQuestion");

  const previewDescription =
    document.querySelector("#previewDescription");


  function updatePreview() {

    const question =
      questionText.value.trim();


    const description =
      questionDescription.value.trim();


    previewQuestion.textContent =
      question ||
      "What does your business do?";


    previewDescription.textContent =
      description ||
      "Tell us a little about your business and what you do.";

  }


  questionText.addEventListener(
    "input",
    updatePreview
  );

  questionDescription.addEventListener(
    "input",
    updatePreview
  );


  /* ==========================================================
     OPTIONS
     ========================================================== */

  const optionsList =
    document.querySelector("#optionsList");

  const addOptionButton =
    document.querySelector("#addOptionButton");


  function renumberOptions() {

    const options =
      optionsList.querySelectorAll(
        ".qb-option"
      );


    options.forEach(
      (option, index) => {

        const number =
          option.querySelector("span");


        if (number) {

          number.textContent =
            String(index + 1)
              .padStart(2, "0");

        }

      }
    );

  }


  function updateOptionPreview() {

    previewOptions.innerHTML = "";


    const inputs =
      optionsList.querySelectorAll(
        "input"
      );


    inputs.forEach(
      (input) => {

        const value =
          input.value.trim();


        if (!value) {
          return;
        }


        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";

        button.textContent =
          value;


        previewOptions.appendChild(
          button
        );

      }
    );

  }


  function bindOptionInput(input) {

    input.addEventListener(
      "input",
      updateOptionPreview
    );

  }


  optionsList
    .querySelectorAll("input")
    .forEach(bindOptionInput);


  addOptionButton?.addEventListener(
    "click",
    () => {

      const option =
        document.createElement("div");


      option.className =
        "qb-option";


      option.innerHTML = `
        <span>00</span>

        <input
          type="text"
          placeholder="Enter an answer option"
        >

        <button
          type="button"
          class="qb-option-remove"
          aria-label="Remove option"
        >
          <i class="ph ph-x"></i>
        </button>
      `;


      optionsList.appendChild(
        option
      );


      const input =
        option.querySelector("input");


      bindOptionInput(input);


      renumberOptions();

      updateOptionPreview();

      input.focus();

    }
  );


  optionsList.addEventListener(
    "click",
    (event) => {

      const removeButton =
        event.target.closest(
          ".qb-option-remove"
        );


      if (!removeButton) {
        return;
      }


      removeButton
        .closest(".qb-option")
        ?.remove();


      renumberOptions();

      updateOptionPreview();

    }
  );


  /* ==========================================================
     SAVE
     ========================================================== */

  const form =
    document.querySelector("#questionForm");

  const saveButton =
    document.querySelector("#saveQuestionButton");


  form?.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const question =
        questionText.value.trim();


      if (!question) {

        questionText.focus();

        return;

      }


      saveButton.disabled =
        true;


      saveButton.textContent =
        "Question saved";


      setTimeout(
        () => {

          window.location.href =
            "brief-builder.html";

        },
        600
      );

    }
  );


  saveButton?.addEventListener(
    "click",
    () => {

      form?.requestSubmit();

    }
  );

});