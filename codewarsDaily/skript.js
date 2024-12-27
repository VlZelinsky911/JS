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


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


let number1 = [2,1,3,5,6,7,99,77];
console.log(max(number1));
console.log(min(number1));

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatString(n, str){
	return str.repeat(n);
}

function repeatString1(n, s){
	let srt1 ='';
	for(let i =0; i<n; i++){
		srt1+=s;
	}
	return srt1;
}

console.log(repeatString1(3,'HelloWorld '));
console.log(repeatString(3,'HelloWorld '));

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//a can contain numbers or strings. x can be either.

//Return true if the array contains the value, false if not.

function check(a, x){
return a.includes(x);
}

let number2 = [2,1,3,5,6,7,99,77];
console.log(check(number2, 99));


//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
return x.split(' ').join('');
}

console.log(noSpace(' fefe ddddw wwww'));

