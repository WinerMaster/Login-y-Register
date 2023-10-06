<?php

session_start();

include_once '../config/config.php';

$post = @file_get_contents('php://input');

$values = (array)json_decode($post);

if(!!$values['username'] && !!$values['password']) {
    $user = filter_var($values['username'], FILTER_SANITIZE_SPECIAL_CHARS);
    $pass = $values['password'];
    $pass = password_hash($pass, PASSWORD_DEFAULT);
    $sql = $conn->query("INSERT INTO users(username, pass) VALUES('{$user}', '{$pass}')");
    
    if($sql) {
        $_SESSION['name'] = $user;
        echo "success";
    } else {
        echo "Error al registrarse.";
    }
} else {
    echo 'Campos sin completar.';
}