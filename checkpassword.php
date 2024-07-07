<?php


include_once 'db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//Get variables
$password = $_POST["password"];

//SQL
$sql = "SELECT password FROM `password` WHERE BINARY password='$password'";

$result = mysqli_query($conn, $sql);

if($result->num_rows > 0)
{
    echo "True";
}
else 
{
    echo "False";
}


mysqli_close($conn);
?>