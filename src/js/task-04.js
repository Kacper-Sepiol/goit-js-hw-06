"use strict";

let counterValue = 0;

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const outputDigit = document.querySelector("#value");

btnPlus.addEventListener("click", () => {
    counterValue += 1;
    outputDigit.textContent = counterValue;
});

btnMinus.addEventListener("click", () => {
    counterValue -= 1;
    outputDigit.textContent = counterValue;
});
