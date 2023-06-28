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
function digitalRoot(n) {
  // ...
  let num = n;
  if (String(n).length > 1) {
    num = 0;
    String(num)
      .split("")
      .forEach(function (value) {
        num += Number(value);
        return num;
      });
  } else {
    return num;
  }
}

console.log(digitalRoot(15));
