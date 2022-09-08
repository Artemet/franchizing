<?php
$bd_login = "root";
$bd_password = "";
$bd_name = "bright";
$bd_connect = mysqli_connect("localhost", $bd_login, $bd_password, $bd_name);
$name = $_POST["name"];
$last_name = $_POST["last_name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$message = $_POST["message"];
$sql = "INSERT INTO `message` (`id`, `name`, `last_name`, `phone`, `email`, `message`) VALUES (NULL, '$name', '$last_name', '$phone', '$email', '$message')";
$query = mysqli_query($bd_connect, $sql);
header("location: http://localhost/franchaizing%20FD/");