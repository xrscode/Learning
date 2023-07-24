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
//

//Codewars Katas:  KYU 7
// function countLanguages(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   let obj = {};
//   list.forEach(function (value) {
//     console.log(value.language);
//     if (Object.keys(obj).includes(value.language)) {
//       obj[value.language]++;
//     } else {
//       obj[value.language] = 1;
//     }
//   });
//   return obj;
// }

//Codewars Katas: KYU 7:
// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
// function isSameLanguage(list) {
//   //console.log(list[1].language);
//   return list.every(function (value) {
//     return value.language === list[0].language;
//   });
// }

//Codewars Katas: Find the most senior developer. KYU 6:
// https://www.codewars.com/kata/582887f7d04efdaae3000090/javascript
// function findSenior(list) {
//   let eldest = 0;
//   let myArr = [];
//   list.forEach(function (value) {
//     value.age > eldest ? (eldest = value.age) : {};
//   });
//   list.forEach(function (value) {
//     value.age === eldest ? myArr.push(value) : {};
//   });
//   return myArr;
// }

//Codewars Katas:  Coding Meetup Katas - kyu 6:
// https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript
// function isAgeDiverse(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   let obj = {
//     teens: 0,
//     twenties: 0,
//     thirties: 0,
//     fourties: 0,
//     fifties: 0,
//     sixties: 0,
//     seventies: 0,
//     eighties: 0,
//     nineties: 0,
//     centenarian: 0,
//   };

//   for (let i = 0; i < list.length; i++) {
//     if (list[i].age >= 10 && list[i].age < 20) {
//       obj.teens += 1;
//     } else if (list[i].age >= 20 && list[i].age < 30) {
//       obj.twenties += 1;
//     } else if (list[i].age >= 30 && list[i].age < 40) {
//       obj.thirties += 1;
//     } else if (list[i].age >= 40 && list[i].age < 50) {
//       obj.fourties += 1;
//     } else if (list[i].age >= 50 && list[i].age < 60) {
//       obj.fifties += 1;
//     } else if (list[i].age >= 60 && list[i].age < 70) {
//       obj.sixties += 1;
//     } else if (list[i].age >= 70 && list[i].age < 80) {
//       obj.seventies += 1;
//     } else if (list[i].age >= 80 && list[i].age < 90) {
//       obj.eighties += 1;
//     } else if (list[i].age >= 90 && list[i].age < 100) {
//       obj.nineties += 1;
//     } else if (list[i].age >= 100) {
//       obj.centenarian += 1;
//     }
//   }

//   console.log(obj);

//   return (
//     obj.teens > 0 &&
//     obj.twenties > 0 &&
//     obj.thirties > 0 &&
//     obj.fourties > 0 &&
//     obj.fifties > 0 &&
//     obj.sixties > 0 &&
//     obj.seventies > 0 &&
//     obj.eighties > 0 &&
//     obj.nineties > 0 &&
//     obj.centenarian > 0
//   );
// }

// console.log(
//   isAgeDiverse([
//     {
//       firstName: "Harry",
//       lastName: "K.",
//       country: "Brazil",
//       continent: "Americas",
//       age: 19,
//       language: "Python",
//     },
//     {
//       firstName: "Kseniya",
//       lastName: "T.",
//       country: "Belarus",
//       continent: "Europe",
//       age: 29,
//       language: "JavaScript",
//     },
//     {
//       firstName: "Jing",
//       lastName: "X.",
//       country: "China",
//       continent: "Asia",
//       age: 39,
//       language: "Ruby",
//     },
//     {
//       firstName: "Noa",
//       lastName: "A.",
//       country: "Israel",
//       continent: "Asia",
//       age: 40,
//       language: "Ruby",
//     },
//     {
//       firstName: "Andrei",
//       lastName: "E.",
//       country: "Romania",
//       continent: "Europe",
//       age: 59,
//       language: "C",
//     },
//     {
//       firstName: "Maria",
//       lastName: "S.",
//       country: "Peru",
//       continent: "Americas",
//       age: 60,
//       language: "C",
//     },
//     {
//       firstName: "Lukas",
//       lastName: "X.",
//       country: "Croatia",
//       continent: "Europe",
//       age: 75,
//       language: "Python",
//     },
//     {
//       firstName: "Chloe",
//       lastName: "K.",
//       country: "Guernsey",
//       continent: "Europe",
//       age: 88,
//       language: "Ruby",
//     },
//     {
//       firstName: "Viktoria",
//       lastName: "W.",
//       country: "Bulgaria",
//       continent: "Europe",
//       age: 98,
//       language: "PHP",
//     },
//     {
//       firstName: "Piotr",
//       lastName: "B.",
//       country: "Poland",
//       continent: "Europe",
//       age: 128,
//       language: "JavaScript",
//     },
//   ])
// );

