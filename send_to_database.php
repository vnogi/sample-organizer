<?php 

//checks whether server contenttype is valid and trims it, if not contenttype is empty
$contentType= isset($_SERVER ["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"])  : "" ;  //works!

$servername='localhost';
$username = 'root';
$password = '';
$database= 'myDB';

function send($conn,$content_obj,$sql){

    if ($conn -> query($sql) == TRUE ){  //the sql query  itself cretes new table
        $content_obj["response"] ="<br> test_input created succesfully<br>";
    }
    else {
        $content_obj["response"] = "<br>Error <br>" . $conn->error;
     }
 return $content_obj;
}

if ($contentType === "application/json"){
    $content= trim(file_get_contents("php://input"));
    $decoded = json_decode($content,true);
    $decoded["bar"] ="Hello from json small PHP";
    

    $conn = new mysqli($servername,$username,$password,$database); // now create a connection with the database

    
    if ($conn -> connect_error) {
    die ("Connection failed: " . $conn -> connecion_error);  //check connection
}
    $sql = "CREATE TABLE test_input ( data_num INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    input_id VARCHAR(30) NOT NULL,
    container_id VARCHAR(30) NOT NULL,
    regdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    if ($conn -> query($sql) == TRUE ){  //the sql query  itself cretes new table
        $decoded["response"] ="<br>Table test_input created succesfully<br>";
    }
    else {
        $decoded["response"] = "<br>Error creating table<br>" . $conn->error;
     }
     
     $input_id=$decoded["input_id"];
     $container_id=$decoded["container_id"];

     $sql = "INSERT INTO test_input (input_id,container_id)
    VALUES 
    ( '$input_id', 
    '$container_id' ) ";
   // $conn -> query($sql);
    $decoded=send($conn,$decoded,$sql);

    
     $reply = json_encode($decoded);
}
/*
function debug_to_console($data) { //not working
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}*/



header("Content-Type: application/json; charset=UTF8");
echo $reply

?>