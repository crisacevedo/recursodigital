<?php 
    include("../connection.php");
        $data = json_decode(file_get_contents("php://input"));
        $username=$data->username;
         $idc=$data->cancion;

    $usuario = $db->query("SELECT userId from  users where email='$username'");
  $usuario= $usuario->fetchAll();
   $idu=$usuario[0][0];

    
   // $variable = $db->query("SELECT userId from  users where email='$username'");
	//$variable= $variable->fetchAll();
	//$idu=$variable[0][0];

    if($idc==1)
{

    $variable = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from categoria where idu='$idu' and idc=1");

   	$result = $variable->fetchAll( PDO::FETCH_ASSOC );
    // convert to json
   	$json1 = json_encode( $result);
        // echo the json string
    echo $json1;

}



    if($idc==2)
{

    $variable = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from categoria where idu='$idu' and idc=2");

    $result = $variable->fetchAll( PDO::FETCH_ASSOC );
    // convert to json
    $json2 = json_encode( $result);
        // echo the json string
    echo $json2;

}




	//$respuesta1 = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from categoria where idu='$idu' and idc=2");
    //$respuesta1 = $respuesta1->fetchAll();
    

?>