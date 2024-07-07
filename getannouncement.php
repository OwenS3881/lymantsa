<?php

include_once 'db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//Get variables
$search = $_POST["search"];

//SQL
$sql = "SELECT * FROM announcements WHERE name LIKE '%$search%' AND invisible != 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) 
{
    $row = $result->fetch_assoc();
    echo $row["id"]. "^" . $row["name"] . "^" . $row["date"] . "^" .$row["description"];
} 
else 
{
    echo "No Results";
}

mysqli_close($conn);

?>