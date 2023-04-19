//

//Advanced Objects
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
};

goat.makeSound(); // Prints baaa

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(dietType);
  },
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();
// Output: herbivore

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet: () => {
    console.log(this.dietType);
  },
};

goat.diet(); // Prints undefined

const bankAccount = {
  _amount: 1000,
};

bankAccount._amount = 1000000;

const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

// To call the getter method:
person.fullName; // 'John Doe'

const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = "40"; // Logs: You must assign a number to age

person._age = "forty-five";
console.log(person._age); // Prints forty-five

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};

const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");
ghost.scare(); // 'BOO!'

const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const monsterFactory = (name, age) => {
  return {
    name,
    age,
  };
};

const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};

const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'

const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);

console.log(newRobot);
