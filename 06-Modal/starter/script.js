"use strict";

const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const buttonsShowModal = document.querySelectorAll(".show-modal");
const buttonCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

console.log(buttonsShowModal);

for (let i = 0; i < buttonsShowModal.length; i++) {
    buttonsShowModal[i].addEventListener("click", openModal);
}

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});