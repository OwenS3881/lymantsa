<?php

include_once '../db.php';

//get data from competition table
$result = mysqli_query($conn, "SELECT * FROM competitions");

//store data in array
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

//return response in JSON format
echo json_encode($data);

?>
