//Напишіть функцію, яка приймає два числа і повертає їх суму.

function sum(x,y){
return x + y;
}

console.log(sum(10,20));

//Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.

function toUpper(str){
return str.toUpperCase();
}

console.log(toUpper("Hello world"));

//Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.

function getSquares(array){
let squaresArray =[];
for (let i = 0; i < array.length; i++) {
	squaresArray.push(array[i] ** 2);
	}
	return squaresArray;
}
console.log(getSquares([2,15,77]));
