document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    const tokenText = document.getElementById('token');

    copyButton.addEventListener('click', function() {
        const textToCopy = tokenText.textContent.trim().substring(4); // Убираем префикс 'CA: '

        // Создаем временный элемент textarea для копирования текста
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        // Выделяем текст в textarea и копируем его
        textarea.select();
        document.execCommand('copy');

        // Удаляем временный элемент textarea
        document.body.removeChild(textarea);

        // Добавляем класс для анимации "прыжка"
        copyButton.classList.add('jumping');

        // Через короткое время убираем класс анимации
        setTimeout(function() {
            copyButton.classList.remove('jumping');
        }, 300); // 300 миллисекунд, как в анимации

    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент кнопки "chart"
    var chartButton = document.getElementById("chartButton");

    // Устанавливаем начальные стили кнопки
    chartButton.style.backgroundColor = "white";
    chartButton.style.color = "black";
});

