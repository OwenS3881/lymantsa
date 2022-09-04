<?php

//connect to database
$conn = mysqli_connect("box5893.bluehost.com", "szymansk_tsa_app", "jd(&hdj(YGe(HG*9d(", "szymansk_lymantsa");

//get data from announcements table
$result = mysqli_query($conn, "SELECT * FROM announcements");

//store data in array
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

//return response in JSON format
echo json_encode($data);

?>
