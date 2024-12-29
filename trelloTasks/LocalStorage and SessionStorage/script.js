// Привіт я додав коментарі щоб було зрозуміло що робить конкрента функція
const MAX_STORAGE_LIMIT = 5 * 1024 * 1024; 

const defaultState = {
    theme: 'dark',
    language: 'en'
};

let fallbackStorage = {};

// Перевірка доступності localStorage або sessionStorage
function isStorageAvailable(storageType) {
    try {
        const storage = window[storageType];
        const testKey = '__storage_test__';
        storage.setItem(testKey, 'test');
        storage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

// Безпечне отримання даних
function getStorageItem(key) {
    if (isStorageAvailable('localStorage')) {
        return localStorage.getItem(key);
    } else {
        console.warn('localStorage недоступний, читаємо з резервного сховища.');
        return fallbackStorage[key] || null;
    }
}

// Безпечне збереження даних
function setStorageItem(key, value) {
    const serializedValue = JSON.stringify(value);

    if (isStorageAvailable('localStorage')) {
        const newItemSize = key.length + serializedValue.length;
        if (getLocalStorageSize() + newItemSize > MAX_STORAGE_LIMIT) {
            console.warn('Перевищено ліміт сховища! Використовується резервне сховище.');
            fallbackStorage[key] = serializedValue;
        } else {
            localStorage.setItem(key, serializedValue);
        }
    } else {
        console.warn('localStorage недоступний, використовується резервне сховище.');
        fallbackStorage[key] = serializedValue;
    }
}

// Видалення даних
function removeStorageItem(key) {
    if (isStorageAvailable('localStorage')) {
        localStorage.removeItem(key);
    } else {
        console.warn('localStorage недоступний, видалення з резервного сховища.');
        delete fallbackStorage[key];
    }
}

// Отримання розміру localStorage
function getLocalStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let value = localStorage[key];
            total += key.length + value.length; 
        }
    }
    return total; // Розмір у байтах
}

// Ініціалізація налаштувань при завантаженні сторінки
function initializeSettings() {
    let userSetting = getStorageItem('userSetting');
    if (!userSetting) {
        setStorageItem('userSetting', defaultState);
        userSetting = defaultState;
    } else {
        userSetting = JSON.parse(userSetting);
    }

    console.log('Завантажено налаштування:', userSetting);

    document.body.className = userSetting.theme;
    updateLanguage(userSetting.language);
    document.getElementById('theme-select').value = userSetting.theme;
    document.getElementById('language-select').value = userSetting.language;
}

// Синхронізація налаштувань між вкладками
window.addEventListener('storage', function (event) {
    if (event.key === 'userSetting') {
        const updatedUserSetting = JSON.parse(event.newValue);
        console.log('Оновлені налаштування:', updatedUserSetting);

        document.body.className = updatedUserSetting.theme;
        updateLanguage(updatedUserSetting.language);
        document.getElementById('theme-select').value = updatedUserSetting.theme;
        document.getElementById('language-select').value = updatedUserSetting.language;
        showNotification(`Тема змінена на ${updatedUserSetting.theme === 'dark' ? 'темну' : 'світлу'} мовою ${updatedUserSetting.language === 'en' ? 'English' : 'Українська'}`);
    }
});

// Зміна теми
function toggleTheme() {
    const newTheme = document.getElementById('theme-select').value;

    const settings = JSON.parse(getStorageItem('userSetting')) || defaultState;
    settings.theme = newTheme;

    setStorageItem('userSetting', settings);

    document.body.className = newTheme;
    showNotification(`Тема змінена на ${newTheme}`);
}

// Зміна мови
function toggleLanguage() {
    const newLanguage = document.getElementById('language-select').value;

    const settings = JSON.parse(getStorageItem('userSetting')) || defaultState;
    settings.language = newLanguage;

    setStorageItem('userSetting', settings);

    updateLanguage(newLanguage);
    showNotification(`Мова змінена на ${newLanguage === 'en' ? 'English' : 'Українська'}`);
}

// Оновлення мови інтерфейсу
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

// Показ сповіщення
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

initializeSettings();
