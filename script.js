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

//Challenge 5: Remove Item.
// function removeItem(array, n) {
//   // Your code goes here...
//   return array.filter((_, index) => index !== n);
// }

//Challenge 6: Merge Arrays;
// function mergeArrays(arr1, arr2) {
//   // Your code goes here...
//   const myArr = [];
//   for(let i = 0; i < arr1.length; i++){
//       myArr.push(arr1[i]);
//   }
//    for(let i = 0; i < arr2.length; i++){
//       myArr.push(arr2[i]);
//   }
//   return myArr;
//   }

//Challenge 7: Is Item Omnipresent?
// function isItemOmnipresent(arrayOfArrays, item) {
//   let num = 0;

//   for(let i = 0; i < arrayOfArrays.length; i++) {
//     let k = arrayOfArrays[i];
//     for(let i = 0; i < k.length; i++){
//       k[i] === item ? num += 1 : {};
//     }
//   }
//   return (num === arrayOfArrays.length);
//   }

//Challenge 8: Flatten by One:
// function flattenArrayByOne(arrayOfArrays) {
//   // Your code goes here...
//   const myArr = [];
//   for(let i = 0; i < arrayOfArrays.length; i++){
//       for(let k = 0; k < arrayOfArrays[i].length; k++){
//           myArr.push(arrayOfArrays[i][k]);
//       }
//   }
//   return myArr;
//   }

//OBJECTS

//Challenge 1: Is over 40?
// function isOver40(user) {
//   // Your code goes here...
//   return user.age > 41
//   }

//Challenge 2: Get user age.
// function getUserAge(user) {
//   // Your code goes here...
//   return 2023 - user.yearOfBirth
//   }

//Challenge 3: User pet age.
// function getUserPetAge(user) {
//   // Your code goes here...
//   return user.pet.age
//   }

//Challenge 4: Create Product.
// function createProduct() {
//   // Your code goes here...
//   return {type: 'example!', price: 1}
//   }

//Challenge 5: Add price to product.
// function addPriceToProduct(product, price) {
//   product.price = price;
//   return product;
// }

//Challenge 6: Get property of product.
// function getPropertyOfProduct(product, property) {
//   // Your code goes here...
//   console.log(product.quantity)
//   return product[property];
//   }

//Challenge 7: Add property to product.
// function addPropertyToProduct(product, property, value) {
//   // Your code goes here...
//   product[property] = value;
//   return product;
// }

//Challenge 8: Create Northcoder.
// function createNorthcoder(name, yearOfBirth) {
//   // Your code goes here...
//   const age = 2023 - yearOfBirth;
//   return {name: name, age: age, language: 'JavaScript' }
//   }

//Challenge 9: Update Voter Address.
// function updateVoterAddress(voter, correctHouseNumber) {
//   // Your code goes here...
//   voter.address.houseNumber = correctHouseNumber;
//   }

//Challenge 10: Create User String.
// function createUserString(userObj) {
//   // Your code goes here...
//   return `name: ${userObj.name}, age: ${userObj.age}, language: JavaScript`
//   }

//Challenge 11: Get Album Properties.
// function getAlbumProperties(obj) {
//   // Your code goes here...
//   const myArr = [];
//   for(let key in obj){
//       myArr.push(key);
//   }
//   return myArr;
//   }

//Challenge 12: Get Northcoder Names.
// function getNorthcodersNames(northcoders) {
//   // Your code goes here...
//   const myArr = [];
//   for(let i = 0; i < northcoders.length; i++){
//       myArr.push(northcoders[i].name);
//   }
//   return myArr;
//   }

//Challenge 13: Delete Many Passwords.
// function deleteManyPasswords(users) {
//   // Your code goes here...
//   for(let i = 0; i<users.length; i++){
//       delete users[i].password;
//   }
//   return users;
//   }

//Challenge 14: Count the objects.
// function countTheObjects(arr) {
//   // Your code goes here...
//   let num = 0;
//   for(let i = 0; i < arr.length; i++){
//       typeof arr[i] === 'object' && !Array.isArray(arr[i]) && arr[i] != null  ? num += 1 : {};
//   }
//   return num;
//   }

//ADVANCED CHALLENGES:
//Challenge 1: Flipping Booleans.
// function flipBooleans(bools) {
//   bools.forEach(function (item, i) {
//     bools[i] = !item;
//   });
//   return bools;
// }
// console.log(flipBooleans([true, false, false, true]));

