let defaultState = {
	theme: 'dark',
	language: 'en'
};

if (!localStorage.getItem('userSetting')) {
	localStorage.setItem('userSetting', JSON.stringify(defaultState));
} else {
	let userSetting = JSON.parse(localStorage.getItem('userSetting'));
	console.log('Завантажено налаштування:', userSetting);

	document.body.className = userSetting.theme;
	updateLanguage(userSetting.language);
	document.getElementById('theme-select').value = userSetting.theme;
	document.getElementById('language-select').value = userSetting.language;
}

window.addEventListener('storage', function(event) {
	if (event.key === 'userSetting') {
			let updatedUserSetting = JSON.parse(event.newValue);
			console.log('Оновлені налаштування:', updatedUserSetting);

			document.body.className = updatedUserSetting.theme;
			updateLanguage(updatedUserSetting.language);
			document.getElementById('theme-select').value = updatedUserSetting.theme;
			document.getElementById('language-select').value = updatedUserSetting.language;
			showNotification(`Тема змінена на ${updatedUserSetting.theme === 'dark' ? 'темну' : 'світлу'} мовою ${updatedUserSetting.language === 'en' ? 'English' : 'Українська'}`);
	}
});

function toggleTheme() {
	let newTheme = document.getElementById('theme-select').value;
	
	let settings = JSON.parse(localStorage.getItem('userSetting'));
	settings.theme = newTheme;
	localStorage.setItem('userSetting', JSON.stringify(settings));
	
	document.body.className = newTheme;
	showNotification(`Тема змінена на ${newTheme}`);
}

function toggleLanguage() {
	let newLanguage = document.getElementById('language-select').value;
	
	let settings = JSON.parse(localStorage.getItem('userSetting'));
	settings.language = newLanguage;
	localStorage.setItem('userSetting', JSON.stringify(settings));
	
	updateLanguage(newLanguage);
	showNotification(`Мова змінена на ${newLanguage === 'en' ? 'English' : 'Українська'}`);
}

function updateLanguage(language) {
	const translations = {
			en: {
					title: 'App',
					changeTheme: 'Change Theme',
					changeLanguage: 'Change Language'
			},
			uk: {
					title: 'Додаток',
					changeTheme: 'Змінити тему',
					changeLanguage: 'Змінити мову'
			}
	};

	document.getElementById('app-title').textContent = translations[language].title;
	document.querySelectorAll('label')[0].textContent = translations[language].changeTheme;
	document.querySelectorAll('label')[1].textContent = translations[language].changeLanguage;

}

function showNotification(message) {
	const notification = document.getElementById('notification');
	notification.textContent = message;
	notification.classList.remove('hidden');
	setTimeout(() => {
			notification.classList.add('hidden');
	}, 3000);
}
