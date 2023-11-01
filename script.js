// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // findIndex()
// //Returns 3
// console.log(movements.findIndex((x) => x > 1000));
// //Returns -1
// console.log(movements.findIndex((x) => x > 1000));

// // some()
// //Returns true.  At least one element is greater than 1000.
// console.log(movements.some((x) => x > 1000));
// //Returns false.  No elements greater than 10,000.
// console.log(movements.some((x) => x > 10000));

// // every()
// //True: All elements are greater than -651.
// console.log(movements.every((x) => x > -651));
// //False: Some elements are smaller than 5.
// console.log(movements.every((x) => x > 5));

// //flat()
// const movements2 = [[1, 2, 3], 4, 5, [6, 7], 8, 9];
// //Returns: 1, 2, 3, 4, 5, 6, 7, 8, 9 to the console.
// console.log(movements2.flat());

// const movements3 = [[1, 2, 3], [4, [5]], [6, 7], 8, 9];
// //Returns: 1, 2, 3, 4, Array(1), 6, 7, 8, 9 to the console.
// console.log(movements3.flat(1));
// //Returns: 1, 2, 3, 4, 5, 6, 7, 8, 9 to the console.
// console.log(movements3.flat(2));

// //flatMap();
// const movements4 = [[1, 2, 3], [4, [5]], [6, 7], 8, 9];
// //Returns: ['1, 2, 31', '4, 51', '6, 71', 9 10]
// console.log(movements4.flatMap((x) => x + 1));
// //Returns 2,3,4,5,6,7,8,9,10...
// console.log(movements4.flat(2).flatMap((x) => x + 1));

// //sort();
// const names = ["Dylan", "Harriet", "Amber", "Quinn", "Bean"];
// const numbers = [1, 3, 6, 2, 3, 1, 57, 8];
// //Returns ['Amber', 'Bean', 'Dylan'...]
// console.log(names.sort());
// //Returns same string.
// console.log(numbers.sort());
// //Sorts numbers from smallest to largest;
// console.log(
//   numbers.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     }
//     if (b > a) {
//       return 1;
//     }
//   })
// );

//Create Arrays
// console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //[1, 2, 3, 4, 5, 6, 7] to console.

// //Create a new Array with 7 places.
// const x = new Array(7);
// console.log(x); //creates [empty * 7];

// //fill()
// //array.fill(value, start, end);
// //x.fill(7, 0);
// //Fills the x array with the number 7
// console.log(x); //Returns [7, 7, 7, 7, 7, 7, 7] to the console.
// x.fill(7, 5);
// console.log(x); //[empty * 5, 7, 7]

// //Array.from()
// //Returns an array from an object with a length property.
// const y = Array.from({ length: 5 }, () => 1);
// console.log(y); //Returns [1, 1, 1, 1, 1];

// const z = Array.from({ length: 7 }, (element, index) => index + 1);
// console.log(z); //[1, 2, 3, 4, 5, 6, 7]

// //Random Dice Rolls.
// const dice = Array.from({ length: 10 }, (x, i) => {
//   return Math.round(Math.random() * 6);
// });
// console.log(dice);

//Arrays Practise
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Exercise 1.
//Total number of positive deposits.
const bankDepositSum = accounts
  .flatMap((x) => x.movements)
  .filter((x) => x > 0)
  .reduce((a, b) => {
    return a + b;
  });
console.log(bankDepositSum);

//Total number of negative deposits.
const negDepositSum = accounts
  .flatMap((x) => x.movements)
  .filter((x) => x < 0)
  .reduce((a, b) => {
    return a + b;
  });
console.log(negDepositSum);

//Exercise 2.
//Count number of deposits in bank at least 1000.
const numDeposits1000 = accounts
  .flatMap((x) => x.movements)
  .reduce((a, b) => {
    return b >= 1000 ? a + 1 : a;
  }, 0);
console.log(numDeposits1000); //Returns 6.
