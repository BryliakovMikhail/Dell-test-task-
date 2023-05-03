const form = document.querySelector(".form");
const inputName = document.querySelector(".from-name");
const inputPhone = document.querySelector(".form-tel");
const errorName = document.querySelector(".error-name");
const errorPhone = document.querySelector(".error-tel");

const showMistake = () => {
  if (inputName.value == "") errorName.style.display = "block";
  if (inputPhone.value == "") errorPhone.style.display = "block";
};

const deleteMistake = () => {
  inputName.addEventListener("input", () => {
    errorName.style.display = "none";
  });
  inputPhone.addEventListener("input", () => {
    errorPhone.style.display = "none";
  });
};

form.addEventListener("submit", (el) => {
  el.preventDefault();
  showMistake();
});

deleteMistake();
