/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function myFunc() {
  document.querySelector("body main").classList.add("main");
}

myFunc();

const anotherFunc = function () {
  document.querySelector(".main").setAttribute("color", "blue");
};

anotherFunc();

(a, b) => a + b + 100;
