"use strict"

const inputValue = document.querySelector('#input-text');
const outputValue = document.querySelector('#output-text');
const buttonConvert = document.querySelector('.convert-btn');
const buttonSwap = document.querySelector('.swap-btn');
const buttonClear = document.querySelector('.clear-btn');
let fromSelector = document.querySelector('#from-selector');
let toSelector = document.querySelector('#to-selector');


buttonSwap.addEventListener('click', () => {

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
    })
    toArray.filter((item, index) => {
        if (item) {
            fromSelector.options[index].selected = true;
        }
    })

    // swaping input fields values
    const val = inputValue.value;
    inputValue.value = outputValue.value;
    outputValue.value = val;
})


// Button clear action 
buttonClear.addEventListener('click', () => {
    inputValue.value = '';
    outputValue.value = '';
})

// Button convert action
buttonConvert.addEventListener('click', () => {
    if (inputValue.value === '') {
        return;
    }
    const val = inputValue.value;
    // checking if both values are same 
    if (fromSelector.value === toSelector.value) {
        outputValue.value = val;
    }
    else {
        if (fromSelector.value === "Decimal" && toSelector.value === "Binary") {
            outputValue.value = parseInt(val).toString(2);
        }
        else if (fromSelector.value === "Decimal" && toSelector.value === "Octal") {
            outputValue.value = parseInt(val).toString(8);
        }
        else if (fromSelector.value === "Decimal" && toSelector.value === "Hexadecimal") {
            outputValue.value = parseInt(val).toString(16);
        }
        else if (fromSelector.value === "Binary" && toSelector.value === "Decimal") {
            outputValue.value = parseInt(val, 2);  // converting binary to decimal
        }
        else if (fromSelector.value === "Binary" && toSelector.value === "Octal") {
            const dec = parseInt(val, 2); // converting binary to decimal
            outputValue.value = parseInt(dec).toString(8);
        }
        else if (fromSelector.value === "Binary" && toSelector.value === "Hexadecimal") {
            const dec = parseInt(val, 2); // converting binary to decimal
            outputValue.value = parseInt(dec).toString(16);
        }
        else if (fromSelector.value === "Octal" && toSelector.value === "Decimal") {
            outputValue.value = parseInt(val, 8);
        }
        else if (fromSelector.value === "Octal" && toSelector.value === "Binary") {
            const dec = parseInt(val, 8); // converting Octal to decimal
            outputValue.value = parseInt(val).toString(2);
        }
        else if (fromSelector.value === "Octal" && toSelector.value === "Hexadecimal") {
            const dec = parseInt(val, 8); // converting Octal to decimal
            outputValue.value = parseInt(val).toString(16);
        }
        else if (fromSelector.value === "Hexadecimal" && toSelector.value === "Decimal") {
            outputValue.value = parseInt(val, 16);
        }
        else if (fromSelector.value === "Hexadecimal" && toSelector.value === "Binary") {
            const dec = parseInt(val, 16); // converting Hexadecimal to decimal
            outputValue.value = parseInt(dec).toString(2);
        }
        else if (fromSelector.value === "Hexadecimal" && toSelector.value === "Octal") {
            const dec = parseInt(val, 16); // converting Hexadecimal to decimal
            outputValue.value = parseInt(dec).toString(8);
        }
    }
});