"use strict";
// // console.log("------Object Oriented Programming------");
// // console.log("Hello World");

// // //Encapsulation
// // console.log("-----Encapsulation----");
// // const dog = {
// //   name: "Dylan",
// //   age: 9,
// //   food: "Butternut Box",

// //   getDogAge: function () {
// //     return this.age;
// //   },

// //   setDogAge: function (newAge) {
// //     if (newAge >= 0) {
// //       this.age = newAge;
// //     } else {
// //       console.log("Age can not be negative.");
// //     }
// //   },
// // };

// // console.log(dog.getDogAge()); //9
// // console.log(dog.setDogAge(-1)); //Age can not be negative.

// // //Inheritance
// // console.log("----Inheritance-----");
// // class Animal {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   speak() {
// //     console.log(`${this.name} makes a sound.`);
// //   }
// // }

// // class Dog extends Animal {
// //   constructor(name, breed) {
// //     super(name); // Call the constructor of the parent class
// //     this.breed = breed;
// //   }

// //   speak() {
// //     console.log(`${this.name} barks!`);
// //   }

// //   fetch() {
// //     console.log(`${this.name} fetches a ball.`);
// //   }
// // }

// // const myDog = new Dog("Buddy", "Golden Retriever");

// // myDog.speak(); // Outputs: "Buddy barks!"
// // myDog.fetch(); // Outputs: "Buddy fetches a ball."

// // //Constructor
// // console.log("----Constructor----");
// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   sayHello() {
// //     console.log(
// //       `Hello, my name is ${this.name} and I am ${this.age} years old.`
// //     );
// //   }
// // }

// // // Creating a new person object using the constructor
// // const person1 = new Person("Alice", 30);
// // const person2 = new Person("Bob", 25);

// // person1.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
// // person2.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."

// // //Class
// // console.log("-----CLASS-----");
// // // Define a class called "Person"
// // class Human {
// //   // Constructor method to initialize the object
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   // Method to say hello
// //   sayHello() {
// //     console.log(
// //       `Hello, my name is ${this.name} and I am ${this.age} years old.`
// //     );
// //   }
// // }

// // // Create instances (objects) of the Person class
// // const personOne = new Human("Alice", 30);
// // const personTwo = new Human("Bob", 25);

// // // Use the methods of the objects
// // personOne.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
// // personTwo.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."

// // //Polymorphism
// // console.log("-----Polymorphism-----");
// // class MathOperations {
// //   add(a, b) {
// //     return a + b;
// //   }

// //   // Method overloading based on argument types
// //   addTwoNumbers(a, b) {
// //     return this.add(a, b);
// //   }

// //   addThreeNumbers(a, b, c) {
// //     return this.add(a, this.add(b, c));
// //   }
// // }

// // const math = new MathOperations();
// // console.log(math.addTwoNumbers(2, 3)); // Output: 5
// // console.log(math.addThreeNumbers(2, 3, 4)); // Output: 9

// // class Animal1 {
// //   makeSound() {
// //     console.log("Some generic animal sound.");
// //   }
// // }

// // class Dog1 extends Animal1 {
// //   makeSound() {
// //     console.log("Bark!");
// //   }
// // }

// // class Cat extends Animal1 {
// //   makeSound() {
// //     console.log("Meow!");
// //   }
// // }

// // const myDog1 = new Dog1();
// // const myCat1 = new Cat();

// // myDog1.makeSound(); // Output: "Bark!"
// // myCat1.makeSound(); // Output: "Meow!"
// const Person = function (firstName, birthYear) {
//   //Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   console.log(this);
// };
// const dylan = new Person("Dylan", 2015);
// //console.log(dylan); // Person {firstName: 'Dylan, birthYear: 2015}
// //1.  New empty object {} is created.
// //2.  The function is called, the this keyword will be set to the new object.
// //3.  {} linked to a prototype.
// //4. Function automatically returns {};
// const matilda = new Person("Matilda", 2017);
// console.log(matilda instanceof Person); //true

// console.log(Person);
// //Prototypes
// console.log("-----Prototypes-----");
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };
// dylan.calcAge(); //8
// console.log(dylan);
// console.log(dylan.__proto__);

