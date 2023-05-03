const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
const navLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav--active");

  nav.style.transition =
    "visibility 0.3s ease-in-out, transform 0.3s ease-in-out";

  document.body.classList.toggle("stop-scroll");
});

nav.addEventListener("transitionend", () => {
  if (!nav.classList.contains("header__nav--active")) {
    nav.removeAttribute("style");
  }
});

navLinks.forEach(function (el) {
  el.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    nav.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});