//
// function addUsername(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   list.map(function (value) {
//     value.username =
//       value.firstName.toLowerCase() +
//       value.lastName[0].toLowerCase() +
//       String(new Date().getFullYear() - value.age);
//   });
//   return list;
// }
// function getAverageAge(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   const totalAge = list.reduce(function (a, b) {
//     return a + b.age;
//   }, 0);

//   return list.length > 1 ? Math.round(totalAge / list.length) : list[0].age;
// }
// function findAdmin(list, lang) {
//   // thank you for checking out the Coding Meetup kata :)
//   return list.filter(function (value) {
//     console.log(value.language);
//     return value.language === lang && value.githubAdmin === "yes";
//   });
// }

//Duplicate Encoder: 6 kyu:
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript
// function duplicateEncode(word) {
//   // ...
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, b, c) {
//       return c.indexOf(a) == c.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }
// function isAgeDiverse(list) {
//   return list.some((h) => h.age >= 100)
//     ? [10, 20, 30, 40, 50, 60, 70, 80, 90].every((e) =>
//         list.some((x) => x.age - e >= 0 && x.age - e <= 9)
//       )
//     : false;
// }

// function isAgeDiverse(list) {
//   return list.some(function (a) {
//     a.age >= 100;
//   })
//     ? [10, 20, 30, 40, 50, 60, 70, 80, 90].every(function (b) {
//         list.some(function (c) {
//           c.age - b >= 0 && c.age - b <= 9;
//         });
//       })
//     : false;
// }

//Is Pangram?  kyu - 6;
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/solutions/javascript
// function isPangram(string) {
//   //...
//   return [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ].every(function (a) {
//     string
//       .toLowerCase()
//       .split("")
//       .some(function (b) {
//         return a === b;
//       });
//   });
// }

//https://www.codewars.com/kata/583203e6eb35d7980400002a/solutions
//return the total number of smiling faces in the array
// function countSmileys(arr) {
//   return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
// }

// Extract Last Names of People Named Michael: 6kyu.
// https://www.codewars.com/kata/580741302e14acaef900015a/train/javascript;
// function getMichaelLastName(inputText) {
//   // your awesome code here
//   inputText = inputText.split(" ");
//   const arr = [];
//   for (let i = 0; i < inputText.length; i++) {
//     if (inputText[i] === "Michael") {
//       if (inputText[i + 1][0] === inputText[i + 1][0].toUpperCase()) {
//         arr.push(inputText[i + 1].replace(/\W/, "").trim());
//       }
//     }
//   }
//   return arr;
// }
// function getMichaelLastName(text) {
//   return text.match(/Michael [A-Z][a-z]+/g).map(function (value) {
//     return value.split(" ")[1];
//   });
// }
// console.log(
//   getMichaelLastName("Hi Michael Jordan. Michael Jackson, how are you")
// );

//Function Count the Odds! 6kyu:
// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript
// function findOdd(A) {
//   let obj = {};
//   A.forEach(function (value) {
//     return value in obj ? (obj[value] += 1) : (obj[value] = 1);
//   });
//   for (key in obj) {
//     if (obj[key] % 2 === 1) {
//       return Number(key);
//     }
//   }
// }
// console.log(findOdd([1, 2, 3, 3, 1]));
// function gatherFeedback(feedbackArray) {
//   // Your code goes here...

//   let feedbackObject = {
//     positive: 0,
//     negative: 0,
//     neutral: 0,
//   };
//   for (let i = 0; i < feedbackArray.length; i++) {
//     if (feedbackArray[i][1] >= 7 && feedbackArray[i][1] <= 10) {
//       feedbackObject.positive++;
//     } else if (feedbackArray[i][1] >= 4 && feedbackArray[i][1] <= 6) {
//       feedbackObject.neutral++;
//     } else {
//       feedbackObject.negative++;
//     }
//   }
//   return feedbackObject;
// }
