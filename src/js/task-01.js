"use strict";

const categories = document.querySelectorAll(".item");
console.log(`Number of categoreis: ${categories.length}`);

categories.forEach((element) => {
    const categoryName = element.querySelector("h2");
    const categoryElement = element.querySelectorAll("li");
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryElement.length}`);
});
