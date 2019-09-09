<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/startup.php';

//connect to mysql database
$conn = new mysqli(getenv('MYSQL_HOST'), getenv('MYSQL_USER'), getenv("MYSQL_PASS"), getenv('MYSQL_DB'));
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//Check if the user has an account
function userHasAaccount($userId){
  global $conn;

  $query = $conn->prepare("SELECT * FROM accounts WHERE userId=?");
  $query->bind_param("i",$userId);
  $query->execute();
  $result = $query->get_result();
  if($result->num_rows > 0){
    return true;
  }else{
    return false;
  }
  $query->close();
}

 ?>
