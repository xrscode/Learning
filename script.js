// function findTicketPrices(emailString) {
//   let regex = /\d+/;
//   return regex.test(emailString);
// }

// console.log(
//   findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?")
// );

// const tree = {
//   name: "Oak",
//   hasAcorns: true,
//   ageInYears: 530,
// };

// for (const key in tree) {
//   // code to be executed
// }

// for (const key in tree) {
//   const value = tree[key];
//   console.log(`The tree has a key of ${key} holding the value ${value}`);
//   // The tree has a key of name holding the value Oak
//   // The tree has a key of hasAcorns holding the value true
//   // The tree has a key of ageInYears holding the value 530
// }

// const pet = {
//   species: "cat",
//   name: "Luna",
//   beans: 18,
//   starSign: "Taurus",
//   isPerfect: true,
//   miceCaught: 0,
// };
// let petKeys = [];
// for (const key in pet) {
//   petKeys.push(key);
// }

// console.log(petKeys);

// const meal = {
//   lunch: "sandwich",
//   bread: "italian",
//   salad: ["tomatoes", "pickles"],
//   sauce: true,
//   price: 3.99,
// };
// // Start typing below this line
// for (const key in meal) {
//   console.log(meal[key]);
// }

// const restaurant = {
//   tables: 32,
//   staff: {
//     chef: "Andy",
//     waiter: "Bob",
//     manager: "Charlie",
//   },
//   cuisine: "Italian",
//   isOpen: true,
// };

// let staffNames = [];
// for (const key in restaurant.staff) {
//   console.log(restaurant.staff[key]);
// }

// const tutorAges = {
//   Lee: 30,
//   Rich: 26,
//   Christian: 30,
//   Jodie: 25,
//   Roisin: 24,
// };

// let tutorsAgedThirty = [];
// for (const key in tutorAges) {
//   console.log(tutorAges[key]);
//   if (tutorAges[key] === 30) {
//     tutorsAgedThirty.push(key);
//   }
// }
// console.log(tutorsAgedThirty);
// const tutors = {
//   'Sarah': { numberOfPets: 1 },
//   'Jim': { numberOfPets: 2 },
//   'Rayhaan': { numberOfPets: 0 },
//   'Róisín': { numberOfPets: 6 },
//   'Maddie': { numberOfPets: 2 },
//   'Paul': { numberOfPets: 0 }
// }

// let totalPets = 0
// // Start typing below this line
// for (const key in tutors) {
//   let num = tutors[key];
//   for (const key in num) {
//     console.log(num[key]);
//     totalPets += num[key];
//   }
// }
// const tutors = {
//   Sarah: { numberOfPets: 1 },
//   Jim: { numberOfPets: 2 },
//   Rayhaan: { numberOfPets: 0 },
//   Róisín: { numberOfPets: 6 },
//   Maddie: { numberOfPets: 2 },
//   Paul: { numberOfPets: 0 },
// };

// let totalPets = 0;

// for (const key in tutors) {
//   let num = tutors[key];
//   for (const key in num) {
//     totalPets += num[key];
//   }
// }
// console.log(totalPets);

// const tutorPetTypes = {
//   Sarah: ["cat"],
//   Jim: ["dog", "dog"],
//   Joe: ["mouse"],
//   Róisín: ["cat", "cat", "cat", "cat", "cat", "dog"],
//   Edd: ["lizard", "cat"],
//   Lewis: ["bearded dragon", "tortoise"],
// };

// let totalCats = 0;
// for (const key in tutorPetTypes) {
//   let obj = tutorPetTypes[key];
//   for (const key in obj) {
//     if (obj[key] === "cat") {
//       totalCats += 1;
//     }
//   }
// }

// console.log(totalCats);

// const kitchen = {
//   hasFridge: true,
//   favouriteAppliance: "KeTtlE",
//   food: "eGgS",
//   shelvesInCupboards: 3,
//   shelvesNotInCupboards: 2,
//   petName: "RhuBarB",
//   hoover: "DysOn",
// };

