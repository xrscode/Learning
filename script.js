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
