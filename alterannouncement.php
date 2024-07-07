<?php

include_once 'db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//Get variables
$id = $_POST["id"];
$name = $_POST["name"];
$date = $_POST["date"];
$description = $_POST["description"];

//SQL
$sql = "UPDATE announcements SET name = '$name', date = '$date', description = '$description' WHERE id = '$id'";

if (mysqli_query($conn, $sql)) 
{
    echo "Success!";
} 
else 
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>