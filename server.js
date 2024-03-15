const express = require('express');
const app = express();
const port = 3000; // Порт, на якому запуститься сервер

// Маршрут для головної сторінки гри
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Відправляємо HTML-файл гри
});

// Маршрут для отримання JavaScript-коду гри
app.get('/game.js', (req, res) => {
    const newLocal = '/game.js';
    res.sendFile(__dirname + '/game.js'); // Відправляємо JavaScript-файл гри
});

// Статичний ресурс для стилів CSS
app.use(express.static('public'));

// Запускаємо сервер
app.listen(port, 'айпі', () => {
    console.log(`Сервер запущений на http://айпі:${port}/`);
});