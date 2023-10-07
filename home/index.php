<?php 
session_start();

if (!empty($_SESSION['id']) || !isset($_SESSION['id'])) {
    header('location:http://localhost');
}

if (!empty($_SESSION['name']) || !isset($_SESSION['name'])) {
    header('location:http://localhost');
} 
?> 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CreceAccounting ° HOME</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../assets/styles/home.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <h1>HOLA, BIENVENIDO <?php echo $_SESSION['name']; ?></h1>
</body>

</html>