// console.log(Person.prototype.isPrototypeOf(dylan)); //Confirms that Person.prototype is the prototype of dylan.

// Person.prototype.species = "Dog";
// console.log(dylan.species); //dog
// console.log(dylan.hasOwnProperty("firstName")); //true
// console.log(dylan.hasOwnProperty("species")); //false
// console.log(dylan);

// const arr = [1, 1, 3, 6, 54, 5, 2334, 54];
// console.log(arr.__proto__);
// console.log(arr.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // console.log(`-----Coding Challenge------`);
// // const car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // car.prototype.accelerate = function () {
// //   this.speed + 10;
// //   console.log(`${this.make} is travelling at ${this.speed} km/h`);
// // };

// // car.prototype.brake = function () {
// //   this.speed - 5;
// //   console.log(`${this.make} is travelling at ${this.speed} km/h`);
// // };

// // const car1 = new car("BMW", 120);
// // const car2 = new car("Mercedes", 95);
// // car1.brake();
// console.log(`-----CLASS------`);
// console.log("Class Expression");
// //const PersonCL = class {};

// console.log(`Class Declaration`);
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //methods added to prototype property
//   calcAge() {
//     const age = 2023 - this.birthYear;
//     console.log(age);
//     return age;
//   }

//   calcNameAge() {
//     //const age = this.calcAge();
//     console.log(`${this.fullName} is currently ${this.calcAge()} years old!`);
//   }
//   //getter
//   get age() {
//     return this.calcAge();
//   }

//   //setter fullname
//   set fullName(name) {
//     name.includes(" ")
//       ? (this._fullName = name)
//       : alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }
// const dylan1 = new PersonCL("Dylan Dog", 2015);
// console.log(dylan1);
// dylan1.calcAge();
// dylan1.calcNameAge();
// console.log(`Professor Dylan is ${dylan1.age} years old.`);

// console.log(dylan1.__proto__ === PersonCL.prototype);

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// dylan1.greet();

// sayHello(); //Hello World (Function Declaration Hoisted)
// function sayHello() {
//   console.log(`Hello world.`);
// }

// // hello(); //Undefined (Function Expression!!! Not hoisted.)
// // const hello = function () {
// //   console.log(`Hello to the world!`);
// // };

// const account = {
//   owner: "dylan",
//   movements: [1, -2, 3, 6, 3, -1],

//   //getter:
//   get latestMovement() {
//     return this.movements.slice(-1).pop();
//   },

//   //setter:
//   set transaction(movement) {
//     return this.movements.push(movement);
//   },
// };

// console.log(account.latestMovement); //-1
// account.transaction = 5;
// console.log(account.latestMovement); //5

// //static method
// console.log(`-----Static Method------`);
// const staticMethod = Array.from(document.querySelectorAll("h1"));
// console.log(staticMethod);
// /**
//  * @param {Array} arr
//  * @param {number} depth
//  * @return {Array}
//  */

//Object.create;
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = "2002";
// steven.calcAge();

//Coding Challenge 2.
/*
console.log(`-----Coding Challenge------`);
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed + 10;
  console.log(`${this.make} is travelling at ${this.speed} km/h`);
};

car.prototype.brake = function () {
  this.speed - 5;
  console.log(`${this.make} is travelling at ${this.speed} km/h`);
};

const car1 = new car("BMW", 120);
const car2 = new car("Mercedes", 95);
car1.brake();
*/
//1. Re-create Challenge 1, but use ES6 class.
//2. Add a getter called 'speedUS' which returns the current speed in mph - divide by 1.6.
//3.  Add a setter called 'speedUS' which sets the current smeed in mph but conrets it to km/h before storing the value, by mlutiplying the input by 1.6.
//4.  Create a new car and experiment wiht the accelerate and brake methods and with the getter and setter.
//Data 1: 'Ford' going 120 km/h

// class carCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new carCL("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return String(x).split("").reverse().join("") === String(x);
};

console.log(isPalindrome(-121));
console.log(isPalindrome(10));
