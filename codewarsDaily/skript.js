//Given a non-empty array of numbers, for example [1, 2, 3, 4, 5].
// You need to create a function that returns the result of multiplying all the numbers in this array.

//Example
//For the array [1, 2, 3, 4, 5], the function should return 1 * 2 * 3 * 4 * 5 = 120.

// function multiplyArray(array){
// 	return array.reduce((acc, i) => acc * i ,1);
// }

// let number = [1,2,3,5,6,7];
// console.log(multiplyArray(number));

//Your task is to make two functions ( max and min, or maximum and minimum, etc.,
// depending on the language ) that receive a list of integers as input,
// and return the largest and lowest number in that list, respectively. Each function returns one number.

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// let number1 = [2,1,3,5,6,7,99,77];
// console.log(max(number1));
// console.log(min(number1));

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatString(n, str){
// 	return str.repeat(n);
// }

// function repeatString1(n, s){
// 	let srt1 ='';
// 	for(let i =0; i<n; i++){
// 		srt1+=s;
// 	}
// 	return srt1;
// }

// console.log(repeatString1(3,'HelloWorld '));
// console.log(repeatString(3,'HelloWorld '));

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//a can contain numbers or strings. x can be either.

//Return true if the array contains the value, false if not.

// function check(a, x){
// return a.includes(x);
// }

// let number2 = [2,1,3,5,6,7,99,77];
// console.log(check(number2, 99));

//Write a function that removes the spaces from the string, then return the resultant string.

// function noSpace(x) {
// return x.split(' ').join('');
// }

// console.log(noSpace(' fefe ddddw wwww'));

//In this little assignment you are given a string of space separated numbers,
//and have to return the highest and lowest number.

// function highAndLow(numbers){
// let char = numbers.split(' ').map(Number);
// const min = Math.min(...char);
// const max = Math.max(...char);
// return `${max} ${min}`;
// }

// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 12 223 14 15"));
// console.log(highAndLow("1 211 31 412 5"));

//You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   return arr.reduce((acc, i) => {
//     if (i > 0) {
//       acc += i;
//     }
//     return acc;
//   }, 0);
// }
// console.log(positiveSum([1,-2,3,4,5]));

// Дано масив цілих чисел у вигляді рядків і чисел, повернути суму значень масиву так, ніби всі були числами.
// Поверніть свою відповідь у вигляді числа.

// function sumMix(x){
// 	return x.map(Number).reduce((acc, i) => acc + i);
// }
// console.log(sumMix([9, 3, '7', '3']));
// console.log(sumMix([9, 13, '7', '32']));

// У цій ката йдеться про множення даного числа на вісім, якщо воно парне, і на дев’ять у протилежному випадку.

// function simpleMultiplication(number) {
// 	return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(3));
// console.log(simpleMultiplication(5));

//Дано невід’ємне ціле число, 3наприклад, поверніть рядок із шумом: "1 sheep...2 sheep...3 sheep...".
//Введення завжди буде дійсним, тобто жодних від’ємних цілих чисел.

// var countSheep = function (num){
//   let res = '';
//   for (let i = 1; i <= num; i++) {
//     res += `${i} sheep...`;
//   }
//   return res;
// }

// console.log(countSheep(-3));
// console.log(countSheep(6));

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers){
// return numbers.reduce((acc , i) => Math.pow(i, 2) + acc);
// }

// console.log(squareSum([0, 3, 4, 5]));

//Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

// function countBy(x, n) {
//   let z = [];
// 	for(let i = 0; i < n; i++){
// 		z.push(x * (i + 1));
// 	}
//   return z;
// }

// console.log(countBy(1,10));
// console.log(countBy(2,5));

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// function addBinary(a, b){
// let sum = a + b;
// return sum.toString(2);
// }

// console.log(addBinary(1,1));
// console.log(addBinary(5,9));
// console.log(addBinary(11,11));

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!';
//   }
//   if (
//     (p1 === 'scissors' && p2 === 'paper') ||
//     (p1 === 'paper' && p2 === 'rock') ||
//     (p1 === 'rock' && p2 === 'scissors')
//   ) {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };

// console.log(rps('rock', 'scissors'));
// console.log(rps('scissors', 'paper'));
// console.log(rps('paper', 'rock'));

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2

// const binaryArrayToNumber = arr => {
// 	return parseInt(arr.join(''),2);
// };
// console.log(binaryArrayToNumber([1, 1, 1, 1]));

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5

// function makeNegative(num) {
// 	if(num === 0 || num < 0){
// 		return num;
// 	}else{
// 	return -num;
// 	}
// }
// console.log(makeNegative(23));
// console.log(makeNegative(0));
// console.log(makeNegative(-23));

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

// function findNeedle(haystack) {
// 	let needleIndex = haystack.indexOf('needle');

// 	return `found the needle at position ${needleIndex}`;
// }
// console.log(
// findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));
// console.log(
//  findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));
// console.log(
//  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
// console.log(
//  findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// function findAverage(array) {
// if(array.length === 0){
// 	return 0
// }else{
// 	let sum = array.reduce((acc, index) => acc + index,0);
// 	return Math.ceil(sum / array.length);
// 	}
// }

//  console.log(findAverage([23,44,1]));
//  console.log(findAverage([]));

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str){
// str = str.toLowerCase();
// let arr = new Set();

// for(let char of str){
// 	if(arr.has(char)){
// 		return false;
// 	}
// 	arr.add(char);
// }
// return true;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("Dermatoglyphicss"));

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// function friend(friends){
// return friends.filter(name => name.length <= 4);
// }

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// function sumArray(arr) {
//   if (arr.length === 0 || arr.length < 2) {
//     return 0;
//   }
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   return arr
// 	.filter(num => num !== max && num !== min)
// 	.reduce((acc, num) => acc = num);
// };

// console.log(sumArray([6, 2, 1, 8, 10])); // 16 (2 + 6 + 8)



// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
// if(flower1 % 2!== flower2 % 2){
// 	return true;
// }else{
// 	return false;
// 	}
// }

// console.log(lovefunc(7,8));
// console.log(lovefunc(7,7));
// console.log(lovefunc(17,8));


// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// function otherAngle(a, b) {
//   const totalAngle = 180;
//   const thirdAngle  = totalAngle - a - b;
//   return thirdAngle;
// }



// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// function numberToString(num) {
//   return num.toString();
// }


// In this kata you will create a function 
// that takes a list of non-negative integers and strings and returns 
// a new list with the strings filtered out.

// function filter_list(l) {
// let numArr = [];
// l.forEach(element => {
// 	if(typeof element === "number"){
// 		numArr.push(element);
// 	}
// });
// return numArr;
// }

// console.log(filter_list([1,4,5,"List","1","2"]));


// Ви живете в місті Картезія, де всі дороги викладені в ідеальну сітку. Ви прийшли на десять хвилин раніше, тому вирішили скористатися можливістю, щоб піти на коротку прогулянку. Місто надає своїм громадянам програму для створення прогулянок на їхніх телефонах — щоразу, коли ви натискаєте кнопку, вона надсилає вам рядок із однієї літери, що представляють маршрути прогулянки (наприклад, ['n', 's', 'w', 'е']). Ви завжди проходите лише один квартал для кожної літери (напрямку), і ви знаєте, що вам знадобиться одна хвилина, щоб подолати один квартал міста, тому створіть функцію, яка повертатиме значення true, якщо прогулянка, яку вам надає програма, займе у вас рівно десять хвилин (ви не хочу ні рано, ні пізно!) і, звичайно, поверне вас до вихідної точки. В іншому випадку поверніть false .

// Примітка : ви завжди отримуватимете дійсний масив, що містить випадковий набір літер напрямків (лише «n», «s», «e» або «w»). Це ніколи не дасть вам порожній масив (це не прогулянка, це стояння!).

// function isValidWalk(walk) {
//  if(walk.length === 0){
// 	return;
//  }
//  if(walk.length !== 10){
// 	return false;
//  }
//  let x = 0;
//  let y = 0;
//  for(let i = 0; i < walk.length; i++){
// 	switch(walk[i]){
// 		case "n": y++; break;
// 		case"s" : y--; break;
// 		case"e" : x++; break;
// 		case"w" : x--; break;
// 	}
//  }
//  return x === 0 && y === 0;
// }

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));



