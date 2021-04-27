"use strict";

let currentlyDisplayed = document.getElementById("screen");
function add() {
  let num1 = currentlyDisplayed.innerHTML;
}

let buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // checking if pressed number
    if (element.classList.contains("num")) {
      console.log("you pressed number");
      buttons[0].innerHTML = "c";

      // if displayed is 0
      if (currentlyDisplayed.innerHTML === "0") {
        //display number to the screen
        currentlyDisplayed.innerHTML = element.value;
        // else append number to the screen
      } else {
        currentlyDisplayed.innerHTML += element.value;
      }
    } else if (element.value === "+") {
    }
    if (element.value === "clear") {
      currentlyDisplayed.innerHTML = "0";
      buttons[0].innerHTML = "AC";
    }
  });
});

// when + pressed
// save currently displayed to num1
// on nest press button
// function to get number
// function to get operation
// function to get number
// call function corresponding to operation

// evaluate two numbers to one
// function to get another numbers
