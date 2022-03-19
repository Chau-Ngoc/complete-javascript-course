"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(airline.length);

console.log(airline.indexOf("Por"));
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

// slicing strings
console.log(airline.slice(4));
console.log(airline.slice(4, 6));

console.log("---------- REVERSE INDEXING ----------");
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// create a function to check if a seat is middle seat or not
const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === "B" || s === "E") {
        console.log("You got the middle seat");
    } else {
        console.log("You got lucky!");
    }
};

checkMiddleSeat("11B");
checkMiddleSeat("10E");
checkMiddleSeat("2A");

// changing the case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// comparing emails
const email = "chau@gmail.com";
const loginEmail = "   Chau@Gmail.com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
console.log(email === trimmedEmail);

// replacing characters
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
    "All passengers come to boarding door 23. Boarding door" + " 23.";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// booleans
const newPlane = "Airbus A320neo";
console.log(newPlane.includes("neo"));
console.log(newPlane.includes("Boeing"));
console.log(newPlane.startsWith("Airb"));
console.log(newPlane.endsWith("neo"));

// split a string into items of an array
const splitThis = "a+very+nice+string";
console.log(splitThis.split("+"));

// join items of an array into a string
const newName = ["Mr", "Chau", "Le", "Ngoc"];
console.log(newName.join(" "));

const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesCapitalized = [];

    for (const n of names) {
        namesCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
    }
    return namesCapitalized.join(" ");
};

const passengers = "jessica ann kira kendra lana";
console.log(capitalizeName(passengers));

// padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));

const maskCreditCard = function (number) {
    const cardNumberToString = number + "";
    const lastFour = cardNumberToString.slice(-4);
    return lastFour.padStart(cardNumberToString.length, "*");
};

console.log(maskCreditCard(456412313789456));
console.log(maskCreditCard(13789412));

// repeat
const message2 = "Bad weather...All departures delayed.";
console.log(message2.repeat(5));

const planesInLine = function (number) {
    const warning = `There are ${number} planes in line ${"✈".repeat(number)}`;
    return warning;
};

console.log(planesInLine(5));
console.log(planesInLine(10));
