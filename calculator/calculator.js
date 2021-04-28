"use strict";

let onDisplay = document.getElementById("screen");

let currentValue = 0;
let oldValue;
let containsDot = false;

let buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // if input is number
    if (element.classList.contains("num")) {
      // if input is . and currentValue === 0 and containsDot === false
    } else if (element.classList.contains("operations")) {
    } else {
    }
  });
});

// if input is operation
// call reset function
// get input for operation
// if input is operation again update operation
// else if input is number
// get input for number

// if input is top-row
// if input is AC button
// call reset function
// else if input is +/-
// multiply currentValue by -1
// update screen
// else
// divide currentValue by 100
// update screen

// TODO: create reset function
// set oldValue to currentValue
// set newValue to 0
// set containsDot to false
// update display

// TODO: create function to get input for number
// TODO: create function to get input for operation
// TODO: create function to get perform calculation

// TODO: create main function

// if displayed 0
// if containsDot
