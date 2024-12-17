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





// map()

// let numbers = [2,4,5,6,11,35];

// let double = numbers.map(num => num * num);

// console.log(double);

// let prices = [100, 200, 300, 400];

// let pricesUp = prices.map(price => price * 1.25);
// console.log(pricesUp);

// let prices = [135.7, 249.3, 83.5, 400.8, 199.9];

// let increasedPrices = prices.map(price => Math.round(price * 1.1));

// console.log(increasedPrices);

// // filter()

// let numbers = [2,4,5,6,11,35];

// let evens = numbers.filter(num => (num % 2) === 0);

// console.log(evens);

// let products = [
//   { name: 'Apple', price: 100 },
//   { name: 'Banana', price: 50 },
//   { name: 'Orange', price: 200 },
//   { name: 'Grapes', price: 150 }
// ];

// let cheaperProducts = products.filter(product => product.price < 150);
// console.log(cheaperProducts);



//find()

// let numbers = [2,4,5,6,11,35];

// let first = numbers.find(num => num > 10);

// console.log(first);

// let products = [
//   { name: 'Apple', price: 100 },
//   { name: 'Banana', price: 50 },
//   { name: 'Orange', price: 200 }
// ];

// let cheaperProducts = products.find(product => product.price > 100);
// console.log(cheaperProducts);

// let people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 40 },
//   { name: 'Bob', age: 35 }
// ];

// let firstOlderThan30 = people.find(person => person.age > 30);
// console.log(firstOlderThan30);

// let people = [
//   { name: 'Alice', age: 30, city: 'Los Angeles' },
//   { name: 'Bob', age: 22, city: 'New York' },
//   { name: 'Charlie', age: 27, city: 'New York' },
//   { name: 'David', age: 25, city: 'Chicago' }
// ];

// let pecificPerson = people.find(person => person.age > 25 && person.city === "New York");
// console.log(pecificPerson);



//reduce()
// let numbers = [2,4,5,6,11,35];

// let sum = numbers.reduce((accumulator, num) => {
// 		return accumulator + num;
// }, 0)

// console.log(sum);


// let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// let fruitCount = fruits.reduce((accumulator, fruit) => {
// accumulator[fruit] = (accumulator[fruit] || 0) + 1;
// return accumulator;
// },{})

// console.log(fruitCount);

// let prices = [100, 200, 300, 400];

// let totalPrice = prices.reduce((accumulator, price) => accumulator + price, 0);

// console.log(totalPrice);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfEvens = numbers.reduce((accumulator, num) =>{
if((num % 2) === 0){
	return accumulator + num;
}
return accumulator;
}, 0)
console.log(sumOfEvens);




