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

//Exercise 3.
//Create new Object with all deposits.
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce((object, element, index) => {
    element >= 1000 ? (object[index] = element) : object;
    return object;
  }, {});
console.log(sums); //{3: 3000, 7: 1300, 8: 5000, 9: 3400, 14: 8500, 25: 1000}

//Create Object with reduced Deposits and Withdrawals.
const sums2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (object, element) => {
      object[element > 0 ? "Deposits" : "Withdrawals"] += element;
      return object;
    },
    { Deposits: 0, Withdrawals: 0 }
  );
console.log(sums2); //{Deposits: 25180, Withdrawals: -7340}

//Exercise 4.  Turn Any string into Title Case.
const convertTitle = function (string) {
  const exceptions = ["a", "b", "h"];
  return string
    .split(" ")
    .map((x) => {
      return exceptions.includes(x[0].toLowerCase())
        ? x.toLowerCase()
        : x[0].toUpperCase() + x.slice(1);
    })
    .join(" ");
};
console.log(convertTitle("hello dylan, you are a dog!"));
console.log("CODING CHALLENGE 4");
/*
Julia & Kate are studying dogs.  Do the dogs eat too much, or too little?  An acceptible amount to eat is if the current food portion is within range 10% above and 10% below the recommended portion. 

Step 1. Loop over the array containing dob objects, and for each dog, calculate the recommended food portion and add it to the object as a new property.  Do Not create a new array, simply loop over the array.  
Formula: recommendedFood = weight ** 0.75 * 28.  (Result in grams).  MUST BE IN KG.

Step 2. Find Sarah's dog and log to the console whether he has eaten too much or too little. Note: Some dogs have multiple owners. 

Step 3.  Create an Array containing all owners of dogs who eat too much: 'ownersEatTooMuch'.   Create an Array with all owners of dogs who eat too little; 'ownersEatTooLittle'.

Step 4. Log a string to the console for each array created in 3., for example; 'Matilida and Alice and Bob's dogs eat too much!.  And... 'Sarah and John and Michael's dogs eat too little!'

Step 5.  Log to the console whether there is any dog eating the correct amount of food.  Just log true or false. .some() ?

Step 6. Log to the console whether there are any dogs eating an acceptable amount of food (true or false)

Step 7.  Create an array containing the dogs that are eating an OK amount of food. 

Step 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order.  
*/

//Test Data:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
  { weight: 32, curFood: 370, owners: ["Dylan"] },
  { weight: 32, curFood: 375, owners: ["Peter"] },
];

//Step 1.
console.log(`------ STEP 1 ------`);
dogs.forEach(
  (x) => (x.recommendedFood = Math.round(x.weight ** 0.75 * 28) / 100)
);
console.log(dogs);

//Step 2.
//Sarahs Dog.
console.log(`------ STEP 2 ------`);
const sarahDog = dogs.find((x) => x.owners.includes("Sarah"));
const recFood = sarahDog.recommendedFood;
const current = (sarahDog.curFood / 100).toFixed(2);
if (current - recFood > 0) {
  console.log(
    `Sarah's dog is currently eating too much.  The dog is currently eating ${current}kg per day.  The recommended amount is ${recFood}kg per day.  The dog is currently eating ${(
      current - recFood
    ).toFixed(2)})}kg too much!`
  );
} else if (current - recFood === 0) {
  console.log(`Sarah's dog is eating the correct amount.`);
} else {
  console.log(
    `Sarah's dog is not eating enough.  Currently her dog is eating ${current}kg.  The dog should be eating, ${recFood}kg.  Increase the food allowance by: ${(
      recFood - current
    ).toFixed(2)}kg per day.`
  );
}

//Step 3.
//Create an array of the names of owners who's dogs eat too much.
console.log("----- STEP 3 ------");
const dogOwnersTooMuch = dogs.reduce((arr, cur) => {
  (cur.curFood / 100).toFixed(2) > cur.recommendedFood
    ? arr.push(cur.owners)
    : arr;
  return arr.flat();
}, []);
console.log(`Owners whose dogs eat too much: ${dogOwnersTooMuch.join(", ")}.`);

//Step 4.
console.log(`------ STEP 4 ------`);
const dogOwnersTooLittle = dogs.reduce((arr, cur) => {
  (cur.curFood / 100).toFixed(2) < cur.recommendedFood
    ? arr.push(cur.owners)
    : arr;
  return arr.flat();
}, []);
console.log(
  `Owners whose dogs eat too little: ${dogOwnersTooLittle.join(", ")}`
);

//Step 5.
console.log("-----STEP 5-----");
const correctAmount = dogs.some((x) => {
  console.log((x.curFood / 100).toFixed(2), x.recommendedFood);
  return (x.curFood / 100).toFixed(2) - x.recommendedFood === 0;
});
console.log(
  `Currently ${correctAmount ? "some" : "no"} dogs eat the correct amount.`
);

//Step 6.
console.log("----Step 6 ------");
const acceptibleAmount = dogs.some((x) => {
  console.log((x.curFood / 100).toFixed(2), x.recommendedFood);
  return (
    (x.curFood / 100).toFixed(2) <= x.recommendedFood * 1.1 &&
    (x.curFood / 100).toFixed(2) >= x.recommendedFood / 1.1
  );
});
console.log(
  `Currently there are ${
    acceptibleAmount ? "some" : "no"
  } dogs that eat an acceptible amount.`
);

//Step 7
console.log("----- STEP 7 ------");
const arrAceptible = dogs.reduce((arr, cur) => {
  (cur.curFood / 100).toFixed(2) <= cur.recommendedFood * 1.1 &&
  (cur.curFood / 100).toFixed(2) >= cur.recommendedFood * 0.9
    ? arr.push(cur.owners)
    : arr;
  return arr.flat();
}, []);
console.log(
  `These are the dog owners who's dog eat an acceptible amount: ${arrAceptible.join(
    ", "
  )}.`
);

//Step 8
console.log("----- STEP 8 -----");
const dogsSorted = Array.from(dogs).sort((a, b) => {
  return a.recommendedFood - b.recommendedFood;
});
console.log(dogsSorted);
