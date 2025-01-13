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

function squareSum(numbers){
return numbers.reduce((acc , i) => Math.pow(i, 2) + acc);
}

console.log(squareSum([0, 3, 4, 5]));
