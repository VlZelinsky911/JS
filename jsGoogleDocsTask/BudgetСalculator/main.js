class Entry {
	constructor(amount, category, date, type) {
		this.amount = amount;
		this.category =category;
		this.date = new Date(date);
		this.type = type;
	}
}

const entries = [];

function updateBalance() {
	let income = 0;
	let expense = 0;

	entries.forEach(entry => {
		if(entry.type === "income"){
			income += entry.amount;
		}else if(entry.type === "expense"){
			expense += entry.amount;
		}
	});
	const balanceElement = document.getElementById("balance");
	balanceElement.textContent = `Доходи: ${income} | Витрати: ${expense} | Баланс: ${income - expense}`
}

function updateTable(){
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

function runTests() {
	// Очищення масиву записів для тестів
	entries.length = 0;

	// Тест 1: Додавання доходу
	addEntryToTest(5000, "Зарплата", "2025-01-15", "income");
	addEntryToTest(2000, "Фріланс", "2025-01-16", "income");

	// Тест 2: Додавання витрат
	addEntryToTest(1500, "Продукти", "2025-01-17", "expense");
	addEntryToTest(300, "Транспорт", "2025-01-17", "expense");

	// Тест 3: Перевірка коректності балансу
	const { income, expense, balance } = calculateBalanceForTest();
	if (income === 7000 && expense === 1800 && balance === 5200) {
			console.log("Тест 3: Розрахунок балансу успішний!");
	} else {
			console.error("Тест 3: Помилка в розрахунку балансу!", { income, expense, balance });
	}

	// Тест 4: Валідація записів
	const invalidTests = [
			{ amount: -1000, category: "Неправильна сума", date: "2025-01-18", type: "income" },
			{ amount: 1000, category: "", date: "2025-01-18", type: "expense" },
			{ amount: 1000, category: "Неправильна дата", date: "wrong-date", type: "income" },
			{ amount: 1000, category: "Неправильний тип", date: "2025-01-18", type: "unknown" }
	];

	invalidTests.forEach((test, index) => {
			if (!validateEntry(test.amount, test.category, test.date, test.type)) {
					console.log(`Тест 4.${index + 1}: Валідація успішно виявила помилку.`);
			} else {
					console.error(`Тест 4.${index + 1}: Помилка валідації!`);
			}
	});

	console.log("Тестування завершено!");
}

// Функція для додавання запису без валідації (для тестів)
function addEntryToTest(amount, category, date, type) {
	const newEntry = new Entry(amount, category, date, type);
	entries.push(newEntry);
}

// Функція для розрахунку балансу (без виводу на екран, для тестів)
function calculateBalanceForTest() {
	let income = 0;
	let expense = 0;

	entries.forEach(entry => {
			if (entry.type === "income") {
					income += entry.amount;
			} else if (entry.type === "expense") {
					expense += entry.amount;
			}
	});

	return {
			income,
			expense,
			balance: income - expense
	};
}


function addEntry(event){
	event.preventDefault();

	const amount = parseFloat(document.getElementById("amount").value);
	const category = document.getElementById("category").value;
	const date = document.getElementById("date").value;
	const type = document.getElementById("type").value;

	if(isNaN(amount) || amount <= 0){
		alert("Введіть коректну відповідь!");
		return;
	}

	const newEntry = new Entry(amount, category , date, type);
	entries.push(newEntry);

	updateTable();
	updateBalance();

	document.getElementById("entryForm").reset();
}

document.getElementById("entryForm").addEventListener("submit", addEntry);