// function sortTheKitchen(kitchen) {
//   console.log(kitchen);
//   for (const key in kitchen) {
//     if (typeof kitchen[key] === "string") {
//       kitchen[key] = kitchen[key].toLowerCase();
//       console.log(`This is a string: ${kitchen[key]}.`);
//     }
//     if (key === "hoover");
//     delete kitchen.hoover;
//   }
//   let totalShelves = 0;
//   kitchen.shelvesInCupboards
//     ? (totalShelves += kitchen.shelvesInCupboards)
//     : (totalShelves += 0);
//   kitchen.shelvesNotInCupboards
//     ? (totalShelves += kitchen.shelvesNotInCupboards)
//     : (totalShelves += 0);

//   kitchen.totalShelves = totalShelves;
//   delete kitchen.shelvesInCupboards;
//   delete kitchen.shelvesNotInCupboards;

//   return kitchen;
// }

// sortTheKitchen(kitchen);
// const exampleColony = [
//   {
//     name: "anthony",
//     type: "worker",
//   },
//   {
//     name: "dec",
//     type: "worker",
//   },
//   {
//     name: "marie-antoinette",
//     type: "queen",
//   },
//   {
//     name: "adam",
//     type: "zombie",
//   },
// ];

// function checkIfHealthyColony(colony, hasAntidote) {
//   let zombie = false;

//   console.log(colony);
//   for (let i = 0; i < colony.length; i++) {
//     if (colony[i].type === "zombie") {
//       console.log(
//         `It looks like we have a Zombie here! ${colony[i].name} is a ${colony[i].type}!`
//       );
//       zombie = true;
//     }
//   }
//   if (zombie === true && hasAntidote === false) {
//     return false;
//   } else if (zombie === true && hasAntidote === true) {
//     return true;
//   } else {
//     return true;
//   }
// }

// checkIfHealthyColony(
//   [
//     {
//       name: "anthony",
//       type: "worker",
//     },
//     {
//       name: "dec",
//       type: "worker",
//     },
//     {
//       name: "marie-antoinette",
//       type: "queen",
//     },
//     {
//       name: "adam",
//       type: "zombie",
//     },
//   ],
//   "yes"
// );

// //Making the Guest List:
// function makeGuestList(person) {
//   for (const key in person) {
//     let splitName = person.name.split(" ");
//     person.firstName = splitName[0];
//     person.lastName = splitName[1];
//   }
//   delete person.name;
//   return person;
// }

// makeGuestList({ name: "Hannah Fry", age: 46 });
// // should return { firstName: "Hannah", lastName: "Fry", age: 46 }
// function trackAttendees(person, ticketCost) {
//   // Your code goes here...
//   ticketCost = Number(ticketCost);
//   person.paidForTicket = ticketCost;
//   console.log(person);
// }

// trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, "25");
// // should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }

// trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, "0");
// // should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }

//Party:
// function isPartyViable(guests) {
//   // Your code goes here...
//   let enoughGuests = guests.length >= 5 ? true : false;
//   let totalTicket = 0;
//   for (const key in guests) {
//     //console.log(guests[key]);
//     totalTicket += guests[key].paidForTicket;
//   }
//   if (enoughGuests === true && totalTicket >= 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const guests = [
//   { name: "diya", paidForTicket: 15 },
//   { name: "amul", paidForTicket: 2 },
//   { name: "saleh", paidForTicket: 2 },
//   { name: "philippa", paidForTicket: 30 },
// ];
// isPartyViable(guests);
// // should return false

// //Ordering Supplies:
// function orderSupplies(supplies, guests) {
//   // Your code goes here...
//   let totalSupplies = 0;
//   for (const key in supplies) {
//     totalSupplies += supplies[key];
//   }
//   return totalSupplies * guests;
// }

// orderSupplies({ cake: 2, iceCream: 7 }, 2);
// // should return 18

// //How many Tables?
// function calculateTables(guests, seats) {
//   let seating = {};
//   let tables = Math.floor(guests / seats);
//   let remainder = guests % seats;
//   seating.tables = tables;
//   seating.remainingGuests = remainder;
//   return seating;
// }

// calculateTables(26, 5);
// // should return { tables: 2 , remainingGuests: 0 }

//Taxi Fare Calculator
// function calculateTaxiFare(seconds) {
//   let minutes = Math.ceil(seconds / 60);
//   console.log(minutes);
//   let everyMinuteAfter = minutes - 3;
//   console.log(everyMinuteAfter);
//   return minutes > 3 ? Math.round((5 + everyMinuteAfter * 0.7) * 100) : 500;
// }

