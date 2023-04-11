let spaceship = {}; // spaceship is an empty object

"hello".length; // Returns 5

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

["A", "B", "C"][0]; // Returns 'A'

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};
spaceship["Active Duty"]; // Returns true
spaceship["Fuel Type"]; // Returns  'Turbo Fuel'
spaceship["numCrew"]; // Returns 5
spaceship["!!!!!!!!!!!!!!!"]; // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, "homePlanet"); // Returns 'Earth'

const spaceship = { type: "shuttle" };
spaceship = { type: "alien" }; // TypeError: Assignment to constant variable.
spaceship.type = "alien"; // Changes the value of the type property
spaceship.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  mission: "Explore the universe",
};

delete spaceship.mission; // Removes the mission property

const alienShip = {
  invade: function () {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },
};

const alienShip = {
  invade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();
