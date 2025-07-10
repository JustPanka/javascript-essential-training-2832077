/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const waterBottle = {
  madeOf: "plastic",
  colors: "white, red",
  brand: "apenta+",
  volume: "750 ml",
};

const napkin = {
  madeOf: "paper",
  colors: "black, white, pink, yellow",
  form: "cow",
};

const bookshelf = {
  madeOf: "wood",
  colors: "brown",
  shelfNum: "8",
  contains: {
    type: "novels, dictionaries, plant, puzzles, gifts",
    genres: "romantic, fantasy, crime",
  },
};

console.log("The water bottle object:", waterBottle);
console.log("The napkin is made of:", napkin.madeOf);
console.log("The bookshelf contains:", bookshelf["contains"]);
