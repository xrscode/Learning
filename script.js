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
//     // Your code goes here...
//     if (numbers.length > 0) {
//       let sorted = numbers.sort(function (a, b) {
//         return a - b;
//       });
//       return {biggest: sorted[sorted.length - 1], smallest: sorted[0]}
//     } else {
//       return {};
//     }
//   }

//Challenge 9: Is this a Prime?
// function checkIsPrime(num) {
//     // Your code goes here...
//     if (num === 1) {
//       return false;
//     } else {
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           console.log(i);
//           return false;
//         } else {
//           continue;
//         }
//       }
//     }
//     return true;
//   }

//Challenge 10:  Hello, Northcoders Party Planner!:
// function greetGuest(name) {
//     // Your code goes here...
//     return (name.length > 1 ? `Hello ${name[0].toUpperCase() + name.slice(1)}!`: `Hello !`);
//   }

//Challenge 11:  Find the Useful Emails:
// function findTicketPrices(emailString) {
//     // Your code goes here...
//return /[1-9]/g.test(emailString);
//   };

//Challenge 12: Making the Guest List:
// function makeGuestList(person) {
//   // Your code goes here...
//   const name = person.name.split(" ");
//   delete person.name;
//   person.firstName = name[0];
//   person.lastName = name[1];
//   return person;
// }

//Challenge 13: Tracking the Ticket Prices.
// function trackAttendees(person, ticketCost) {
//   // Your code goes here...
//   person.paidForTicket = Number(ticketCost);
//   return person;
// }

//Challenge 14:  Can We Have the Party?
// function isPartyViable(guests) {
//     // Your code goes here...
// const numOfPeople = guests.length;
// let ticketPrice = 0;
// for (let i = 0; i < guests.length; i++) {
//   ticketPrice += guests[i].paidForTicket;
// }

//Challenge 15:  Tracking the Ticket Prices.
// if (ticketPrice >= 100 && numOfPeople >= 5) {
//   return true;
// } else {
//   return false;
// }
//     }

//Challenge 16: Ordering Supplies:
// function orderSupplies(supplies, guests) {
//   let totalSupplies = 0;
//   for (const key in supplies) {
//     totalSupplies += supplies[key];
//   }
//   return totalSupplies * guests;
// }

//Challenge 17:  How Many Tables:
// function calculateTables(guests, seats) {
//   // Your code goes here...
//   return {
//     tables: Number(Math.round(guests / seats)),
//     remainingGuests: Number(guests % seats),
//   };
// }

//Challenge 18:  Taxi Fare Calculator:
// function calculateTaxiFare(seconds) {
//   // Your code goes here...
//   let minutes = Math.ceil(seconds / 60);
//   return minutes < 3 ? 500 : (minutes - 3) * 70 + 500;
// }

//Challenge 19:  Who are the winners?:
// function pickWinners(numbers) {
//   // Your code goes here...
//   let myArr = [];
//   for (let i = 1; i < numbers.length; i += 2) {
//     if (numbers[i] % 2 != 0) {
//       myArr.push({ seat: i, ticketCost: numbers[i] });
//     }
//   }
//   return myArr;
// }

//Challenge 20: Gathering Feedback:
// function gatherFeedback(feedbackArray) {
//   // Your code goes here...
//   let obj = { positive: 0, negative: 0, neutral: 0 };
//   for (let i = 0; i < feedbackArray.length; i++) {
//     if (feedbackArray[i][1] >= 0 && feedbackArray[i][1] <= 3) {
//       obj.negative += 1;
//     } else if (feedbackArray[i][1] >= 4 && feedbackArray[i][1] <= 6) {
//       obj.neutral += 1;
//     } else if (feedbackArray[i][1] >= 7 && feedbackArray[i][1] <= 10) {
//       obj.positive += 1;
//     }
//   }
//   return obj;
// }

//Code 13311484258
// function sayHello(country, time) {
//     let greeting = "";
//     console.log(country, time);
//     if ((country == "Spain" || country == "Mexico") && time > 0 && time < 12) {
//       greeting = "buenos dias";
//     } else if (
//       (country == "Spain" || country == "Mexico") &&
//       time > 12 &&
//       time < 24
//     ) {
//       greeting = "buenas noches";
//     } else if (country == "France" && time > 0 && time < 12) {
//       greeting = "bon matin";
//     } else if (country == "France" && time > 12 && time < 24) {
//       greeting = "bon soir";
//     } else {
//       greeting = null;
//     }
//     return greeting;
//   }

