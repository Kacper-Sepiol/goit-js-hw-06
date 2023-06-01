"use strict";

const inputValue = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

inputValue.addEventListener("input", (event) => {
    outputText.style.fontSize = event.currentTarget.value + "px";
});
