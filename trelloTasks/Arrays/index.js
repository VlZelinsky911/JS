//Створіть масив з трьох імен. Додайте нове ім'я до кінця масиву і виведіть його.

let array = ["Vlad","Mykhailo","Andrew"];

array.push("Danya");
console.log(array);

//Видаліть перший елемент масиву і виведіть його.

array.splice(0, 1);
console.log(array);

//Знайдіть індекс елемента зі значенням "John" в масиві ["Mike", "John", "Sara"].

let array2 = ["Mike", "John", "Sara"];

console.log(array2.indexOf("John"));
