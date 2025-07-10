/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Bottle {
  constructor(
    // Defines parameters:
    madeOf,
    volume,
    colors,
    brand
  ) {
    // Define properties:
    this.madeOf = madeOf;
    this.volume = volume;
    this.colors = colors;
    this.brand = brand;
  }
  // Add methods like normal functions:
  openBottle(Status) {
    this.Open = Status;
  }
}

export default Bottle;
