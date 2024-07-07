<?php

include_once '../db.php';

//get data from schedule table
$result = mysqli_query($conn, "SELECT * FROM schedule");

//store data in array
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

//return response in JSON format
echo json_encode($data);

?>
