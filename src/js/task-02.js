const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredients) => {
    const listItem = document.createElement("li");

    listItem.classList.add("item");

    listItem.textContent = ingredients;

    list.appendChild(listItem);
});

console.log(list);
