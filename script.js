const buttons = document.querySelectorAll(".js-toggle");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    const accordionTitle = button.parentElement;
    accordionTitle.classList.toggle("accordion__title--selected");

    const accordionDetails = button.parentElement.nextElementSibling;
    accordionDetails.hidden = isExpanded;
  });
});
