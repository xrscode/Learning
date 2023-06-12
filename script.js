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

// if (ticketPrice >= 100 && numOfPeople >= 5) {
//   return true;
// } else {
//   return false;
// }
//     }

//Challenge 15: Ordering Supplies:
// function orderSupplies(supplies, guests) {
//   let totalSupplies = 0;
//   for (const key in supplies) {
//     totalSupplies += supplies[key];
//   }
//   return totalSupplies * guests;
// }

//Challenge 16:  How Many Tables:
// function calculateTables(guests, seats) {
//   // Your code goes here...
//   return {
//     tables: Number(Math.round(guests / seats)),
//     remainingGuests: Number(guests % seats),
//   };
// }

//Challenge 17:  Taxi Fare Calculator:
// function calculateTaxiFare(seconds) {
//   // Your code goes here...
//   let minutes = Math.ceil(seconds / 60);
//   return minutes < 3 ? 500 : (minutes - 3) * 70 + 500;
// }
