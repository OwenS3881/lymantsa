<?php

include_once '../db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}


//Get variables
$name = preg_replace("/[^a-zA-Z\s]/", "", $_POST["name"]);
$grade = preg_replace("/[^0-9]/", "", $_POST["grade"]);
$experience = preg_replace("/[']/", "", $_POST["experience"]);
$selections = $_POST["selections"];
$alternates = $_POST["alternates"];

//SQL
$sql = "INSERT INTO competitions (name, grade, experience, selections, alternates) VALUES 
('$name',
'$grade',
'$experience',
'$selections',
'$alternates'
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
