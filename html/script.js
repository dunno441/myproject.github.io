document.getElementById('loadDataBtn').addEventListener('click', function () {
    // Создание нового XMLHttpRequest объекта
    var xhr = new XMLHttpRequest();

    // Установка обработчика для обработки ответа сервера
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Преобразование JSON-строки в объект
            var users = JSON.parse(xhr.responseText);

            // Очистка текущего списка пользователей
            var userList = document.getElementById('userList');
            userList.innerHTML = '';

            // Генерация HTML-элементов для каждого пользователя
            users.forEach(function (user) {
                var userItem = document.createElement('div');
                userItem.textContent = ${user.name} - ${user.email};
                userList.appendChild(userItem);
            });
        } else if (xhr.readyState === 4) {
            console.error('Ошибка загрузки данных');
        }
    };

    // Конфигурация запроса: метод GET и URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    // Отправка запроса
    xhr.send();
});