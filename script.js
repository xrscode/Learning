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

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};
