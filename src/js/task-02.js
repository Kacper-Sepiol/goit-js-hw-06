"use strict";

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");
const itemArray = [];

ingredients.forEach((ingredients) => {
    const listItem = document.createElement("li");

    listItem.classList.add("item");

    listItem.textContent = ingredients;

    itemArray.push(listItem);
});
list.append(...itemArray);
