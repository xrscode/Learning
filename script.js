//Reverse Letter - KYU 7:
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/solutions/javascript
// function reverseLetter(str) {
//   return str
//     .split("")
//     .reverse()
//     .filter(function (char) {
//       return /[^a-zA-Z]/.test(char);
//     })
//     .join("");
// }
// console.log(reverseLetter("krish21an"));

//Row Weights - KYU 7:
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
// function rowWeights(array) {
//   //your code here
//   const myArr = [0, 0];
//   array.forEach(function (value, index) {
//     index % 2 === 0 ? (myArr[0] += value) : (myArr[1] += value);
//   });
//   return myArr;
// }

//Deodorant Evaporator - KYU 7:
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
// function evaporator(content, evap_per_day, threshold) {
//   let num = 0;
//   const min = (content / 100) * threshold;
//   while (content > min) {
//     num += 1;
//     content -= (content / 100) * evap_per_day;
//   }
//   return num;
// }
// console.log(evaporator(10, 10, 5));

//Data Reverse - 6kyu:
//https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// function dataReverse(data) {
//   // Your code here
//   const myArr = [];

//   for (let i = 0; i < data.length; i += group) {
//     const eights = data.slice(i, i + 8);
//     eights.forEach(function (value) {
//       myArr.push(value);
//     });
//   }
//   // const myArr2 = [];
//   // myArr.reverse().forEach(function (value) {
//   //   value.forEach(function (val2) {
//   //     myArr2.push(val2);
//   //   });
//   // });

//   return myArr;
// }
// console.log(
//   dataReverse([
//     1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
//     0, 1, 0, 1, 0, 1, 0,
//   ])
// );

//Alternative Capitlization - 7kyu.
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
// function capitalize(s) {
//   let even = s
//     .split("")
//     .map(function (value, index) {
//       return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
//     })
//     .join("");
//   let odd = s
//     .split("")
//     .map(function (value, index) {
//       return index % 2 === 0 ? value.toLowerCase() : value.toUpperCase();
//     })
//     .join("");
//   return [even, odd];
// }
// console.log(capitalize("codewarriors"));

//  Sum of Digits - 6kyu.
// https://www.codewars.com/kata/541c8630095125aba6000c00
// function digitalRoot(n) {
//   let num = 0;
//   String(n)
//     .split("")
//     .forEach(function (value) {
//       num += Number(value);
//     });
//   return String(num).length === 1 ? num : digitalRoot(num);
// }

//Encrypt This - 6kyu.
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
// const encryptThis = function (text) {
//   console.log(text);
//   let myStr = "";
//   text.split(" ").forEach(function (value, index) {
//     if (value.length < 2) {
//       index > 0
//         ? (myStr += " " + value.charCodeAt(0))
//         : (myStr += value.charCodeAt(0));
//     } else if (value.length < 3 && value.length > 1) {
//       myStr += " " + value.charCodeAt(0) + value.slice(1);
//     } else {
//       myStr +=
//         " " +
//         value.charCodeAt(0) +
//         value.slice(-1) +
//         value.slice(2, -1) +
//         value.slice(1, 2);
//     }
//   });
//   return myStr.trim();
// };

//Persistent Bugger - kyu 6;
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// function persistence(num) {
//   let counter = 0;
//   while (String(num).length > 1) {
//     num = String(num)
//       .split("")
//       .reduce((a, b) => a * b)
//       .toString();
//     counter += 1;
//   }
//   return counter;
// }

//  Take a Number and Sum its Digits - 6kyu.
//  https://www.codewars.com/kata/5626b561280a42ecc50000d1/solutions/javascript
// function sumDigPow(a, b) {
//   // Your code here
//   const myArr = [];
//   for (let i = a; i <= b; i++) {
//     if (i > 0 && i < 10) {
//       myArr.push(i);
//     } else if (
//       String(i)
//         .split("")
//         .reduce(function (a, b, i) {
//           return Number(a) + Number(b ** (i + 1));
//         }) === i
//     )
//       myArr.push(i);
//   }
//   return myArr;
// }

// console.log(sumDigPow(0, 136));
