//Northcoders Practise Challenges:
//Challenge 1:  Greet Friends:
// function greetFriend(name) {
//   return `Hello ${name}!`;
// }

//Challenge 2: Add Two Numbers:
// function add(a, b) {
//   // Your code goes here...
//   return a + b;
// }

//Challenge 3:  oddOrEven:
// function oddOrEven(num) {
//   // Your code goes here...
//   return num % 2 === 0 ? "even" : "odd";
// }

//Challenge 4:  Find the First Odd Number:
// function findFirstOdd(numbers) {
//   // Your code goes here...
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0) {
//       return numbers[i];
//     } else {
//       continue;
//     }
//   }
// }

//Challenge 5:  Retrieve Password:
// function retrievePassword(user) {
//   // Your code goes here...
//   return user.password;  //Will return Value.
// }

//Challenge 6:  Find Even Length Strings:
// function findEvenLengthStrings(items) {
//   let arr = [];
//   for (let i = 0; i < items.length; i++) {
//     if (typeof items[i] === "string" && items[i].length % 2 === 0) {
//       arr.push(items[i]);
//     } else {
//       continue;
//     }
//   }
//   return arr;
// }

//Challenge 7:  Is this a Palindrome?
// function isThisAPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return reversed == str ? true : false;
// }

//Challenge 8: Biggest and Smallest.
// function findBiggestAndSmallest(numbers) {
//   // Your code goes here...
//   if (numbers.length > 0) {
//     let sorted = numbers.sort(function (a, b) {
//       return a - b;
//     });
//     let biggestNum = sorted[sorted.length - 1];
//     let smallestNum = sorted[0];
//     let myobj = { biggest: biggestNum, smallest: smallestNum };
//     return myobj;
//   } else {
//     return {};
//   }
// }

//Challenge 9: Is this a Prime?
//Primes are divisble by themselves and 1, only.
// function checkIsPrime(num) {
//   // Your code goes here...
//   if (num === 1) {
//     return false;
//   }
//   let abc = 0;
//   for (let i = num - 1; i > 1; i--) {
//     if (num % i === 0) {
//       abc += 1;
//     }
//   }
//   return abc > 0 ? true : false;
// }

//Challenge 10:  Hello, Northcoders Party Planner!:
// function greetGuest(name) {
//     // Your code goes here...
//     return (name.length > 1 ? `Hello ${name[0].toUpperCase() + name.slice(1)}!`: `Hello !`);
//   }

//Challenge 11:  Find the Useful Emails:
// function findTicketPrices(emailString) {
//     // Your code goes here...
//     return /[1-9]/g.test(emailString);
//   };

//Challenge 12: Making the Guest List:
