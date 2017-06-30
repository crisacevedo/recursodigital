<?php 
    include("../connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $passwordvieja = sha1($data->passwordvieja);
    $passwordnueva = sha1($data->passwordnueva);
    $token = $data->token;

   $db->query("UPDATE users SET password='$passwordnueva' WHERE token=$token");

  
    


    echo json_encode($passwordnueva);
?>