const navButton = document.querySelector("header > button");
const closeButton = document.querySelector("header > .mobile-nav > img");
const navPopup = document.querySelector(".mobile-nav");

navButton.addEventListener("click", () => {
  navPopup.setAttribute("aria-expanded", "true");
  document.body.style.overflowY = "hidden";
});

closeButton.addEventListener("click", () => {
  navPopup.setAttribute("aria-expanded", "false");
  // navPopup.addEventListener("animationend", () => );
  document.body.style.overflowY = "auto";
});
