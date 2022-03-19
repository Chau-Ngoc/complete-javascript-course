"use strict";

/*
 const restaurantMap = new Map();
 restaurantMap.set("name", "Italiano");
 restaurantMap.set(1, "Italy");
 restaurantMap.set(2, "Vietnam");
 console.log(restaurantMap);

 restaurantMap
 .set("categories", ["Vegetarian", "Organic", "Italian"])
 .set("open", 11).set("close", 23)
 .set(true, "We are open")
 .set(false, "We are close");
 console.log(restaurantMap.get('name'));
 console.log(restaurantMap.get(1));
 console.log(restaurantMap.get(true));

 // check if the map contains a certain keys
 console.log(restaurantMap.has("name"));

 // delete an element from the map
 restaurantMap.delete(2);
 // restaurantMap.clear();
 console.log(restaurantMap);
 console.log(restaurantMap.size);

 restaurantMap.set(document.querySelector('h1'), 'heading');
 console.log(restaurantMap);
 */

const question = new Map([
    ["question", "What is your favorite programming language?"],
    [1, "C"],
    [2, "Python"],
    [3, "Javascript"],
    ["correct", 2],
    [true, "Correct 🎉"],
    [false, "Try again"],
]);
console.log(question);

// convert objects to maps
console.log("---------- CONVERT OBJECTS TO MAPS ---------");
console.log(Object.entries(openingHours));

const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

console.log(question.get("question"));
for (const [option, answer] of question) {
    if (typeof option === "number") {
        console.log(`${option}: ${answer}.`);
    }
}

/*
 const answer = Number(prompt("Your answer?"));
 console.log(answer);
 const result = question.get(question.get("correct") === answer);
 console.log(result);
 */
