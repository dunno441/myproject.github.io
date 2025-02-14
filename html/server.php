<?php
// Створення масиву користувачів
$users = [
    ["name" => "Олександр", "email" => "alex@example.com"],
    ["name" => "Марія", "email" => "maria@example.com"],
    ["name" => "Іван", "email" => "ivan@example.com"]
];
// Встановлюємо заголовок для формату JSON
header('Content-Type: application/json');
// Перетворюємо масив на JSON і відправляємо його у відповідь
echo json_encode($users);
?>