// Цього разу ні історії, ні теорії. Наведені нижче приклади показують, як написати функцію accum:

// приклади:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum — це рядок, який містить лише літери з a..zі A..Z.

// function accum(s) {
// return s
// 							.split("")
// 							.map((char, index) => {
// 								const capitalizedChar = char.toUpperCase();
// 								const repeatedChars = char.toLocaleLowerCase().repeat(index);
// 								return capitalizedChar + repeatedChars;
// 							})
// 							.join("-")
// }

// console.log(accum("abcd"));



// Write a function that takes an array of numbers and returns the sum of all even numbers in that array.

// function sumEvenNumbers(arr) {
//   return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));



// Write a function that takes two words and checks whether they are anagrams 
// (that is, made up of the same characters in any order).

// function isAnagram(word1, word2) {
//   const normalize = str => str.toLowerCase().split('').sort().join('');
//   return normalize(word1) === normalize(word2);
// }

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world")); 


// Write a function that takes a sentence (a string) and returns a sentence where each word begins with an uppercase letter and all other letters are lowercase.

// function capitalizeSentence(sentence) {
//   return sentence
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

// console.log(capitalizeSentence("прИвіт як сПРАви?"));


// Write a function that accepts a string (sentence) and returns the length of the shortest word.

// function findShortestWordLength(sentence) {
//   return sentence.split(' ').reduce((shortest, word) => {
//     return Math.min(shortest, word.length);
//   }, Infinity);
// }


// console.log(findShortestWordLength("Напиши щось цікаве та корисне"));



// Write a function that checks whether a string is a palindrome (reads the same on both sides).

// function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
//   return cleaned === cleaned.split('').reverse().join('');
// }




// Write a function that sorts an array of numbers by the sum of their digits.
// If the amounts are the same, keep the original order.

// function sortByDigitSum(arr) {
//   const digitSum = num => String(num).split('').reduce((sum, digit) => sum + +digit, 0);
//   return arr.slice().sort((a, b) => {
//     const sumA = digitSum(a);
//     const sumB = digitSum(b);
//     return sumA === sumB ? 0 : sumA - sumB;
//   });
// }


// Write a function that counts how many vowels (a, e, i, o, u) there are in a given string.

// function countVowels(str) {
//   const vowels = "aeiou";
//   return str
//     .toLowerCase()
//     .split("")
//     .filter(char => vowels.includes(char)).length;
// }



// Write a function that accepts an array of numbers and returns a new array where the numbers are in reverse order.

// function reverseArray(arr) {
//   return arr.slice().reverse();
// }


// Write a function that checks whether all numbers in an array are positive.

// function allPositive(arr) {
//   return arr.every(num => num > 0);
// }


// Write a function that calculates the average value of the numbers in the array.

// function calculateAverage(arr) {
//   if (arr.length === 0) return 0;
//   return arr.reduce((sum, num) => sum + num, 0) / arr.length;
// }

// console.log(calculateAverage([1, 2, 3, 4]));



// Write a function that calculates the factorial of the number n (n!).

// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }


