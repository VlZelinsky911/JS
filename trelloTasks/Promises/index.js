//Створіть проміс, який резолвиться через 2 секунди з повідомленням "Promise resolved!".

// const myPromise = new Promise((resolve, reject) =>{
// 	setTimeout(() => {
// 		resolve("Promise resolved!");
// 	},2000)
// });
// //Використовуйте then для виведення повідомлення, коли проміс буде резолвлено.
// myPromise
// 		.then((message) => {
// 			console.log(message);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});

// //Створіть проміс, який відхиляється з помилкою "Promise rejected!" та обробіть цю помилку за допомогою catch.

// const rejectedPromise = new Promise((resolve,reject) =>{
// 		setTimeout(() =>{
// 			reject("Promise rejected!");
// 		})
// },2000)

// rejectedPromise
// 					.then((message) => {
// 						console.log(message);
// 					})
// 					.catch((error) =>{
// 						console.error(error);
// 					});

// additional tasks

// const firstPromise = new Promise((resolve, reject) => {
// 	setTimeout(() =>{
// 		resolve("First promise resolved!");
// 	},3000);
// });

// const seconPromise = new Promise((resolve,reject) =>{
// 	setTimeout(() => {
// 		resolve("Second promise resolved!");
// 	},5000)	
// })

// Promise.all([firstPromise,seconPromise])
// 				.then((message) => {
// 					console.log(message[0]);
// 					console.log(message[1]);
// 					console.log("Both promises resolved!");
// 				})
// 				.catch((err) =>{
// 					console.error("One of the promises failed:",err);
// 				})

// 2 
// const myPromise = new Promise((resolve,reject) =>{
//  	setTimeout(() => {
//  		resolve(10);
//  	},2000)	
//  });
 
// myPromise
// 		.then((message)=>{
// 			const result = message + 5;
// 			console.log(result);
// 			return result;
// 		})
// 		.then((message)=>{
// 			const result = message * 3;
// 			console.log(result);
// 			return result;
// 		})
// 		.then((message)=>{
// 			console.log(`Final result: ${message}`);
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		})

// 3 

const myPromise = new Promise((resolve,reject) =>{
	const randomNumber = Math.random;

	if(randomNumber > 0.5){
		resolve("Promise resolved!");
	}else{
		reject("Promise rejected!");	
	}
});

myPromise
			.then((message) => console.log(message))
			.catch((err) => console.log(err));

