function ClickableTab(contentChangable, inputId) {
  const activeLinks = document.querySelectorAll(".common-btn");
  for (const activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  activeLinks[contentChangable].classList.add("active");
  const check = document.getElementById(inputId);
  check.checked = true;
}
