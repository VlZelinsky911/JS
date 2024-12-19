//Створіть асинхронну функцію, яка повертає "Hello, World!" через 1 секунду.

// async function helloWorld() {
// 	return new Promise(resolve => {
// 		setTimeout(() =>{
// 			resolve("Hello, World!");
// 		},1000);
// 	});
// }

//Викличте цю функцію і виведіть результат в консоль.

// async function printHello() {
// 	const result = await helloWorld();
// 	console.log(result);
// }

// printHello()

// Використовуйте try/catch для обробки помилки в асинхронній функції, яка кидає помилку.

// async function printHello() {
// 	try{
// 	const result = await helloWorld();
// 	console.log(result);
// 	}catch (error) {
// 		console.error("An error occurred:", error);
// 	}
// }

// printHello()

// async function getData(){
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve({ id: 1, name: "John Doe", email: "john.doe@example.com" });
// 		},2000);
// 	});
// }

// async function main() {
// 	console.log("Fetching data from server...");
// 	try{
// 		const data = await getData();
// 		console.log("Data received:", data);
// 	}catch(err){
// 		console.error("Failed to fetch data:", err);
// 	}
// }
// main();

async function fetchData() {
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			reject("Data did not load successfully!");
		},2000)
	})
}

async function printConsol() {
	console.log("Fetching data from server...");
	try{
		const result = await fetchData();
		console.log(result);
	}catch(err){
		console.log("An error occurred:", err);
	}
}

printConsol()