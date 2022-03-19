'use strict';

// loop through object properties
console.log('---------- LOOP THROUGH OBJECT PROPERTIES ----------');
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// loop through object values
console.log('---------- LOOP THROUGH OBJECT VALUES ----------');
const values = Object.values(openingHours);
console.log(values);

// loop through entries
console.log('---------- LOOP THROUGH OBJECT ENTRIES ----------');
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [index, {open, close}] of entries) {
    console.log(`On ${index}, we open at ${open} and close at ${close}.`);
}