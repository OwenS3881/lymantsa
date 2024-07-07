<?php

include_once 'db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//Get variables
$name = $_POST["name"];
$date = $_POST["date"];
$description = $_POST["description"];

//SQL
$sql = "INSERT INTO announcements (name, date, description) VALUES 
('$name',
'$date',
'$description'
)";

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