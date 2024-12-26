const defaultState = {
	theme: 'light',        // Тема інтерфейсу
	language: 'en',        // Мова інтерфейсу
	isLoggedIn: false,     // Статус логіна
};

// Ініціалізація стану
if (!localStorage.getItem('userSettings')) {
	localStorage.setItem('userSettings', JSON.stringify(defaultState));
}

// Функція для оновлення стану
function updateState(newState) {
	try {
			const currentState = JSON.parse(localStorage.getItem('userSettings')) || defaultState;
			const updatedState = { ...currentState, ...newState };
			localStorage.setItem('userSettings', JSON.stringify(updatedState));
			console.log('Стан оновлено:', updatedState);
			applySettings(updatedState);
	} catch (error) {
			console.error('Помилка при оновленні стану:', error);
	}
}

// Слухач події `storage` для синхронізації між вкладками
window.addEventListener('storage', (event) => {
	if (event.key === 'userSettings') {
			try {
					const updatedState = JSON.parse(event.newValue);
					console.log('Стан синхронізовано з іншою вкладкою:', updatedState);
					applySettings(updatedState);
			} catch (error) {
					console.error('Помилка при синхронізації стану:', error);
			}
	}
});

// Функція для застосування стану (зміна теми, мови тощо)
function applySettings(state) {
	// Приклад: змінити тему через data-атрибут
	document.body.dataset.theme = state.theme;
	// Відобразити поточну мову
	document.getElementById('currentLanguage').innerText = `Language: ${state.language}`;
	// Відобразити статус логіна
	document.getElementById('currentLoginStatus').innerText = state.isLoggedIn
			? 'Status: Logged In'
			: 'Status: Logged Out';
}

// Встановлюємо початкові налаштування
applySettings(JSON.parse(localStorage.getItem('userSettings')));

// Обробка помилок: перевіряємо квоту LocalStorage
function checkQuota() {
	try {
			localStorage.setItem('quotaTest', 'test');
			localStorage.removeItem('quotaTest');
	} catch (error) {
			if (error.code === 22 || error.name === 'QuotaExceededError') {
					console.error('LocalStorage досяг ліміту квоти!');
			} else {
					console.error('Помилка LocalStorage:', error);
			}
	}
}

// Приклад використання: зміна теми
document.getElementById('changeTheme').addEventListener('click', () => {
	const currentState = JSON.parse(localStorage.getItem('userSettings'));
	const newTheme = currentState.theme === 'light' ? 'dark' : 'light';
	updateState({ theme: newTheme });
});

// Приклад використання: зміна мови
document.getElementById('changeLanguage').addEventListener('click', () => {
	const currentState = JSON.parse(localStorage.getItem('userSettings'));
	const newLanguage = currentState.language === 'en' ? 'uk' : 'en';
	updateState({ language: newLanguage });
});

// Приклад використання: зміна статусу логіна
document.getElementById('toggleLoginStatus').addEventListener('click', () => {
	const currentState = JSON.parse(localStorage.getItem('userSettings'));
	updateState({ isLoggedIn: !currentState.isLoggedIn });
});

// Очищення застарілих даних
function cleanOldData() {
	const keysToKeep = ['userSettings'];
	Object.keys(localStorage).forEach((key) => {
			if (!keysToKeep.includes(key)) {
					localStorage.removeItem(key);
			}
	});
	console.log('Застарілі дані очищено.');
}

// Шифрування даних перед збереженням
function encryptData(data, key = 'secret') {
	return btoa(`${key}:${JSON.stringify(data)}`);
}

// Розшифрування даних
function decryptData(encryptedData, key = 'secret') {
	const decrypted = atob(encryptedData);
	const [storedKey, jsonData] = decrypted.split(':');
	if (storedKey !== key) throw new Error('Невірний ключ шифрування!');
	return JSON.parse(jsonData);
}
