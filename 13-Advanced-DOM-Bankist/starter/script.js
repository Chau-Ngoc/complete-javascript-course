"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomColorRGB = function () {
    const red = generateRandomNumber(0, 255);
    const green = generateRandomNumber(0, 255);
    const blue = generateRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
};

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

///////////////////////////////////////
// Modal window

btnsOpenModal.forEach(function (button) {
    button.addEventListener("click", openModal);
});
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

///////////////////////////////////////
// page navigation

btnScrollTo.addEventListener("click", function (e) {
    // const section1Coords = section1.getBoundingClientRect();
    // window.scrollTo({
    //     left: section1Coords.left + window.scrollX,
    //     top: section1Coords.top + window.scrollY,
    //     behavior: "smooth",
    // });
    section1.scrollIntoView({ behavior: "smooth" });
});

// 1. add event listener to a common parent element
// 2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies to improve functionality and analytics.";
message.innerHTML =
    "We use cookies to improve functionality and" +
    ' analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete elements
document
    .querySelector(".btn--close-cookie")
    .addEventListener("click", function () {
        message.remove();
    });

////////////////////// STYLES //////////////////////
// style the cookie message element
message.style.backgroundColor = "#192129";
// message.style.width = "120%";

// the style attribute is actually the inline style of the element
console.log(message.style.color);
console.log(message.style.backgroundColor);

// to get the separated styles from a css file you use getComputedStyle
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

message.style.height =
    Number.parseFloat(getComputedStyle(message).height) + 20 + "px";

document.documentElement.style.setProperty("--color-primary", "coral");

////////////////////// ATTRIBUTES //////////////////////
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.getAttribute("src"));
console.log(logo.alt);
console.log(logo.className);

// this does not work, will return undefined
console.log(logo.designer);
// use getAttribute instead
console.log(logo.getAttribute("designer"));

logo.setAttribute("company", "bankist");

// get the value of the data attribute
console.log(logo.dataset.versionNumber);
*/

/*
const alertH1 = function (e) {
    alert("addEventListener: great you are reading the heading 🧐");
    h1.removeEventListener("mouseenter", alertH1);
};
const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", alertH1);

// setTimeout(function () {
//     h1.removeEventListener("mouseenter", alertH1);
// }, 1000);
*/

/*
document.querySelector(".nav__link").addEventListener("click", function (e) {
    this.style.backgroundColor = generateRandomColorRGB();
    console.log("LINK", e.target, e.currentTarget, this.style.backgroundColor);
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
    this.style.backgroundColor = generateRandomColorRGB();
    console.log("NAV LINKS", e.target, e.currentTarget, this.style.backgroundColor);
});
document.querySelector(".nav").addEventListener("click", function (e) {
    this.style.backgroundColor = generateRandomColorRGB();
    console.log("NAV", e.target, e.currentTarget, this.style.backgroundColor);
});
*/