// console.log(calculateTaxiFare(575));
// // should return 500

//Who are the winners?
// function pickWinners(numbers) {
//   let myArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 != 0) {
//       if (numbers[i] % 2 != 0) {
//         myArr.push({ seat: i, ticketCost: numbers[i] });
//       } else {
//         continue;
//       }
//     }
//   }
//   console.log(myArr);
//   return myArr;
// }

// pickWinners([6, 7, 12, 49]);
// // should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]

//Gathering Feedback
// function gatherFeedback(feedbackArray) {
//   // Your code goes here...
//   let myobj = { positive: 0, negative: 0, neutral: 0 };

//   for (let i = 0; i < feedbackArray.length; i++) {
//     let subArray = feedbackArray[i];
//     for (let k = 0; k < subArray.length; k++) {
//       if (typeof subArray[k] === "number") {
//         if (subArray[k] >= 7 && subArray[k] <= 10) {
//           //console.log(`Positive: ${subArray[k]}.`);
//           myobj.positive += 1;
//         } else if (subArray[k] >= 4 && subArray[k] <= 6) {
//           //console.log(`Neutral: ${subArray[k]}.`);
//           myobj.neutral += 1;
//         } else if (subArray[k] <= 3 && subArray[k] >= 0) {
//           //console.log(`Negative: ${subArray[k]}.`);
//           myobj.negative += 1;
//         }
//       } //Value
//     }
//   }
//   console.log(myobj);
//   return myobj;
// }
// gatherFeedback([
//   ["maddie", 10],
//   ["jatinder", 3],
//   ["rose", 6],
// ]);
// // returns {positive: 1, negative: 1, neutral:1}

// gatherFeedback([
//   ["maddie", 10],
//   ["jatinder", 10],
//   ["rose", 10],
// ]);
// // returns {positive: 3, negative: 0, neutral:0}

// gatherFeedback([
//   ["maddie", 10],
//   ["jatinder", 10],
//   ["rose", 1],
// ]);
// // returns {positive: 2, negative: 1, neutral:0}

// const ham = "Too cool for school.";
// let cheese = "I wouldn't take that!";
// cheese = "On second thoughts, do take it.";
// console.log(`${13 % 5}`);
// console.log(`${13 / 5}`);
// const greeting = "Hello" + " World";
// console.log(greeting);

// let playerName = "Dylan";
// let stringLiteral = `Hello ${playerName}.`;
// console.log(stringLiteral);

// const greeting = "Hello there!";
// const firstChar = greeting[0];
// const lastChar = greeting[greeting.length - 1];
// console.log(lastChar);
// console.log(5 == "5"); //True
// console.log(5 === "5"); //False

// console.log(!true); //Evalues to Fasle.
// console.log(!false); //Evaluates to True.
// console.log(5 !== 3); //Evaluates to True.

// const animals = [
//   "Alligator",
//   "Fox",
//   "Armadillo",
//   "Tiger",
//   "Anteater",
//   "Raccoon",
//   "Chicken",
//   "Sheep",
//   "Dog",
//   "Antelope",
//   "Albatross",
//   "Cat",
//   "Alpaca",
//   "Ape",
//   "Anaconda",
// ];

// function countAnimals() {
//   counter = 0;
//   for (let i = 0; i < animals.length; i++) {
//     animals[i][0] === "A" ? (counter += 1) : {};
//   }
//   return counter;
// }

// console.log(countAnimals());
// let isWeekend;

// switch (day) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     isWeekend = false;
//     break;
//   case "Saturday":
//   case "Sunday":
//     isWeekend = true;
//     break;
//   default:
//     console.log(day + " is not a valid day");
// }

// const smoothieIngredients = ["apple", "banana", "strawberry", "kiwi"];

// const numbers = [1, 7, 3, 99, 5, 25];

// const firstNumber = numbers[0]; // 1
// const secondNumber = numbers[1]; // 7
// const lastNumber = numbers[5]; // 25

// const evenNumbers = [2, 18, 5, 22, 10];
// console.log(evenNumbers.length); //Prints Length of Array; 5.;
// console.log(evenNumbers[evenNumbers.length - 1]); //Prints the final value in the array.

