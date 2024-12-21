import { createWallet } from "./wallet.js";

function createCounter() {
	let a = 0;
	return function(){
		a+=1;
		return a;
	}
}

let b = createCounter();

console.log(b());
console.log(b());
console.log(b());


function createButtons() {
  const buttons = [];
  for (let i = 0; i < 3; i++) {
    buttons.push(function () {
      console.log(i);
    });
  }
  return buttons;
}

const btns = createButtons();
btns[0](); 
btns[1](); 
btns[2]();

function createMultiplier(x) {
	return function(y) {
		let result = y*x;
		return result;
	};
};

let test1 = createMultiplier(3);
let test2 = createMultiplier(5);

console.log(test1(3));
console.log(test2(5));

function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers();


const myWallet = createWallet();
myWallet.deposit(100);
myWallet.withdraw(50);
myWallet.getBalance();