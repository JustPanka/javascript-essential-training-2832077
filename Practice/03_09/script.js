/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  setName(newName) {
    this.name = newName;
  },
  setVolume(newVolume) {
    this.volume = newVolume;
  },
  setColor(newColor) {
    this.color = newColor;
  },
  setPocketNum(newPocketNum) {
    this.pocketNum = newPocketNum;
  },
  setStrapLength(newLeft, newRight) {
    this.left = newLeft;
    this.right = newRight;
  },
  setToggleLid(newToggleLid) {
    this.toggleLid = newToggleLid;
  },
  setNewStrapLength(newLeft, newRight) {
    this.setStrapLength.left = newLeft;
    this.setStrapLength.right = newRight;
  },
};

backpack.setToggleLid(() => {
  console.log("new togglelid function");
});
