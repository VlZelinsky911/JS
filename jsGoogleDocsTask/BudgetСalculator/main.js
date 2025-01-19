class Entry {
	constructor(amount, category, date, type) {
			this.amount = amount;
			this.category = category;
			this.date = new Date(date);
			this.type = type;
	}
}

function updateBalance() {
	let income = 0;
	let expense = 0;

	entries.forEach(entry => {
			if (entry.type === "income") {
					income += entry.amount;
			} else if (entry.type === "expense") {
					expense += entry.amount;
			}
	});

	const balanceElement = document.getElementById("balance");
	balanceElement.textContent = `Доходи: ${income} | Витрати: ${expense} | Баланс: ${income - expense}`;
}

function updateTable() {
	const tableBody = document.getElementById("entriesTable").querySelector("tbody");
	tableBody.innerHTML = "";

	entries.forEach(entry => {
			const row = document.createElement("tr");
			row.innerHTML = `
					<td>${entry.date.toLocaleDateString()}</td>
					<td>${entry.category}</td>
					<td>${entry.type === "income" ? "Дохід" : "Витрата"}</td>
					<td>${entry.amount}</td>
			`;
			tableBody.appendChild(row);
	});
}


	const amount = parseFloat(document.getElementById("amount").value);
	const category = document.getElementById("category").value;
	const date = document.getElementById("date").value;
	const type = document.getElementById("type").value;

	if (isNaN(amount) || amount <= 0) {
			alert("Введіть коректну відповідь!");
			return;
	}

	const newEntry = new Entry(amount, category, date, type);
	entries.push(newEntry);

	updateTable();
	updateBalance();

	document.getElementById("entryForm").reset();
}

