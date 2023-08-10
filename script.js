"strict";
// const airline = "TAP Air Portugal";
// const plane = "A320";

// let str = "camel_case";
// const splitstr = str.split("_");
// console.log(splitstr);
// console.log(splitstr[1][0]);
// console.log(splitstr[0] + splitstr[1][0].toUpperCase() + splitstr[1].slice(1));

// const camelCase = function (string) {
//   string = string.split("_");
//   return (
//     string[0][0].toLowerCase() +
//     string[0].slice(1).toLowerCase() +
//     string[1][0].toUpperCase() +
//     string[1].slice(1).toLowerCase()
//   );
// };

// // const capitaliseName = function (name) {
// //   const names = name.split(" "); //['dylan', 'dog', 'quinn', 'dog']
// //   const upper = [];
// //   for (const x of names) {
// //     upper.push(x.replace(x[0], x[0].toUpperCase()));
// //   }
// //   return upper.join(" ");
// // };
// // console.log(capitaliseName("dylan dog quinn dog")); //'Dylan Dog Quinn Dog'

// function convertToCamelCase(string) {
//   if (!string.includes(" ")) {
//     return string.toLowerCase();
//   } else {
//     const arr = [string.split(" ")[0].toLowerCase()];
//     for (const n of string.split(" ").slice(1)) {
//       arr.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
//     }
//     return arr.join("");
//   }
// }
// console.log(convertToCamelCase("biscuits")); // returns 'biscuits'

// console.log(convertToCamelCase("custard cream")); // returns 'cream'

// console.log(convertToCamelCase("biscuits are great with tea")); // returns "tea"

// function passwordValidation(password) {
//   // Your code goes here...
//   return /[n]/i.test(password) && /[c]/i.test(password) && /1$/.test(password)
//     ? "valid"
//     : "invalid";
// }

//Padding

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(1234)); //1234.
// console.log(maskCreditCard(12345678)); // '****5678'.

//Repeat:
// const importantMessage = "Bad Weather.  All departures delayed. ";
// console.log(importantMessage.repeat(2));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line. `.repeat(n));
// };
// console.log(planesInLine(4));

//Code Challenge 4
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   for (let i = 0; i < rows.length; i++) {
//     const [first, second] = rows[i].toLowerCase().trim().split("_");
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
//   }
// });

//Code Challenge 5
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type} ${from} ${to} ${time}`;
  console.log(output);
}
