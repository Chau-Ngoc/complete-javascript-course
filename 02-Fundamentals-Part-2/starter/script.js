"use strict";
/*
 function logger() {
 console.log("My name is Chau");
 }

 function mixFruit(numberOfApples, numberOfOranges) {
 const juice = `Juice with ${numberOfApples} apples and ${numberOfOranges} oranges.`;
 return juice;
 }

 function calcAge1(birthYear, currentYear) {
 return currentYear - birthYear;
 }

 logger();
 logger();
 logger();

 const juice = mixFruit(3, 1);
 console.log(juice);

 const appleOrangeJuice = mixFruit(4, 3);
 console.log(appleOrangeJuice);

 const age1 = calcAge1(1995, 2022);
 console.log(age1);

 // function expression
 const calcAge2 = function (birthYear, currentYear) {
 return birthYear - currentYear;
 };

 const age2 = calcAge2(1995, 2024);
 console.log(age2);
 */

// function expression
const calcAge2 = function (birthYear, currentYear) {
    return currentYear - birthYear;
};
const age2 = calcAge2(1995, 2024);
console.log(age2);

// arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (entitledAge,
                              birthYear,
                              currentYear,
                              firstName) => {
    const age = currentYear - birthYear;
    const yearsUntilRetirement = entitledAge - age;
    return `${firstName} has ${yearsUntilRetirement} years until retirement.`;
};
console.log(yearsUntilRetirement(65, 1995, 2022, "Le"));
console.log(yearsUntilRetirement(65, 1967, 2022, "Duong"));

// calling functions inside another function
function cutFruitToPieces(numberOfFruits, pieces) {
    return numberOfFruits * pieces;
}

function mixFruit(numberOfApples, numberOfOranges) {
    const applePieces = cutFruitToPieces(numberOfApples, 4);
    const orangePieces = cutFruitToPieces(numberOfOranges, 4);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(mixFruit(5, 3));

// array
const friends = ["Chau", "Jack", "Jill"];
console.log(friends);

const years = new Array(1995, 1964, 1967, 2011, 2012, 2020, 2021);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = "Sarah";
console.log(friends);

const currentYear = 2022;
const firstName = "Chau";
const chau = ["Le", firstName, currentYear - 1995, "engineer", friends];
console.log(chau);

// array methods
// push
const newLength = friends.push("Lana");
console.log(friends);
console.log(newLength);
// unshift
friends.unshift("Kendra", "Kira");
console.log(friends);
// pop
friends.pop();
console.log(friends);
// shift
friends.shift();
console.log(friends);
// indexOf
console.log(friends.indexOf("Chau"));
console.log(friends.indexOf("Bob"));
// includes
console.log(friends.includes("Chau"));
console.log(friends.includes("Bob"));

if (friends.includes("Lana")) {
    console.log("Good job! All your girlfriends are hot pornstars");
} else {
    console.log("You dumped Lana!!!");
}