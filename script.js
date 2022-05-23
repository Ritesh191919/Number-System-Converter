"use strict";

//used id selectors for input and output values
const inputValue = document.getElementById("input-value");
const outputValue = document.getElementById("output-value");
const convertStatus = document.getElementById("convert-status");

//lets use query selector for buttons
const convertBtn = document.querySelector("#convert-btn");
const resetBtn = document.querySelector("#reset-btn");
const swapBtn = document.querySelector("#swap-btn");

//Lets access "From" && "To" conversion parameters

let fromSelector = document.querySelector("#from-select");
let toSelector = document.querySelector("#to-select");

// Helping variables

//helping functions
function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

// Swap Button Functionality

swapBtn.addEventListener("click", () => {
  const fromArray = [];
  const toArray = [];

  // getting selected items
  for (let i = 0; i < 4; i++) {
    fromArray[i] = fromSelector.options[i].selected;
    toArray[i] = toSelector.options[i].selected;
  }
  // swapping selected items

  fromArray.filter((item, index) => {
    if (item) {
      toSelector.options[index].selected = true;
    }
  });
  toArray.filter((item, index) => {
    if (item) {
      fromSelector.options[index].selected = true;
    }
  });

  // swaping input fields and output field  values
  let val = inputValue.value;
  inputValue.value = outputValue.innerText;
  outputValue.innerText = val;
});

//Reset Button Functionality

resetBtn.addEventListener("click", () => {
  //console.log("satish");
  inputValue.value = "";
  outputValue.innerText = "";
});

//Convert Button Functionality

convertBtn.addEventListener("click", () => {
  const val = inputValue.value;
  // checking if both values are same
  if (fromSelector.value === toSelector.value && inputValue.value) {
    return;
  } else {
    if (fromSelector.value === "Decimal" && toSelector.value === "Binary") {
      outputValue.innerText = parseInt(val).toString(2);
    } else if (
      fromSelector.value === "Decimal" &&
      toSelector.value === "Octal"
    ) {
      outputValue.innerText = parseInt(val).toString(8);
    } else if (
      fromSelector.value === "Decimal" &&
      toSelector.value === "Hexadecimal"
    ) {
      outputValue.innerText = parseInt(val).toString(16);
    } else if (
      fromSelector.value === "Binary" &&
      toSelector.value === "Decimal"
    ) {
      outputValue.innerText = parseInt(val, 2); // converting binary to decimal
    } else if (
      fromSelector.value === "Binary" &&
      toSelector.value === "Octal"
    ) {
      const dec = parseInt(val, 2); // converting binary to Octal
      outputValue.innerText = parseInt(dec).toString(8);
    } else if (
      fromSelector.value === "Binary" &&
      toSelector.value === "Hexadecimal"
    ) {
      const dec = parseInt(val, 2); // converting binary to Hexadecimal
      outputValue.innerText = parseInt(dec).toString(16);
    } else if (
      fromSelector.value === "Octal" &&
      toSelector.value === "Decimal"
    ) {
      outputValue.innerText = parseInt(val, 8);
    } else if (
      fromSelector.value === "Octal" &&
      toSelector.value === "Binary"
    ) {
      const dec = parseInt(val, 8); // converting Octal to decimal
      outputValue.innerText = parseInt(val).toString(2);
    } else if (
      fromSelector.value === "Octal" &&
      toSelector.value === "Hexadecimal"
    ) {
      const dec = parseInt(val, 8); // converting Octal to decimal
      outputValue.innerText = parseInt(val).toString(16);
    } else if (
      fromSelector.value === "Hexadecimal" &&
      toSelector.value === "Decimal"
    ) {
      outputValue.innerText = parseInt(val, 16);
    } else if (
      fromSelector.value === "Hexadecimal" &&
      toSelector.value === "Binary"
    ) {
      const dec = parseInt(val, 16); // converting Hexadecimal to decimal
      outputValue.innerText = parseInt(dec).toString(2);
    } else if (
      fromSelector.value === "Hexadecimal" &&
      toSelector.value === "Octal"
    ) {
      const dec = parseInt(val, 16); // converting Hexadecimal to decimal
      outputValue.innerText = parseInt(dec).toString(8);
    }
  }
});
