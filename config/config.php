<?php 

$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'proyect_login';

$conn = @mysqli_connect($host,$user,$pass,$dbname);

if(mysqli_error($conn)) {
    echo 'Error DataBase';
}