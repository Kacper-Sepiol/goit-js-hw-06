"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { password, email },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Nie wszystkie pola zostały uzupełnione!");
    }

    console.log({ email: email.value, Password: password.value });

    event.currentTarget.reset();
});
