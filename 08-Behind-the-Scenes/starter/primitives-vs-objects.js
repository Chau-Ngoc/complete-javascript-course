"use strict";

/*
 let age = 27;
 let oldAge = age;
 age = 28;

 console.log(age);
 console.log(oldAge);

 const me = {
 name: "Chau",
 age: 27,
 };
 const friend = me;
 friend.age = 30;

 console.log("Friend:", friend);
 console.log("Me:", me);*/

// primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "David";

console.log(lastName, oldLastName);

// reference types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "David";

console.log("Before marriage:", jessica.lastName);
console.log("After marriage:", marriedJessica.lastName);

// shallow-copying objects
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ['Alice', 'Kendra'],
};
const jessicaCopied = Object.assign({}, jessica2);

jessicaCopied.lastName = "David";
jessicaCopied.family.push('Lana', 'Kira');

console.log('------------------------');
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopied);