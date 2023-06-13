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
