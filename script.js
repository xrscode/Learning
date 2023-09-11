// "use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// let arr = [23, 11, 64];
// console.log(arr[0]); //Returns '23'
// console.log(arr.at(0)); //Returns '23'
// console.log(arr[arr.length - 1]); //Returns '64'
// console.log(arr.at(-1)); //Returns '64'
// console.log(arr.at(-2)); //Returns '11'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${Math.abs(movement)}.`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// const forEach = movements.forEach((x) => {
//   return x > 0
//     ? console.log(`You deposited ${Math.abs(x)}.`)
//     : console.log(`You withdrew ${Math.abs(x)}`);
// });

//MAP
// const currencies = new Map([
//   ["USD", "United States Dollar"],
//   ["EURO", "Euro"],
//   ["GBP", "British Pound Sterling"],
// ]);
// console.log(currencies);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${key}: ${value}`);
// });

// //Coding Challenge 1
// function checkDogs(dogsJulia, dogsKate) {
//   const tempArr = dogsJulia.slice(1, dogsJulia.length - 2);
//   const totalDogs = tempArr.concat(dogsKate);
//   return totalDogs.forEach((x, i) => {
//     return x >= 3
//       ? console.log(`Dog ${i + 1} is an adult at ${x} years old.`)
//       : console.log(`Dog ${i + 1} is still a puppy at ${x} years old.`);
//   });
// }
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// checkDogs(dogsJulia, dogsKate);
