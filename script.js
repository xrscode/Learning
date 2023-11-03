"use strict";
console.log("------Object Oriented Programming------");
console.log("Hello World");

//Encapsulation
console.log("-----Encapsulation----");
const dog = {
  name: "Dylan",
  age: 9,
  food: "Butternut Box",

  getDogAge: function () {
    return this.age;
  },

  setDogAge: function (newAge) {
    if (newAge >= 0) {
      this.age = newAge;
    } else {
      console.log("Age can not be negative.");
    }
  },
};

console.log(dog.getDogAge()); //9
console.log(dog.setDogAge(-1)); //Age can not be negative.

//Inheritance
console.log("----Inheritance-----");
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }

  fetch() {
    console.log(`${this.name} fetches a ball.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");

myDog.speak(); // Outputs: "Buddy barks!"
myDog.fetch(); // Outputs: "Buddy fetches a ball."

//Constructor
console.log("----Constructor----");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating a new person object using the constructor
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."

//Class
console.log("-----CLASS-----");
// Define a class called "Person"
class Human {
  // Constructor method to initialize the object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to say hello
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create instances (objects) of the Person class
const personOne = new Human("Alice", 30);
const personTwo = new Human("Bob", 25);

// Use the methods of the objects
personOne.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
personTwo.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."

//Polymorphism
console.log("-----Polymorphism-----");
class MathOperations {
  add(a, b) {
    return a + b;
  }

  // Method overloading based on argument types
  addTwoNumbers(a, b) {
    return this.add(a, b);
  }

  addThreeNumbers(a, b, c) {
    return this.add(a, this.add(b, c));
  }
}

const math = new MathOperations();
console.log(math.addTwoNumbers(2, 3)); // Output: 5
console.log(math.addThreeNumbers(2, 3, 4)); // Output: 9

class Animal1 {
  makeSound() {
    console.log("Some generic animal sound.");
  }
}

class Dog1 extends Animal1 {
  makeSound() {
    console.log("Bark!");
  }
}

class Cat extends Animal1 {
  makeSound() {
    console.log("Meow!");
  }
}

const myDog1 = new Dog1();
const myCat1 = new Cat();

myDog1.makeSound(); // Output: "Bark!"
myCat1.makeSound(); // Output: "Meow!"
