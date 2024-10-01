// Task number : 1
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
// (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const allElemOfListCategories = document.querySelectorAll(".item");
const numberOfCategories = `Number of categories : ${allElemOfListCategories.length}`;
console.log(numberOfCategories);

allElemOfListCategories.forEach((elem) => {
  const headlineOfCategories = elem.querySelector("h2").textContent;
  const elemOfItems = elem.querySelectorAll("li").length;

  console.log(headlineOfCategories);
  console.log(elemOfItems);
});

// Task number : 2
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayElemOfList = ingredients.map((elem) => {
  const elemOfList = document.createElement("li");
  elemOfList.textContent = elem;
  elemOfList.classList.add("item");
  return elemOfList;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...arrayElemOfList);

// Task number : 3
// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const markupImgOfList = images
  .map(
    (elem) =>
      `<li><img class="gallery-elem__img" src="${elem.url} alt"${elem.alt}"></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", markupImgOfList);

// Task number : 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const buttonOfPlusCounter = document.querySelector(
  "#counter button[data-action=increment]"
);
const buttonOfMinusCounter = document.querySelector(
  "#counter button[data-action=decrement]"
);
const spanOfValueCounter = document.querySelector("#counter #value");

buttonOfMinusCounter.addEventListener("click", () => {
  counterValue -= 1;
  spanOfValueCounter.textContent = counterValue;
});

buttonOfPlusCounter.addEventListener("click", () => {
  counterValue += 1;
  spanOfValueCounter.textContent = counterValue;
});

// Task namber : 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameOfOutput = document.querySelector("#name-output");
const nameOfInput = document.querySelector("#name-input");

// option for solving the task : A

// nameOfInput.addEventListener("input", (event) => {
//   nameOfOutput.textContent = event.currentTarget.value;
// });

// option for solving the task : B

// nameOfInput.addEventListener("change", (event) => {
//   if (event.currentTarget.value !== "") {
//     nameOfOutput.textContent = event.currentTarget.value;
//   } else {
//     nameOfOutput.textContent = "Anonymous";
//   }
// });

// Task namber : 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.
//  Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validationOfInput = document.querySelector("#validation-input");

validationOfInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.selectionEnd >= Number(validationOfInput.dataset.length)
  ) {
    validationOfInput.classList.add("valid");
    validationOfInput.classList.remove("invalid");
  } else {
    validationOfInput.classList.add("invalid");
    validationOfInput.classList.remove("valid");
  }
});

// Task namber : 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sizeControl = document.querySelector("#font-size-control");
const spanOfText = document.querySelector("#text");

sizeControl.addEventListener("input", (event) => {
  spanOfText.style.fontSize = Number(event.currentTarget.value) + "px";
});

// Task namber : 8
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Bсе поля должны быть заполнены !!!");
  }
  let user = {};
  user[event.currentTarget.elements.email.name] =
    event.currentTarget.elements.email.value;
  user[event.currentTarget.elements.password.name] =
    event.currentTarget.elements.password.value;
  console.log(user);
  loginForm.reset();
  // console.log(event.currentTarget);
  // console.dir(event.currentTarget);
  // console.log(event.currentTarget.elements.email.name);
  // console.log(event.currentTarget.elements.email.value);
});

// Task nsmber : 9
// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const buttonOfChangeColor = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const bodyOfStyle = document.querySelector("body");

buttonOfChangeColor.addEventListener("click", () => {
  bodyOfStyle.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = bodyOfStyle.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
