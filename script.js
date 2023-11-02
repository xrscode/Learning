"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  //HERE
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//FAKE ALWAYS LOGGED IN.
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
const now = new Date();
const day = `${now.getDate()}`.padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();
const hour = now.getHours();
const minutes = String(now.getMinutes()).padEnd(2, "0");
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(23 === 23.0);
//Base 10 - 0 = 0 to 9.
//Base 2 = 0 or 1.

//Convert String to Numbers
console.log(typeof +"23"); //Number.

//Parsing
console.log(Number.parseInt("30xja", 10)); //30
console.log(Number.parseInt("x30xja", 10)); //NaN
console.log(Number.parseInt("30xja", 2)); //NaN
console.log(Number.parseInt("x30xja", 2)); //NaN

console.log(+parseInt("2.5rem")); //2
console.log(+parseFloat("2.5rem")); //2.5

//isNan
console.log(Number.isNaN(13)); //false
console.log(Number.isNaN("13")); //false
console.log(Number.isNaN("x13")); //false
console.log(Number.isNaN(+"13xrs")); //True - Converted to a Number.
console.log(Number.isNaN("hi")); //false
console.log(isNaN("hi")); //true
console.log(isNaN("5")); //false
console.log(isNaN(+"5")); //false
console.log(0 / 0); //NaN
console.log(Number.isNaN(0 / 0)); //true

//isFinite()
console.log("-----isFinite()-----");
console.log(Number.isFinite(13)); //true
console.log(Number.isFinite("13")); //false (Is a string.)
console.log(Number.isFinite(10 / 3)); //true (3.3333335 represented in the JavaScript format.)
console.log(Number.isFinite(10 / 0)); //false (Infinity is not finite.)

//isInteger()
console.log("-----isInteger()-----");
console.log(Number.isInteger(13)); //True - is whole number.
console.log(Number.isInteger(1.5)); //False - is float.
console.log(Number.isInteger("13")); //False - is String.

console.log(`----MATH AND ROUNDING----`);
console.log("---Powers---");
console.log(Math.sqrt(25)); //5  Square Root
console.log(25 ** (1 / 2)); //5  Square Root
console.log(8 ** (1 / 3)); //2   Cubic Root.

console.log("---Math Max/Min---");
console.log(Math.max(5, 7, 100, 23, 4)); //100 - Largest Number.
console.log(Math.max(5, 7, "100", 23, 4)); //100 - Performs type coercion.
console.log(Math.max(5, 7, "100rem", 23, 4)); //NaN - Does not parse.
console.log(Math.min(5, 7, 100, 23, 4)); //4 - Smallest Number.

console.log("---Pi----");
console.log(Math.PI * Number.parseFloat("10px") ** 2); //314.159.....

console.log("---Random---");
console.log(Math.random() * 6);
console.log(Math.trunc(Math.random() * 6));
console.log(Math.round(Math.random() * 6));

const randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);
console.log(`The random number is: ${randomInt(-5, 10)}`); //Random Int between 5 and 10.

console.log("---Rounding---");
console.log(Math.round(13.5)); //14 Round to nearest whole integer.
console.log(Math.round(13.4)); //13 Round to nearest whole integer.

console.log("CEIL");
console.log(Math.ceil(13.9)); //14 Round up to nearest whole integer.
console.log(Math.ceil(13.1)); //14 Round up to nearest whole integer.
console.log("FLOOR");
console.log(Math.floor(13.9)); //13 Round down to nearest whole integer.
console.log(Math.floor(13.1)); //13 Round down to nearest whole integer.

console.log("--Rounding Decimals--");
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(1)); //2.7
console.log((2.7).toFixed(3)); //2.700
console.log((2.746223).toFixed(3)); //2.746

console.log("----REMAINDER OPERATOR-----");
console.log(5 % 2); //1.
console.log(5 / 2); //2.5  (5 is 2 * 2 plus 1); So 1 is the remainder.
console.log(8 % 2); //0
console.log(8 % 3); //2 (3 * 2 + 2);  So 2 is the remainder.
const isEven = (n) => !(n % 2);
console.log(isEven(4));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = "gold";
    }
  });
});

console.log("-----NUMERIC SEPERATORS-----");
const diameter = 18473872378347843783;
console.log(diameter); //Prints the large number: 18473872378347843783 to the console.

const price = 75_99; //Reader interprets price as $75.99.
console.log(price); //JavaScript interprets as number; 7599.
const price2 = 7_599; //Reader interprets price as $7,599.

//Working with BigInt
console.log("-----BIG INT------");
console.log(`The max safe number is: ${Number.MAX_SAFE_INTEGER}.`);
console.log(
  `However, with BigInt() we can store larger numbers: ${90071992547409919007199254740991n}.`
);
console.log(`Type conversion can't be completed: ${4} + ${4n}n`);

//Operations with BigInt
console.log(`-----Operations with BigInt------`);
console.log(4n + 5n); //9n (It is a BigInt)
console.log(20n > 15); //True
console.log(5n == 5); //True
console.log(5n === 5); //False
console.log(5n + " is a bigInt!"); //5 is a bigInt!

//Divisions
console.log("-----Divisions with BigInt-----");
console.log(10n / 3n); //3n  Returns the closest bigInt;
console.log(5n / 2n); //2n
console.log(12n / 3n); //4n

//Creating Dates
console.log("-----CREATING DATES & Time-----");
//Create a date:
//const now = new Date();
//console.log(now); //Thu Nov 02 2023 18:28:17 (Time this code was run.);

console.log(new Date("Sep 16 1987")); //Wed Sep 16 1987.
//console.log(new Date("Sep 16 1987") > new Date(now)); //false
//console.log(new Date("Sep 16 1987") < new Date(now)); //true
console.log(new Date(account1.movementsDates[0])); //Mon November 18th 2019 - the time created.

console.log(new Date(2037, 10, 19, 15, 23, 5)); //November 19th 2037 15:23:05.
console.log(new Date(2037, 10, 31, 15, 23, 5)); //December 01 2037 15:23:05.

console.log("Convert from days to milliseconds");
console.log(new Date(0)); //January 01st.
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //January 04 (3 days later).
//3 days * 24 Hours * 60 minutes * 60 seconds * milliseconds;

//Working with Dates;
console.log(`-----Working with Dates-----`);
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00;
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10 (0 based!)
console.log(future.getDay()); //4 (Monday is day 1, Thursday is day 4. NOT 0 Based.)
console.log(future.getMinutes()); //23 minutes.
console.log(future.getSeconds()); //0 as no seconds were set.
console.log(future.toISOString()); //2037-11-19T15:23:00.00.000Z
console.log(future.getTime()); // How many milliseconds passed since 1970 (2142256980000).
console.log(new Date(2142256980000)); //Thu Nov 19 2037 15:23:00.

future.setFullYear(2040);
console.log(future); //Converts future to the year 2040.

//Operations with Dates
console.log(`-----Operations with Dates-----`);
const future1 = new Date(2024, 2, 1, 9);
const future2 = new Date(2024, 2, 4, 9);
console.log(future1); //Friday March 1st 09:00 GMT.
console.log(Number(future1)); //1709283600000

const calcDaysPassed = (date1, date2) =>
  ((date2 - date1) / 1000) * 60 * 60 * 24;
const days1 = calcDaysPassed(future1, future2);