// const blueLine = ["Byker", "Chillingham Road", "Walkergate", "Wallsend"];

// blueLine.push("Hadrian Road");

// console.log(blueLine); // ['Byker', 'Chillingham Road', 'Walkergate', 'Wallsend', 'Hadrian Road']

// blueLine.push("Howdon", "Percy Main");

// console.log(blueLine); // ['Byker', 'Chillingham Road', 'Walkergate', 'Wallsend', 'Hadrian Road', 'Howdon', 'Percy Main']

// const greenLine = ["Jarrow", "Bede", "Simonside", "Tyne Dock"];

// greenLine.unshift("Hebburn");

// console.log(greenLine); // ['Hebburn', 'Jarrow', 'Bede', 'Simonside', 'Tyne Dock']

// const yellowLine = ["West Street", "City Hall", "Cathedral", "Castle Square"];

// yellowLine.pop();

// console.log(yellowLine); // ['West Street', 'City Hall', 'Cathedral']

// yellowLine.shift();

// console.log(yellowLine); // ['City Hall', 'Cathedral']

// const shoppingList = [
//   "broccoli",
//   "chocolate",
//   "mushrooms",
//   "baked beans",
//   "butter",
//   "tomatoes",
// ];

// const firstThreeItems = shoppingList.slice(0, 3);
// console.log(firstThreeItems); // ['broccoli', 'chocolate', 'mushrooms']

// const lastThreeItems = shoppingList.slice(-3);
// console.log(lastThreeItems); // ['baked beans', 'butter', 'tomatoes']

// const starter = ["tomato", "cream", "basil"];
// const main = ["lemon", "thyme", "chicken"];
// const dessert = ["apple", "pastry", "cream"];

// const dinner = [starter, main, dessert];

// console.log(dinner);
// /*
// [
//   ['tomato', 'cream', 'basil'],
//   ['lemon', 'thyme', 'chicken'],
//   ['apple', 'pastry', 'cream']
// ]
// */

// const cream = dinner[0][1];

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat(1);
// console.log(newArr);

// const films = [
//   "Iron Man",
//   "Cars",
//   ["Inception", "Interstellar", "Toy Story", "The Notebook"],
//   "Girl Interrupted",
// ];
// for (let i = 0; i < films.length; i++) {
//   console.log(`${films[i]} is at position ${i}`);
// }

// const marioArray = ["Mario", "Luigi", "Bowser"];
// // Reassign the third element below!
// marioArray[2] = ["Peach", "Yoshi"];
// console.log(marioArray);
// function createToDoList() {
//   const toDoList = [];
//   // Do not alter any code above here
//   toDoList.unshift(["Task 1", 5]);
//   toDoList.push(["Task 2", 6]);
//   toDoList.push(["Task 3", 56]);
//   // Do not alter any code below here
//   return toDoList;
// }

// console.log(createToDoList());

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// } //Starts at 0. Ends at 9.  Increase by 1.

// for (let i = 10; i > 4; i--) {
//   console.log(i);
// } //Starts at 10.  Ends at 5.  Decrement by 1.

// for (let i = 3; i <= 21; i += 3) {
//   console.log(i);
// } //Starts at 3.  Ends at 21.  Increase by 3.

// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 0; i < alphabet.length; i++) {
//   console.log("the letter at position " + i + " is " + alphabet[i]);
// }

// const blastOff = [
//   "We have Lift Off!",
//   "One!",
//   "Two!",
//   "Three!",
//   "Four!",
//   "Five!",
//   "Six!",
//   "Seven!",
//   "Eight!",
//   "Nine!",
//   "Ten!",
// ];
// // Write your for loop below
// //Start Condition:
// console.log(blastOff.length - 1);
// //Stop Condition:
// console.log(blastOff[0]);

// for (let i = blastOff.length - 1; i >= 0; i--) {
//   console.log(blastOff[i]);
// }

// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// for (let i = 0; i < alphabet.length; i += 5) {
//   console.log(alphabet[i].toUpperCase());
//   alphabet[i] = alphabet[i].toUpperCase();
// }
let myobj = { name: "Lucy", password: "n0rthc0derzzz" };
// returns 'n0rthc0derzzz'
console.log(myobj);

//Returns the VALUE:
console.log(myobj.password);

//Returns the KEY:
