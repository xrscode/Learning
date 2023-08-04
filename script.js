"strict";
"use strict";

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
};

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);
// console.log(new Set("Jonas"));
// console.log(new Set("Jonnas"));
// console.log(ordersSet.size); //3
// console.log(ordersSet.has("Pizza")); //True
// console.log(ordersSet.has("Pizza")); //False
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// console.log(ordersSet);

// const numbers = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7];
// const numbersUnique = [...new Set(numbers)];

// const rest = new Map();
// rest.set(1, "Algarve, Portugal");
// rest
//   .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are closed");

// const time = 10; //9pm.
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// //Prints 'we are closed'.

// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

const question = new Map([
  ["question", "what is the best?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct!"],
  [false, "try again"],
]);

for (const [key, value] of question) {
  console.log(key, value);
}
console.log(question.get("question"));
//const answer = Number(prompt("Your answer"));//
//console.log(answer === 3 ? question.get(true) : question.get(false));

const obj = { task: "code", date: "today", repeat: true };
const map = new Map([
  ["task", "Code"],
  ["date", "today"],
  [false, "Start coding!"],
]);
console.log(obj, map);
