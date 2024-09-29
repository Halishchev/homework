// old block
// // Task 1

// // console.log("hi world!");
// // function createCounter(number) {
// //   return function counter() {
// //     return (number += 1);
// //   };
// // }
// // const counter = createCounter(5);

// // console.log(counter()); // 13
// // console.log(counter()); // 13
// // console.log(counter()); // 13
// // console.log(counter()); // 13

// // const test1 = test(10);
// // console.log(test1);

// // function createCounter(number) {
// //   let currentNumber = 0;
// //   currentNumber = number;
// //   console.log(currentNumber);
// //   return currentNumber;
// // }

// // const counter = createCounter();

// // function createCounter(number) {
// //   function counter() {
// //     let currentNumber = number;
// //     currentNumber += 1;
// //     console.log(currentNumber);
// //     return currentNumber;
// //   }
// //   return ;
// // }

// // const counter1 = createCounter(10);
// // // 11
// // console.log(counter1);
// // counter1();
// // counter1();
// // counter1();
// // counter1();

// // function counter() {
// //   let currentNumber = 0;
// //   currentNumber += 1;
// //   console.log(currentNumber);
// //   return currentNumber;
// // }
// // counter();
// // counter();
// // counter();
// // counter();
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     // console.log(pizzaName);
//     // pizzaName = smoked smoked smoked
//     // this.pizza[i] = ultracheese smoked four meats
//     // i = 0 1 2
//     // value = false true true
//     let value = false;
//     for (let i = 0; i < this.pizzas.length; i++) {
//       // console.log(this.pizzas[i]);

//       if (pizzaName === this.pizzas[i]) {
//         value = true;
//       }
//     }
//     if (value) {
//       console.log(makePizza(pizzaName));
//     } else {
//       console.log(onOrderError(pizzaName));
//     }
//     // return this.pizzas.includes(pizzaName)
//     //   ? makePizza(pizzaName)
//     //   : onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// Task 1

// Использование .map: Создайте функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент увеличен на 2.
// const numbers1 = [2, 3, 4, 5, 6, 7];

// function performance(array) {
//   const newArray = array.map((number) => {
//     return number + 2;
//   });
//   return newArray;
// }

// console.log(performance(numbers1));

//  cпросить разницу ??? +
// const numbers = [2, 3, 4, 5, 6, 7];

// function performance(array) {
//   const newArray = array.map((number) => number + 2);

//   return newArray;
// }

// console.log(performance(numbers));

// Task 2
// Использование .includes: Напишите функцию, которая проверяет, содержит ли массив определенное значение. Если да, верните true, иначе false.

// function inStock(array, hasElem) {
//   const hasArray = array.includes(hasElem);
//   console.log(hasArray);
//   return hasArray;
// }

// inStock(numbers, 2);

// Task 3
// Использование .filter и колбека:Напишите функцию, которая фильтрует массив строк на основе длины слов. Функция должна принимать
// массив строк и возвращать новый массив только с теми словами, длина которых больше определенного значения.

// const stringArray = [
//   "English",
//   "feature",
//   "useful",
//   "learning",
//   "and",
//   "to",
//   "help",
// ];

// function lengthString(array, length) {
//   const newArray = array.filter((word) => word.length > length);
//   console.log(newArray);
// }

// lengthString(stringArray, 4);

// Task 4
// Замыкание:
// Создайте функцию, которая генерирует последовательные ID. Функция createIDGenerator должна возвращать другую функцию,
// которая при каждом вызове будет возвращать новый уникальный ID (например, id1, id2, и так далее).

// function createIDGenerator(firstId) {
//   return function () {
//     return `id ${(firstId += 1)}`;
//   };
// }

// const test = createIDGenerator(0);
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());

// Использование .map:
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором все строки написаны заглавными буквами.

// function uperCase(array) {
//   const newArray = array.map((word) => word[0].toUpperCase() + word.slice(1));
//   return newArray;
// }

// console.log(uperCase(stringArray));

// Использование .map и .filter:
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа, увеличенные на 10.

// function bustNumbers(array) {
//   const newArray = array.filter((number) => number % 2 === 0);
//   const bustNewArray = newArray.map((number) => number + 10);
//   return bustNewArray;
// }

// console.log(bustNumbers(numbers));

// Создайте функцию, которая принимает массив объектов (например, людей)
//  и возвращает массив объектов только с определенным свойством (например, возрастом) выше заданного значения.
//

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// new block
// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice <= customerCredits) {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   } else {
//     message = `Insufficient funds!`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(5000, 10, 8000));

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("starter"));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }
//   // Change code above this line
//   return message;
// }

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("China"));

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(lastElement);

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits[fruits.length - 1]);

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits.length);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   // Change code below this line

//   const array = string.split(" ");
//   let word = "";
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > word.length) {
//       word = array[i];
//     }
//   }
//   return word;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// function filterArray(numbers, value) {
//   // Change code below this line
//   let array = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }

//   return array;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }

//   return array;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const ord of order) {
//     total += ord;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function includes(array, value) {
//   // Change code below this line
//   for (const number of array) {
//     if (number === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.Quantity += 1;
//         return;
//       }
//     }

//     const NewProduct = {
//       ...product,
//       Quantity: 1,
//     };

//     this.items.push(NewProduct);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     for (const item of this.items) {
//       totalPrice += item.price * item.Quantity;
//     }
//     return totalPrice;
//   },

//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.Quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.Quantity -= 1;
//       }
//     }
//   },
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 70 });
// cart.add({ name: "melon", price: 110 });
// cart.add({ name: "melon", price: 110 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 70 });
// console.table(cart.getItems());
// cart.remove("lemon");
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());
// cart.increaseQuantity("apple");
// cart.increaseQuantity("lemon");
// cart.decreaseQuantity("melon");
// console.table(cart.getItems());
// const playList = {
//   name: "King of the light",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   stats: {
//     likes: 777,
//     views: 555,
//   },
// };

