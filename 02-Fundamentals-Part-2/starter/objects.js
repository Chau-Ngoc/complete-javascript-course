"use strict";

/*
 const chauInfo = {
 firstName: "Chau",
 lastName: "Le",
 age: currentYear - 1995,
 job: "engineer",
 friends: ["Lana", "Riley", "Kendra", "Megan"]
 };
 console.log(chauInfo);

 console.log(chauInfo.lastName);
 console.log(chauInfo["lastName"]);

 const nameKey = "Name";
 console.log(chauInfo["first" + nameKey]);
 console.log(chauInfo["last" + nameKey]);

 const interestedIn = prompt("What do you want to know about Chau. Choose" +
 " between firstName," +
 " lastName, age, job or friends.");

 if (chauInfo[interestedIn]) {
 console.log(chauInfo[interestedIn]);
 } else {
 console.log("Wrong request! Please choose between firstName, lastName," +
 " age, job or friends.");
 }

 chauInfo.location = "Vietnam";
 chauInfo["email"] = "playerzawesome@gmail.com";
 console.log(chauInfo);

 console.log(`${chauInfo.firstName} has ${chauInfo.friends.length} friends, his best friend is ${chauInfo.friends[0]}.`);
 */

const chauInfo = {
    firstName: "Chau",
    lastName: "Le",
    birthYear: 2020,
    job: "engineer",
    friends: ["Lana", "Riley", "Kendra"],
    hasDriversLicense: undefined,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    calcAge: function () {
        // console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    canDrive: function () {
        this.hasDriversLicense = this.age >= 18;
        return this.hasDriversLicense;
    },

    getSummary: function () {
        console.log(`${this.firstName} is ${this.age} years old and he has ${this.canDrive() ? "a" : "no"} driver's license.`);
    },
};

// console.log(chauInfo.hasDriversLicense);

console.log(chauInfo.calcAge());
console.log(chauInfo["calcAge"]());
// console.log(chauInfo.hasDriversLicense);

console.log(chauInfo.age);
console.log(chauInfo.age);
console.log(chauInfo.age);

chauInfo.getSummary()
// console.log(chauInfo.hasDriversLicense);
