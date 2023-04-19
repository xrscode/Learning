"strict";
const menu = {
  _meal: "",

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
      console.log(`Meal is ${this._meal}`);
    } else {
      console.log("You must type a string.");
    }
  },

  _price: 0,

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
      console.log(`The price is ${this._price}`);
    } else {
      console.log("Number value not recorded.");
    }
  },

  get todaysSpecial() {
    if (typeof this._meal === "string" && typeof this._price === "number") {
      console.log(`Today's Special is ${this._meal}    for ${this._price}!`);
    } else {
      console.log(`Meal or Price was not set correctly!`);
    }
  },
};

menu.meal = "chicken";
menu.price = 12.5;
menu.todaysSpecial;
