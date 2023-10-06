<?php 
ini_set("session.cookie_httponly", 1);
ini_set('session.use_strict_mode', 1);
ini_set('session.cookie_secure', true);
ini_set('session.cookie_secure', 1);
session_name("proyect_login");
session_start();

include_once '../config/config.php';

$post = @file_get_contents('php://input');

$values = (array)json_decode($post);

if(!!$values['username'] && !!$values['password']) {
    $user = filter_var($values['username'], FILTER_SANITIZE_SPECIAL_CHARS);
    $pass = $values['password'];
    $sql = $conn->query("SELECT * FROM users WHERE username = '{$user}'");
    $fetch = $sql->fetch_assoc(); 
    if($sql->num_rows > 0) {
        if(password_verify($pass, $fetch['pass'])) {
            $_SESSION['name'] = $fetch['username'];

            $sql->close();
            echo 'success';
        } else {
            echo '¡Contraseña incorrecta!';
        }
    } else {
        echo 'El usuario ingresado no existe.';
    }
} else {
    echo 'Campos sin completar.';
}