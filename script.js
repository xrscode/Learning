"strict";
// //Default Parameters:
// const bookingArr = [];
// const createBooking = function (
//   flightNum = 1,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //Default Values
//   //ES5 Short Circuiting:
//   //numPassengers = numPassengers || 1;
//   // price = price || "$1.99";

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookingArr.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, undefined);
// createBooking("EZY8915", undefined, 50);

// const flight = "LH234";
// const passengerDYLAN = {
//   name: "Dylan Dog",
//   passport: 12345,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "EZY8913";
//   passengerDYLAN.name = "Mr. Dylan Dog";

//   if (passenger.passport === 12345) {
//     console.log("Check In");
//   } else {
//     console.log("Passport Number Incorrect");
//   }
// };

// checkIn(flight, passengerDYLAN);
// console.log(passengerDYLAN, flight);

// //Advanced Functions
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// //CallBack Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// }; //Function that replaces spaces in strings with 'nothing'.  Deletes spaces.

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// }; //Function that replaces first word with all uppercase letters.

// //Higher-Order Function:
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}.`);
//   console.log(`Transofrmed string: ${fn(str)}.`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("JavaScript is the best.", upperFirstWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet("Hey");
// greeterHey("Dylan");
// greet("Hello")("Bean");

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Hi")("BillieBean");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   //book: function() {};
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline}, flight number: ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
//   },
// };
// const easyJet = {
//   airline: "Easy Jet",
//   iataCode: "EZY",
//   bookings: [],
// };

// const book = lufthansa.book;
// lufthansa.book.call(easyJet, 23, "Quinn");
//console.log(easyJet);

// //Apply Method
// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.fullName.apply(person1, ["Oslo", "Norway"]);

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.fullName.call(person1, "Oslo", "Norway");
//Bind
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   //book: function() {};
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline}, flight number: ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
//   },
// };
// const easyJet = {
//   airline: "Easy Jet",
//   iataCode: "EZY",
//   bookings: [],
// };
// const book = lufthansa.book;
// const bookEZY23 = book.bind(easyJet, 23);
// console.log(bookEZY23("Bean")); //Bean booked a seat on Easy Jet, flight number: EZY23;

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //More Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.2);
// // addVAT = value => value + value * 0.2;

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(23));
// console.log(addVAT2(100));

//Coding Challenge
//Build a simple Poll App.
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Prompt Question:
//     const q = prompt(
//       `${
//         this.question
//       }\nChoose from the following options:\n\n${this.options.join(", \n")}`
//     );
//     //Register Answer:
//     if (/^[0-3]$/.test(q)) {
//       console.log(
//         `You have selected ${this.options.find((x) => {
//           return x.includes(`${q}: `);
//         })}.  Thank you!`
//       );
//       this.answers[q]++;
//     } else {
//       console.log(`${q}: Please choose from options:  0 - 4.`);
//     }
//     this.displayResults();
//   },
//   //Display Results:
//   displayResults() {
//     console.log(`The current totals:
//     \nJavaScript: ${this.answers[0]}
//     \nPython: ${this.answers[1]}
//     \nRust: ${this.answers[2]}
//     \nC++: ${this.answers[3]}`);
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

//Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("Function");
  const isPriavte = 23;
})();

//Arrow Function IIFEE:
(() => console.log("This is an arrow function"))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();

booker(); //1 passengers.
booker(); //2 passengers.
booker();

const arr = new Array(4).fill(new Array(4).fill(null));
console.log(arr);

function validMobileNumber(mobileNumber) {
  // Your code goes here...
  return /^(07)\d{9}$|^\+447\d{9}$|^(00447)\d{9}$/.test(mobileNumber);
}
