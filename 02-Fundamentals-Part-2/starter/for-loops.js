"use strict";

/*
 for (let rep = 1; rep <= 10; rep++) {
 console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
 }

 const chauArray = [
 "Le",
 "Chau",
 2022 - 1995,
 "engineer",
 ["Kendra", "Lana", "Megan"],
 true,
 ];
 const types = [];

 for (let i = 0; i < chauArray.length; i++) {
 console.log(chauArray[i], typeof chauArray[i]);

 // filling the types array using one of the following ways:
 // types[i] = typeof chauArray[i];
 types.push(typeof chauArray[i]);
 }
 console.log(types);

 const ages = [];
 for (let i = 0; i < years.length; i++) {
 let age = currentYear - years[i];
 ages.push(age);
 }
 console.log(ages);
 */

console.log("----------LOOPING BACKWARDS----------");
console.log(chau);
for (let i = chau.length - 1; i >= 0; i--) {
    console.log(i, chau[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- STARTING EXERCISE ${exercise}:`);
    for (let rep = 1; rep < 11; rep++) {
        console.log(`Exercise ${exercise}: rep ${rep} 🏋️‍♂️`);
    }
}