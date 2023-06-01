"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { password, login },
    } = event.currentTarget;

    if (login.value === "" || password.value === "") {
        return console.log("Nie wszystkie pola zostały uzupełnione!");
    }

    console.log(`Login: ${login}, Password: ${password.value}`);
    event.currentTarget.reset();
});