//Challenge 2: Translating Keys.
// function translateKey(student, keyToChange, translation) {
//     const myObj = {};
//     for (const key in student) {
//       if (key != keyToChange) {
//         myObj[key] = student[key];
//       } else {
//         myObj[translation] = student[key];
//       }
//     }
//     return myObj;
//   }

// const student = {
//   prénom: "Carla",
//   surname: "Bruni",
//   job: "Artist",
// };
// const keyToChange = "prénom";
// const translation = "firstName";

// console.log(translateKey(student, keyToChange, translation));

// Challenge 3: Find the Dentist.
// function findFirstDentist(people) {
//   // Your code goes here...
//   for (let i = 0; i < people.length; i++) {
//     for (const key in people[i]) {
//       if (people[i].isDentist === true) {
//         return people[i];
//       }
//     }
//   }
//   return null;
// }

// console.log(
//   findFirstDentist([
//     { name: "Callum", isDentist: false },
//     { name: "Carrie", isDentist: true },
//   ])
// ); // returns {name: 'Carrie', isDentist: true}

//Challenge 4:  Tally the people in Manchester.
// function tallyPeopleInManchester(people) {
//   // Your code goes here...
//   let num = 0;
//   people.forEach(function (value, index) {
//     people[index].lives.city === "Manchester" ? (num += 1) : {};
//   });
//   return num;
// }

// tallyPeopleInManchester([
//   { name: "Carrie", lives: { country: "UK", city: "Leeds" }, age: 32 },
// ]);

//Challenge 5: Get the pug owners!
// function getPugOwners(dogs) {
//   // Your code goes here...
//   const myArr = [];
//   dogs.forEach(function (value, index) {
//     dogs[index].breed === "Pug" ? myArr.push(dogs[index].owner) : {};
//   });
//   return myArr;
// }

//Challenge 6: Pluralising Keys.
// function pluraliseKeys(obj) {
//     // Your code goes here...
//     const myObj = {};
//     for(let key in obj){
//      if(Array.isArray(obj[key]) && key[key.length - 1] !== 's'){
//       const newKey = key + 's'
//       myObj[newKey] = obj[key];
//      } else {
//       myObj[key] = obj[key];
//      }
//     }
//     return myObj;
//     }

//Challenge 7: Getting Word Lengths;
// function getWordLengths(string) {
//     // Your code goes here...
//     const myArr = [];
//     string = string.split(' ')
//     string.forEach(function(value, index){
//         value.length > 0 ? myArr.push(value.length) : {};
//     })
//     return myArr;
//     }

//Challenge 8: Get Palindromes:
// function getPalindromes(words) {
//     // Your code goes here...
//     const myArr = [];
//     words.forEach(function(value){
//       value.split('').reverse().join('') === value ? myArr.push(value) : {};
//     })
//     return myArr;
//     }

//Challenge 9: Replace Letters with Xs:
// function replaceLettersWithXs(string) {
//     // Your code goes here...
//     let myStr = ''
//     for(let i = 0; i < string.length; i++){
//         if (string[i].match(/[a-z]/i)){
//             myStr += 'X'
//         } else {
//             myStr += string[i];
//         }
//     }
//     return myStr;
//     }

//Challenge 10: Please enter a valid mobile number:
// function validMobileNumber(mobileNumber) {
//     console.log(mobileNumber);

//     if(mobileNumber.slice(0,2) === '07' && mobileNumber.slice(2).length === 9 && /^[0-9]+$/.test(mobileNumber)){
//       return true;
//     } else if (mobileNumber.slice(0,4) === '+447' && mobileNumber.slice(4).length === 9 && /^[0-9]+$/.test(mobileNumber.slice(1))){
//       return true;
//     }else if (mobileNumber.slice(0,5) === '00447' && mobileNumber.slice(5).length === 9 && /^[0-9]+$/.test(mobileNumber)){
//       return true;
//     }
//     return false;
//     }

//Challenge 11:  Summing the digits in a string:
// function sumDigitsFromString(string) {
//     // Your code goes here...
//     let num = 0;
//     for(let i = 0; i < string.length; i++){
//         console.log(string[i])
//         if(Number(string[i])) {
//             num += Number(string[i]);
//         }
//     }
//     return num;
// }

//Challenge 12: Calling all Williams!:
// function getWilliams(names) {
//   // Your code goes here...
//   const nameList = [];
//   for (let i = 0; i < names.length; i++) {
//     names[i].split(" ")[1] === "Williams" ? nameList.push(names[i]) : {};
//   }
//   return nameList;
// }
// getWilliams(["John Williamson", "Sam Williams"]);

