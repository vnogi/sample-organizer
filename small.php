<?php 
/*
$input = $_POST;
$internal_variable="Hello from PHP";
//echo `<script> console.log(${internal_variable })   </script>`;
echo "This is the end" .htmlspecialchars($input["name"]);  
return 23;
*/
$contentType= isset($_SERVER ["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"])  : "" ;  //works!

if ($contentType === "application/json"){
    $content= trim(file_get_contents("php://input"));
    $decoded = json_decode($content,true);
    $decoded["bar"] ="Hello from json small PHP";
    $reply = json_encode($decoded);
}

header("Content-Type: application/json; charset=UTF8");
echo $reply

?>