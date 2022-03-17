"use strict";

// console.log(this);

/*
 const calcAge = function (birthYear) {
 console.log(2022 - birthYear);
 console.log(this);
 };
 calcAge(1995);

 const calcAgeArrow = birthYear => {
 console.log(2022 - birthYear);
 console.log(this);
 };
 calcAgeArrow(1995);

 const chau = {
 year: 1995,
 calcAge: function (birthYear) {
 console.log("---------------------");
 console.log(this);
 },
 };
 chau.calcAge();*/

/*
const chau = {
    firstName: "Chau",
    year: 1995,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);

        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillennial();
    },
    greet: () => console.log(`Hey ${this.firstName}.`),
};
chau.greet();
chau.calcAge();*/
