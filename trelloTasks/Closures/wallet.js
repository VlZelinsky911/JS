export function createWallet() {
	let balance = 0;

	return {

		deposit(amount){
			if(amount > 0){
				balance += balance;
				console.log(`Deposit: +${amount}. New balance: ${balance}`);
			}else{
				console.log("Invalid deposit amount");
			}
		},
		withdraw(amount) {
			if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdraw: -${amount}. New balance: ${balance}`);
		}else if (amount > balance) {
			console.log("Insufficient funds");
		} else {
			console.log("Invalid withdraw amount");
		}
	},

	getBalance() {
		console.log(`Current balance: ${balance}`);
		return balance;
		},
	};
}
