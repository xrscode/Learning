"strict";
// //Default Parameters:
// const bookingArr = [];
// const createBooking = function (
//   flightNum = 1,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //Default Values
//   //ES5 Short Circuiting:
//   //numPassengers = numPassengers || 1;
//   // price = price || "$1.99";

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookingArr.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, undefined);
// createBooking("EZY8915", undefined, 50);

const flight = "LH234";
const passengerDYLAN = {
  name: "Dylan Dog",
  passport: 12345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "EZY8913";
  passengerDYLAN.name = "Mr. Dylan Dog";

  if (passenger.passport === 12345) {
    console.log("Check In");
  } else {
    console.log("Passport Number Incorrect");
  }
};

checkIn(flight, passengerDYLAN);
console.log(passengerDYLAN, flight);

//Advanced Functions
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
