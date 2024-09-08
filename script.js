const langToggle = document.getElementById('lang-toggle');
const title = document.getElementById('title');
const description = document.getElementById('description');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.container');

// Функция для обновления текста переключателя темы
const updateThemeText = () => {
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = (isDark ? (langToggle.textContent === 'RU' ? 'Light' : 'Светло') : (langToggle.textContent === 'RU' ? 'Dark' : 'Темно'));
};

// Проверка темы пользователя
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
    langToggle.classList.add('dark');
    themeToggle.classList.add('dark');
    updateThemeText();
}

// Переключение языка
langToggle.addEventListener('click', () => {
    if (langToggle.textContent === 'RU') {
        langToggle.textContent = 'EN';
        title.textContent = "Привет, я MrLampochka";
        description.textContent = "Пока что ничего нет, но скоро все изменится...";
    } else {
        langToggle.textContent = 'RU';
        title.textContent = "Hello, I'm MrLampochka";
        description.textContent = "There's nothing here, but soon everything will change...";
    }
    updateThemeText();
});

// Переключение темы
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.add('light');
        body.classList.remove('dark')
    } else {
        body.classList.add('dark');
        body.classList.remove('light')
    }

    langToggle.classList.toggle('dark');
    themeToggle.classList.toggle('dark');
    updateThemeText();
});
