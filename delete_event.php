<?php

include_once 'db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//Get variables
$id = $_POST["id"];

//SQL
$sql = "UPDATE schedule SET invisible = '1' WHERE id = '$id'";

if (mysqli_query($conn, $sql)) 
{
    echo "Deleted event with id " . $id;
} 
else 
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>