//Challenge 1: Say Happy Birthday.
// function sayHappyBirthday(number) {
//   // please complete this function ...
//   return `Happy Birthday, you are ${number} today!`;
// }

//Challenge 2: Remove Last Item.
// function removeLastItem(arr) {
//   // write your code here
//   arr.pop();
//   return arr;
// }
// console.log(removeLastItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Challenge 3: Staying the Night.
// function checkForEnoughBeds(beds, numOfPeople) {
//   // please complete this function ...
//   let space = 0;
//   space += beds.doubles * 2;
//   space += beds.singles;
//   return space >= numOfPeople ? true : false;
// }

// //Challenge 4: Make Alternating Array.
// function makeAlternatingArray(array) {
//   // please complete this function ...
//   let myArr = [];
//   if (array.length <= 1) {
//     console.log(`The array is too small. `);
//     return array;
//   } else {
//     for (let i = 0; i < array.length; i += 2) {
//       myArr.push(array[i]);
//     }
//   }
//   console.log(myArr);
//   return myArr;
// }
// makeAlternatingArray([]);
// makeAlternatingArray([1]);
// makeAlternatingArray(["a", "b", "c", "d", "e"]);
// // should return ['a', 'c', 'e']
// makeAlternatingArray([100, 42, 99, 3, -5]);
// // should return [100, 99, -5]

//Challenge 5: Noisy Pets //RETURN TO.
// function addSoundToPets(pets) {
//   // write your code here
//   let myArr = [];
//   let myobj = {};
//   for (let i = 0; i < pets.length; i++) {
//     myobj.name = pets[i].name;
//     myobj.type = pets[i].type;
//     if (pets[i].type === "cat") {
//       myobj.sound = "meow!";
//     } else if (pets[i].type === "dog") {
//       myobj.sound = "woof!";
//     }
//   }
//   myArr.push(myobj);
//   console.log(myArr);
//   return myArr;
// }
// addSoundToPets([{ name: "Bolin", type: "cat" }]);

//Count the Capitals:
// function countTheCapitals(string) {
//   let capitals = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] === string[i].toUpperCase() &&
//       string[i] !== string[i].toLowerCase() &&
//       string[i] !== " "
//     ) {
//       capitals += 1;
//     }
//   }
//   console.log(capitals);
//   return capitals;
// }

// countTheCapitals("we LOVE cOdInG");

//Find the Knife and Fork:
// function findKnifeAndFork(utensils) {
//   // write your code here
//   let myobj = { knife: 0, fork: 0 };
//   for (let i = 0; i < utensils.length; i++) {
//     if (utensils[i] === "fork") {
//       myobj.fork = i;
//     } else if (utensils[i] === "knife") {
//       myobj.knife = i;
//     }
//   }
//   console.log(myobj);
//   if (myobj.knife === 0) {
//     myobj.knife = -1;
//   } else if (myobj.fork === 0) {
//     myobj.fork = -1;
//   }
//   return myobj;
// }

//Challenge Truncate String:
// function truncateString(str, n) {
//   // please complete this function ...
//   console.log(str.slice(0, n));
//   if (n > str.length || str.length === n) {
//     return str;
//   } else {
//     return str.slice(0, n) + "...";
//   }
// }

// function findOldestPerson(people) {
//   // please complete this function ...
//   let oldest = 0;
//   let person = "";
//   if (people.length === 0) {
//     return `no people found`;
//   }
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldest) {
//       oldest = people[i].age;
//       person = people[i].name;
//     }
//     console.log(people[i].age);
//   }
//   console.log(person);
//   return person;
// }
// findOldestPerson([]);
// function makeSingleArray(arr) {
//   // write your code here
//   let myArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let newArr = arr[i];
//     for (i = 0; i < newArr.length; i++) {
//       if (typeof newArr[i] === "number") {
//         myArr.push(newArr[i]);
//       }
//     }
//   }
//   return myArr;
// }

function roundUpToNearestMultiple(n, x) {
  // write your code here
  console.log(n, x);
  if(x === 0){
      return -1;
  } else (
    for (let i = n + 1; i < n + 100; i++){
        console.log(i);
      }
  )
  }
  roundUpToNearestMultiple(4, 8);