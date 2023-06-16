//NorthCoders Pre-course Challenges;

//MATHS.
//Challenge 1: Modulo.
// function modulo(a, b) {
//   // Your code goes here...
//   return a % b;
//   }

//Challenge 2: Square Root.
// function squareRoot(n) {
//   // Your code goes here...
//   return Math.sqrt(n);
//   }

//Challenge 3: Raise to Power.
// function raiseToPower(m, n) {
//   // Your code goes here...
//   return m**n;
//   }

//Challenge 4: Format Money.
// function formatMoney(amount) {
//   // Your code goes here...
//   return `£${String(amount.toFixed(2))}`
//   }

//Challenge 5: Calculate Circle Area.
// function calculateCircleArea(r) {
//   // Your code goes here...
//   return Number((Math.PI * r ** 2).toFixed(3));
//   }

//Challenge 6: Calculate Full Turn.
// function calculateFullTurn(degrees) {
//   return Math.floor(degrees/360);
//   }

//Challenge 7: Find Smallest and Biggest.
// function findSmallestAndBiggest(arr) {
//   // Your code goes here...
//   const sorted = arr.sort(function(a, b){return a-b});
//   return ([sorted[0], sorted[sorted.length - 1]]);
//   }

//Challenge 8 : Split the Beans.
// function splitTheBeans(totalCost, numOfPeople) {
//   // Your code goes here...
//   return Math.ceil(totalCost / numOfPeople);
// }

//CONDITIONAL LOGIC

//Challenge 1: Are these values equal?
// function areValuesEqual(value1, value2) {
//   // Your code goes here...
//   return (value1 === value2);
//   }

//Challenge 2: Are these values NOT equal?
// function areValuesNotEqual(value1, value2) {
//   // Your code goes here...
//   return (value1 !== value2)
//   }

//Challenge 3: Is it from the 60s?
// function isFromThe60s(year) {
//   // Your code goes here...
//   return (year <= 1969 && year >= 1960)
//   }

//Challenge 4: Is the string an even length?
// function isEvenLength(string) {
//   // Your code goes here...
//   return (string.length % 2 === 0);
//   }

//Challenge 5: Are these strings equal?
// function areStringsEqualCaseInsensitive(string1, string2) {
//   // Your code goes here...
//   return(string1.toLowerCase() === string2.toLowerCase())
//   }

//STRINGS
//
//Challenge 1:  How long is a piece of string?
// function getLength(string) {
//   // Your code goes here...
//   return Number(string.length);
//   }

//Challenge 2: Joining names together.
// function putNamesTogether(firstName, secondName) {
//   // Your code goes here...
//   return `${firstName} ${secondName}`
//   }

//Challenge 3: Capitalising strings.
// function capitaliseString(string) {
//   // Your code goes here...
//   return `${string[0].toUpperCase()}${string.slice(1)}`
//   }

//Challenge 4:  No need to shout.
// function dontShoutSentence(string) {
//   // Your code goes here...
//   return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`
//   }

//Challenge 5: Get the middle character.
// function getMiddle(string) {
//   // Your code goes here...
//   return string.length % 2 === 0 ? `${string[string.length/2-1]}${string[string.length/2]}` : `${string[Math.round(string.length/2-1)]}`
//   }

//Challenge 6:  Get the last word.
// function getLastWord(string) {
//   // Your code goes here...
//   let str = string.split(' ')
//   return str[str.length - 1];
//   }

//Challenge 7: Hyphenate-all-the-words.
// function hyphenateWords(string) {
//   // Your code goes here...
//   return string.split(' ').join('-');
//   }

//Challenge 8: Converting to camel case.
// function convertToCamelCase(string) {
//   // Your code goes here...
//  if (string.split(' ').length === 1) {
//   let oneStr = string[0].toLowerCase();
//   let upperCase = 0;
//   for(let i = 1; i < string.length; i++){
//     if(string[i] === string[i].toUpperCase() && upperCase === 0){
//       oneStr += string[i];
//       upperCase += 1
//     } else {
//       oneStr += string[i].toLowerCase();
//     }

//   }
//   return oneStr;
//  } else {
//   let splitStr = string.split(' ');
//   let newStr = splitStr[0].toLowerCase();
//   for(let i = 1; i < splitStr.length; i++){
//     newStr += splitStr[i][0].toUpperCase();
//     newStr += splitStr[i].slice(1).toLowerCase();

//   }
//   return newStr;
//  }

//   }

//Challenge 9: Enter a valid password:
// function passwordValidation(password) {
//   // Your code goes here...
//   let containsC = false;
//   let containsN = false;
//   let ends1 = password[password.length-1] === '1' ? true : false;

//   for(let i = 0; i<password.length; i++){
//       if (password[i] === 'C' || password[i] ==='c') {
//         containsC = true;
//       } else if (password[i] === 'n' || password[i] === 'N') {
//           containsN = true;
//       }
//   }
//   console.log(`Contains C: ${containsC}`)
//   console.log(`Contains N: ${containsN}`)
//   console.log(`ends1: ${ends1}`)
//   if (containsC === true && containsN === true && ends1 === true) {
//       return 'valid';
//   } else {
//       return 'invalid';
//   }

//ARRAYS
//Challenge 1: Even numbers.
// function getEvenNumbers(nums) {
//   // Your code goes here...
//   const myArr = [];
//   for(let i = 0; i < nums.length; i++){
//       nums[i] % 2 === 0 ? myArr.push(nums[i]) : {};
//   }
//   return myArr;
//   }

//Challenge 2: Get items longer than...
// function getItemsLongerThan(array, len) {
//   // Your code goes here...
//   const myArr = [];
//   for(let i = 0; i < array.length; i++){
//       array[i].length > len ? myArr.push(array[i]) : {};
//   }

//   return myArr;
//   }

//Challenge 3: Last Items.
// function getLastItems(array, n) {
//   // Your code goes here...
//   return n === 0 ? [] : array.slice(-n);
//   }

//Challenge 4: Sandwich Filling.
// function getSandwichFilling(sandwich) {
//   // Your code goes here...
//   return sandwich.slice(1, -1);
//   }

//Challenge 5: Remove item.
// function removeItem(array, n) {
//   // Your code goes here...

//   return array.filter((_, index) => index !== n);
// }
// console.log(removeItem([1], 0));
