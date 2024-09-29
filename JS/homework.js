// Task number : 1

const refs = {
  listCategories: document.querySelector("#categories"),
  allElemOfListCategories: document.querySelectorAll(".item"),
};

const numberOfCategories = `Number of categories : ${refs.listCategories.children.length}`;
console.log(numberOfCategories);

refs.allElemOfListCategories.forEach((elem) => {
  console.log(elem.firstElementChild.textContent);
  console.log(elem.lastElementChild.children.length);
});

// Task number : 2

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];


