/*
 let js = 'amazing';
 console.log(41 + 22 + 44 - 10);

 let firstName = 'Chau';
 console.log(firstName);

 let country = 'Vietnam';
 let continent = 'Asia';
 let population = '97,34';

 console.log(country);
 console.log(continent);
 console.log(population);
 */

/*
 let javascriptIsFun = true;
 console.log(javascriptIsFun);

 console.log(typeof true);
 console.log(typeof javascriptIsFun);
 console.log(typeof 23);
 console.log(typeof 'Jonas');
 */

/*
 let year;
 console.log(year);
 console.log(typeof year);

 year = 2022;
 console.log(typeof year);

 console.log(typeof null);
 */

////////// math operators //////////
/*
 const currentYear = 2022;
 const ageChau = currentYear - 1995;
 const ageKim = currentYear - 1990;
 console.log(ageChau, ageKim);
 console.log(ageChau * 2, ageChau / 10, 2 ** 3);

 const firstName = 'Chau';
 const lastName = 'Le';
 console.log(firstName + ' ' + lastName);

 ////////// assignment operators //////////
 let x = 10 + 5;
 x += 10;
 x -= 5;
 x *= 4;
 x--;
 x++;
 console.log(x);
 */

////////// comparison operators //////////
// console.log(ageChau > ageKim);
// console.log(ageKim >= 32);
//
// const isOlderThan30 = ageKim >= 30;
// console.log(isOlderThan30);

/*
 let markMass = 78;
 let markHeight = 1.65;
 let johnMass = 92;
 let johnHeight = 1.95;
 let markBMI = markMass / markHeight ** 2;
 let johnBMI = johnMass / johnHeight ** 2;
 let markHigherBMI = markBMI > johnBMI;

 if (markHigherBMI) {
 console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
 } else {
 console.log(`Mark's BMI (${markBMI})' is lower than John's (${johnBMI})`);
 }
 console.log("John's BMI: " + johnBMI, "Mark's BMI: " + markBMI);
 console.log(markHigherBMI);
 */

/*
 const firstName = "Chau";
 const birthYear = 1995;
 const job = "engineer";
 const currentYear = 2022;
 const chau = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
 console.log(chau);
 console.log(`String
 multiline using
 template literals.`);
 */

/*
 const age = 17;
 const isOldEnough = age >= 18;

 if (isOldEnough) {
 console.log("Chau can start driving 🚙");
 } else {
 const yearsLeft = 18 - age;
 console.log(`Chau has to wait ${yearsLeft} year(s) to start driving 💥`);
 }
 */

/*
 const year = 2001;
 let century;
 if (year <= 2000) {
 century = 20;
 } else {
 century = 21;
 }
 console.log(`We are living in ${century} century.`);
 */

// type conversion /////////////////////////
/*
 const inputYear = "1995";
 console.log(Number(inputYear), inputYear);
 console.log(Number(inputYear) + 18);
 console.log(inputYear + 18);

 console.log(Number("Chau"));
 console.log(typeof NaN);

 console.log(String(23));
 */

// type coercion /////////////////////////
/*
 console.log("I am " + 27 + " years old.");
 console.log("20" - "10" - 3);
 console.log("20" * "2");
 */

// 5 falsy values in javascript: 0, '', undefined, null, NaN
/*
 console.log(Boolean(""));
 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean({}));
 console.log(Boolean("Chau"));
 */

const savings = 0;
if (savings) {
    console.log("Don't spend it all!");
} else {
    console.log("You need to find a job!!!");
}

let height;
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("OOPS! Height is UNDEFINED.");
}

/*
 const age = 18;
 if (age === 18) {
 console.log("You just became an adult :D (strict)");
 }
 if (age == 18) {
 console.log("You just became an adult :D (loose)");
 }
 */

/*
 const favorite = Number(prompt("What is your favorite number?"));
 console.log(favorite, typeof favorite);
 if (favorite === 77) {
 console.log("77 is my favorite number.");
 } else if (favorite === 7) {
 console.log("7 is also a cool number.");
 } else {
 console.log("The given number is not 77 nor 7.");
 }

 if (favorite !== 7) {
 console.log("Why not 7?");
 }
 */

/*
 const day = "wednesday";

 switch (day) {
 case "monday":
 console.log("Plan coding lesson.");
 console.log("Go to work by bus");
 break;
 case "tuesday":
 console.log("Kick-off new sprint");
 break;
 case "wednesday":
 case "thursday":
 console.log("Write code examples");
 break;
 case "friday":
 console.log("Join English club");
 break;
 case "saturday":
 case "sunday":
 console.log("Do nothing. Relax, sit back and watch Netflix. ☺");
 break;
 default:
 console.log("Not a valid day.");
 }
 */

const age = 17;
// age >= 18 ? console.log("You can drink wine now 🍷") :
//     console.log("You can only drink water 🥤");

let drink = age >= 18 ? "wine 🍷" : "water 🥤";
console.log(drink);