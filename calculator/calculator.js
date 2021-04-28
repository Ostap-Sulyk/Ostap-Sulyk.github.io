"use strict";

let onDisplay = document.getElementById("screen");
let currentValue = 0;
let oldValue;
let containsDot = false;

const resetEverything = function () {
  onDisplay.innerHTML = "0";
  currentValue = 0;
  oldValue = 0;
  containsDot = false;
  buttons[0].innerHTML = "AC";
};

const changeSign = (currentVal) => {
  return Number(currentVal) * -1;
};

const percentage = (currentVal) => {
  return Number(currentVal) / 100;
};

let buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("num")) {
      buttons[0].innerHTML = "C";
      if (element.value === "." && !containsDot) {
        onDisplay.innerHTML += element.value;
        containsDot = true;
      } else if (element.value === "." && containsDot) {
      } else if (onDisplay.innerHTML === "0") {
        onDisplay.innerHTML = element.value;
        currentValue = onDisplay.innerHTML;
      } else {
        onDisplay.innerHTML += element.value;
        currentValue = onDisplay.innerHTML;
      }
      // top row
    } else if (element.classList.contains("top-row")) {
      if (element.value === "clear") {
        resetEverything();
      } else if (element.value === "-1") {
        onDisplay.innerHTML = changeSign(currentValue);
        currentValue = onDisplay.innerHTML;
      } else {
        onDisplay.innerHTML = percentage(currentValue);
        currentValue = onDisplay.innerHTML;
      }
    }
  });
});
