/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bottle from "./Bottle.js";

const plasticBottle = new Bottle(
  "plastic",
  "750 ml",
  "white and red",
  "apenta+",
  false
);

console.log("The plastic bottle object:", plasticBottle);
console.log("The volume value:", plasticBottle.volume);

const bottleOfGeri = new Bottle("plastic", "500 ml", "dark grey", "Kik", false);

console.log("Geri's bottle is:", bottleOfGeri);
console.log("Its color is:", bottleOfGeri.colors);