//Challenge 13: Getting Factorials:
// function getFactorials(nums) {
//   const myArr = [];
//   ////////////////////////
//   //Factorial Function:
//   function factorial(num) {
//     let number = num;
//     for (let i = num - 1; i > 0; i--) {
//       number *= i;
//     }
//     return number;
//   }
//   ///////////////////////
//   nums.forEach(function (i) {
//     myArr.push(factorial(i));
//   });
//   return myArr;
// }

// console.log(getFactorials([1, 5, 2]));

//Challenge 14: Find the largest number:
// function largestNumber(number) {
//   // Your code goes here...
//   const myArr = String(number).split("");
//   const newArr = [];
//   let myNum = "";
//   myArr.forEach(function (i) {
//     newArr.push(Number(i));
//   });
//   newArr.sort(function (a, b) {
//     return b - a;
//   });
//   newArr.forEach(function (i) {
//     myNum += String(i);
//   });
//   return Number(myNum);
// }

//Challenge 15: Enter the Matrix;
// function generateMatrix(num) {
//     const myArr = [];
//     for (let i = 1; i <= num; i++) {
//       myArr.push([]);
//       for (let k = 0; k < num; k++) {
//         myArr[i - 1].push(null);
//       }
//     }
//     return myArr;
//   }
//   console.log(matrix(3));

// function sortTheKitchen(kitchen) {
//     console.log(kitchen);
//     for (const key in kitchen) {
//       if (typeof kitchen[key] === "string") {
//         kitchen[key] = kitchen[key].toLowerCase();
//         console.log(`This is a string: ${kitchen[key]}.`);
//       }
//       if (key === "hoover");
//       delete kitchen.hoover;
//     }
//     let totalShelves = 0;
//     kitchen.shelvesInCupboards
//       ? (totalShelves += kitchen.shelvesInCupboards)
//       : (totalShelves += 0);
//     kitchen.shelvesNotInCupboards
//       ? (totalShelves += kitchen.shelvesNotInCupboards)
//       : (totalShelves += 0);

//     kitchen.totalShelves = totalShelves;
//     delete kitchen.shelvesInCupboards;
//     delete kitchen.shelvesNotInCupboards;

//     return kitchen;
//   }

// function sortTheKitchen(kitchen) {
//   // Don't change the code below this line
//   //Step 1: Jumbled String Values.
//   for (const key in kitchen) {
//     typeof kitchen[key] === "string"
//       ? (kitchen[key] = kitchen[key].toLowerCase())
//       : {};
//   }

//   //Step 2: Delete Hoover.
//   delete kitchen.hoover;

//   //Step 3: Count Shelves and Delete.
//   let kitchenShelves = 0;
//   kitchen.shelvesInCupboards > 0
//     ? (kitchenShelves += kitchen.shelvesInCupboards)
//     : {};
//   kitchen.shelvesNotInCupboards > 0
//     ? (kitchenShelves += kitchen.shelvesNotInCupboards)
//     : {};

//   kitchen.totalShelves = kitchenShelves;
//   delete kitchen.shelvesInCupboards;
//   delete kitchen.shelvesNotInCupboards;
//   return kitchen;
// }

// sortTheKitchen({
//   hasFridge: true,
//   favouriteAppliance: "KeTtlE",
//   food: "eGgS",
//   shelvesInCupboards: 3,
//   shelvesNotInCupboards: 2,
//   petName: "RhuBarB",
//   hoover: "DysOn",
// });

// const obj = {
//   fruit: "tomato",
//   dog: "Vizsla",
//   colour: "red",
// };

// for (const key in obj) {
//   console.log(obj[key]);
//   if (obj[key] === "tomato") {
//     obj[key] = "pear";
//   }
// }

// console.log(obj);
// function generateMatrix(num) {
//   const myArr = [];
//   for (let i = 1; i <= num; i++) {
//     myArr.push([]);
//     for (let k = 0; k < num; k++) {
//       myArr[i - 1].push(null);
//     }
//   }
//   return myArr;
// }
// console.log(matrix(3));

// function addGuestsToParty(invitees) {
//   const party = {
//     host: "Paul Copley",
//     venue: "Hatch",
//     theme: "Under the sea",
//     guests: [
//       {
//         name: "Rose",
//       },
//       {
//         name: "Eli",
//       },
//     ],
//   };
//   invitees.forEach((person) => {
//     if (person.RSVP === "yes") {
//       party.guests.push({
//         name: person.name,
//       });
//     }
//   });
//   return party.guests;
// }
