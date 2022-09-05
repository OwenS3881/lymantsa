<?php

//connect to database
$conn = mysqli_connect("box5893.bluehost.com", "szymansk_tsa_app", "jd(&hdj(YGe(HG*9d(", "szymansk_lymantsa");

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//sanitize input
$name = preg_replace("/[^a-zA-Z\s]/", "", $_POST["name"]);
$student_id = preg_replace("/[^0-9]/", "", $_POST["student_id"]);

$sql = "INSERT INTO `join` (name, studentId) VALUES ('$name', '$student_id')";

if (mysqli_query($conn, $sql)) 
{
    header('Location: https://lymantsa.org/join/');
} 
else 
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>