// const { name, rating: stars, tracks, author = "anonymous", stats } = playList;

// console.log(playList, stars, name, author);
// console.log(stats);

// const { likes, views } = stats;
// console.log(likes, views);

//   /\    /\
//  /  \  /  \
//   ||    ||
// const {
//   name,
//   rating: stars,
//   tracks,
//   author = "anonymous",
//   stats: { likes, views },
// } = playList;

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag, numberOfTags);

// function countProps(object) {
//   // Change code below this line
//   const objectKeys = Object.keys(object);
//   const propCount = objectKeys.length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const objectValue = Object.values(salaries);
//   for (const value of objectValue) {
//     totalSalary += value;
//   }

//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let array = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       array.push(product[propName]);
//     }
//   }
//   return array;
//   // Change code above this line
// }

// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("quantity"));

// function add(...args) {
//   const result = args.reduce((totalSum, elem) => {
//     return totalSum + elem;
//   });
//   return result;
//   // Change code above this line
// }

// console.log(add(15, 27));

// function add(...args) {
//   let totalSum = 0;
//   for (const sum of args) {
//     console.log(sum);
//     totalSum += sum;
//   }
//   return totalSum;
//   // Change code above this line
// }

// console.log(add(15, 27));

// const fun = function (){
//   return undefined
// };

// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));

// function findDuplication(firstNumber, secondNumber) {
//   if (firstNumber === secondNumber) {
//   }
//   return;
// }

// const findDuplication = (a, b) => a === b;
// console.log(findDuplication(3, 2));

// const findNumberInArray = (array, number) => {
//   for (const elem of array) {
//     if (elem === number) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(findNumberInArray([1, 2, 3, 4, 5], 8));

// const findNumberInArray = (array, number) => {
//   let result = false;
//   for (const elem of array) {
//     result = findDuplication(number, elem);
//     if (result) {
//       break;
//     }
//   }
//   return result;
// };
// console.log(findNumberInArray([1, 2, 3, 4, 5], 3));

// function findMatches(array, ...otherArgs) {
//   const matches = []; // Don't change this line
//   for (const number of otherArgs) {
//     if (findNumberInArray(array, number)) {
//       matches.push(number);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// function findMatches(array, ...otherArgs) {
//   // Change code above this line
//   return otherArgs.reduce((acc, prev) => {
//     const isInside = array.find((item) => item === prev);
//     if (isInside) {
//       acc.push(prev);
//     }
//     return acc;
//   }, []);
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// function findMatches(array, ...otherArgs) {
//   const matches = []; // Don't change this line

//   for (const num of array) {
//     for (const otherNum of otherArgs) {
//       if (otherNum === num) {
//         matches.push(num);
//       }
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const findIndex = this.potions.indexOf(potionName);
//     this.potions.splice(findIndex, 1);

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionsNames = [];
//     for (const potion of this.potions) {
//       potionsNames.push(potion.name);
//     }

//     if (potionsNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         console.log(this.potions[i]);
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Skin", price: 240 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("qwe"));
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions());

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", (pizzaName) =>
//   console.log(`Eating pizza ${pizzaName}`)
// );
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((number) => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//   });
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genr, index, array) => array.indexOf(genr) === index
// );
// console.log(uniqueGenres);
// console.log(allGenres);

// const getFriends = (users) => {
//   const arrayFriends = users.flatMap((user) => user.friends);
//   return arrayFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
// };
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (totalTime, player) => (totalTime += player.playtime / player.gamesPlayed),
//   0
// );
// console.log(totalAveragePlaytimePerGame);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // remove
// const items = ["lorem", "gorem", "torem", "forel"];
// removeItem = (array, itemToRemove) => {
//   array = array.filter((item) => item !== itemToRemove);
// };

// class Car {
//   static logInfo = function (car) {
//     console.log(car.model);
//     console.log(car.brend);
//   };

//   #privateTest = "test";

//   constructor({ brend, model, price } = {}) {
//     this.brend = brend;
//     this._model = model;
//     this.price = price;
//   }

//   lookThis = function () {
//     console.log(this);
//     console.log(this.#privateTest);
//   };

//   changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
//   get model() {
//     return this._model;
//   }
// }

// const carNumberOne = new Car({
//   brend: "audi",
//   model: "q8",
//   price: 23000,
// });
// const carNumberTwo = new Car({
//   brend: "bmw",
//   model: "m4",
//   price: 30000,
// });

// console.log(Car);
// console.log(carNumberOne);
// console.log(carNumberTwo);
// carNumberOne.changePrice(25000);
// carNumberOne.lookThis();
// Car.logInfo(carNumberOne);
// console.log(carNumberTwo.model);

// class Moto extends Car {
//   constructor({ spead, ...restProps } = {}) {
//     super(restProps);
//     this.maxSpead = spead;
//   }
// }

// const motoNumberOne = new Moto({
//   brend: "suzuki",
//   model: "viper",
//   price: 15000,
//   spead: 370,
// });
// console.log(motoNumberOne);
