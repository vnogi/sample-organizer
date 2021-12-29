<?php 

//this script simply tests the mysql connection with the parameters provided in the script, and returns a message
$debug=true;
if ($debug==true) {echo "<br> Empezando  importacion de PHP script <br>"; }

$servername='sql207.epizy.com';
$username = 'epiz_25103454';
$password = 'thyBU5kQ6B8wMY2';
$database= 'epiz_25103454_registro_de_muestras';
$my_post=$_POST;
function print_current_post_varible($my_post){
    echo (`<br> ${$my_post} <br>`);
}
//$raw_name_input=explode( ' ', $_POST['name']);
//$name_to_insert= $raw_name_input[0];
//$email_to_insert=$_POST['email'];
//$lastname_to_insert=$raw_name_input[1]; //
//$conn = new mysqli($servername, $username, $password);

$conn = new mysqli($servername,$username,$password,$database); // now create a connection with the database

if ($conn -> connect_error) {
    die ("Connection failed: " . $conn -> connecion_error);  //check connection
}
$conn -> close;

echo "conexion con mySQL establecida."
?>