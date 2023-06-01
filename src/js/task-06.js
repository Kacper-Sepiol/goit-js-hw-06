"use strict";

const validationInput = document.querySelector("#validation-input");

console.log(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (e) => {
    if (
        e.currentTarget.value.length ===
        parseInt(e.currentTarget.getAttribute("data-length"))
    )
        e.currentTarget.setAttribute("class", "valid");
    else e.currentTarget.setAttribute("class", "invalid");
});
