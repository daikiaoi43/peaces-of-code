const links = document.querySelector(".links");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  // show vertical links
  links.classList.toggle("show-vertical-links");
  // animate hamburger and make it look X instead of 3 lines
  hamburgerMenu.classList.toggle("animate-hamburger");
});
