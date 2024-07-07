<?php

include_once 'db.php';

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

//SQL
$sql = "SELECT name, studentId FROM `join`";

$result = mysqli_query($conn, $sql);

if ($result->num_rows <= 0)
{
    echo "No data";
}
else
{
    $data = array();

    while ($result->num_rows > 0 && $row = mysqli_fetch_assoc($result))
    {
        $data[] = $row;
    }

    echo json_encode($data);
}

mysqli_close($conn);

?>
