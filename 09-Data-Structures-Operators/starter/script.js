"use strict";

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ item, prize = 1.99, address = "HCM" }) {
        console.log(
            `Item ${item} ($${prize}) will be delivered to ${address}.`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
        );
    },
};
// optional chaining
for (const day of weekdays) {
    const open = openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
}

/*
 restaurant.orderDelivery({item: "pizza"});

 const {name, openingHours, categories} = restaurant;
 console.log(name, openingHours, categories);

 // create new variable with different naming
 const {
 name: restaurantName,
 openingHours: hours,
 categories: tags
 } = restaurant;
 console.log(restaurantName, hours, tags);

 // default values
 const {menu = [], starterMenu: starters = []} = restaurant;
 console.log(menu, starters);

 // mutating variables
 let a = 111;
 let b = 223;
 const obj = {a: 23, b: 17, c: 4};
 ({a, b} = obj);
 console.log(a, b);

 // nested objects
 const {fri: {open: o, close: c}} = openingHours;
 console.log(o, c);
 */

/*
 // spread operator
 const arr = [7, 8, 9];
 const newArr = [1, 2, ...arr];
 console.log(newArr);

 const newMenu = [...restaurant.mainMenu, "Egg-roll"];
 console.log(newMenu);

 // use spread operator to copy an array
 const mainMenuCopied = [...restaurant.mainMenu];
 console.log(mainMenuCopied);

 // join two arrays using spread operator
 const menu = [...restaurant.mainMenu, ...mainMenuCopied];
 console.log(menu);

 // spread operator can also be used on other iterables (arrays, strings, maps,
 // sets)
 const myName = "Chau";
 const letters = [...myName, " ", "c"];
 console.log(letters);
 console.log(...myName);

 // const ingredients = [prompt(`Let's make pasta! Ingredient 1:`),
 // prompt(`Ingredient 2:`), prompt(`Ingredient 3:`)]; console.log(ingredients);

 // restaurant.orderPasta(...ingredients);

 // spread operator on objects
 const newRestaurant = {foundedIn: 1995, ...restaurant, founder: "Chau"};
 console.log(newRestaurant);

 const restaurantCopied = {...restaurant};
 restaurantCopied.name = "This is a copied restaurant's name.";
 console.log(restaurantCopied.name);
 console.log(restaurant.name);
 */

const rest1 = {
    name: "Capri",
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: "La Piazza",
    owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) {
    console.log(item);
}

for (const [index, item] of menu.entries()) {
    console.log(`${index + 1}: ${item}.`);
}
console.log([...menu.entries()]);
