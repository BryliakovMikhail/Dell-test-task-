"use strict";

var burger = document.querySelector(".burger");
var nav = document.querySelector(".header__nav");
var navLinks = document.querySelectorAll(".nav__link");
burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav--active");
  nav.style.transition = "visibility 0.3s ease-in-out, transform 0.3s ease-in-out";
  document.body.classList.toggle("stop-scroll");
});
nav.addEventListener("transitionend", function () {
  if (!nav.classList.contains("header__nav--active")) {
    nav.removeAttribute("style");
  }
});
navLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    nav.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});
"use strict";

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next"
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  mousewheel: {
    sensitivity: 0.2
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    }
  }
});
"use strict";

var form = document.querySelector(".form");
var inputName = document.querySelector(".from-name");
var inputPhone = document.querySelector(".form-tel");
var errorName = document.querySelector(".error-name");
var errorPhone = document.querySelector(".error-tel");
var showMistake = function showMistake() {
  if (inputName.value == "") errorName.style.display = "block";
  if (inputPhone.value == "") errorPhone.style.display = "block";
};
var deleteMistake = function deleteMistake() {
  inputName.addEventListener("input", function () {
    errorName.style.display = "none";
  });
  inputPhone.addEventListener("input", function () {
    errorPhone.style.display = "none";
  });
};
form.addEventListener("submit", function (el) {
  el.preventDefault();
  showMistake();
});
deleteMistake();
"use strict";