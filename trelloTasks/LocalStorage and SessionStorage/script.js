import { MAX_STORAGE_LIMIT, isStorageAvailable, getStorage, getLocalStorageSize } from './storageHelpers.js';

const defaultState = { theme: 'dark', language: 'en' };
const storage = getStorage(); 

function getStorageItem(key) {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : null;
}

function setStorageItem(key, value) {
    const serializedValue = JSON.stringify(value);
    if (isStorageAvailable() && getLocalStorageSize() + serializedValue.length > MAX_STORAGE_LIMIT) {
        console.warn('Перевищено ліміт сховища, використовується резервне сховище.');
        fallbackStorage[key] = serializedValue;
    } else {
        storage.setItem(key, serializedValue);
    }
}

function initializeSettings() {
    const userSetting = getStorageItem('userSetting') || defaultState;
    setStorageItem('userSetting', userSetting);

    document.body.className = userSetting.theme;
    updateLanguage(userSetting.language);
    document.getElementById('theme-select').value = userSetting.theme;
    document.getElementById('language-select').value = userSetting.language;
}

function toggleTheme() {
    const settings = getStorageItem('userSetting');
    settings.theme = document.getElementById('theme-select').value;
    setStorageItem('userSetting', settings);
    document.body.className = settings.theme;
    showNotification(`Тема змінена на ${settings.theme}`);
}

function toggleLanguage() {
    const settings = getStorageItem('userSetting');
    settings.language = document.getElementById('language-select').value;
    setStorageItem('userSetting', settings);
    updateLanguage(settings.language);
    showNotification(`Мова змінена на ${settings.language === 'en' ? 'English' : 'Українська'}`);
}

function updateLanguage(language) {
    const translations = {
        en: { title: 'App', changeTheme: 'Change Theme', changeLanguage: 'Change Language' },
        uk: { title: 'Додаток', changeTheme: 'Змінити тему', changeLanguage: 'Змінити мову' },
    };

    document.getElementById('app-title').textContent = translations[language].title;
    document.querySelectorAll('label')[0].textContent = translations[language].changeTheme;
    document.querySelectorAll('label')[1].textContent = translations[language].changeLanguage;
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => notification.classList.add('hidden'), 3000);
}

initializeSettings();

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

document.addEventListener('DOMContentLoaded', () => {
	const themeSelect = document.getElementById('theme-select');
	const languageSelect = document.getElementById('language-select');

	themeSelect.addEventListener('change', toggleTheme);
	languageSelect.addEventListener('change', toggleLanguage);
});
