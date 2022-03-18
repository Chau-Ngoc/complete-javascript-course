"use strict";

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

console.log(add(2, 3));
console.log(add(2, 7, 6, 5, 3));
console.log(add(1, 2, 3, 7, 6, 4, 77));

const x = [23, 5, 7];
console.log(add(...x));