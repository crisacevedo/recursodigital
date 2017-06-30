<?php 
    include("../connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $rock_reg = $data->rock_reg;
    $rock_pop = $data->rock_pop;
    $rock_ska = $data->rock_ska;
    $rock_jazz = $data->rock_jazz;
	$reg_pop = $data->reg_pop;
    $reg_ska = $data->reg_ska;
    $reg_jazz = $data->reg_jazz;
	$pop_ska = $data->pop_ska;
	$pop_jazz = $data->pop_jazz;
    $ska_jazz = $data->ska_jazz;
    $username=$data->username;
    $cancionid=$data->cancionid;
    $grado=$data->grado;
    $animo=$data->animo;

    $variable = $db->query("SELECT userId from  users where email='$username'");
	$variable= $variable->fetchAll();
	 $idu=$variable[0][0];
    $verificacion = $db->query("SELECT * FROM categoria WHERE idu='$idu' AND idc='$cancionid'");
    $verificacion = $verificacion->fetchAll();
    
if (count($verificacion) !== 1){
   
    $q = "INSERT INTO categoria (idu,idc,animo,rock_reg, rock_pop, rock_ska, rock_jazz, reg_pop, reg_ska, reg_jazz, pop_ska, pop_jazz, ska_jazz,grado)
	VALUES (:user_id,:song_id,:animo,:rock_reg, :rock_pop, :rock_ska, :rock_jazz, :reg_pop, :reg_ska, :reg_jazz, :pop_ska, :pop_jazz, :ska_jazz,:grado)";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
		":user_id" => $idu,
		":song_id" => $cancionid,
		":animo" => $animo,
		":rock_reg" => $rock_reg,
		":rock_pop" => $rock_pop,
		":rock_ska" => $rock_ska,
		":rock_jazz" => $rock_jazz,
		":reg_pop" => $reg_pop,
		":reg_ska" => $reg_ska,
		":reg_jazz" => $reg_jazz,
		":pop_ska" => $pop_ska,
		":pop_jazz" => $pop_jazz,
		":ska_jazz" => $ska_jazz,
		":grado" => $grado		
		));
	}
  
if (count($verificacion) == 1){
$q = "UPDATE categoria set rock_reg=:rock_reg,rock_pop=:rock_pop,rock_ska=:rock_ska,rock_jazz=:rock_jazz,reg_pop=:reg_pop,reg_ska=:reg_ska,reg_jazz=:reg_jazz,pop_ska=:pop_ska,pop_jazz=:pop_jazz,ska_jazz=:ska_jazz,grado=:grado ,animo=:animo WHERE 	idu='$idu' and idc='$cancionid'";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
		":rock_reg" => $rock_reg,
		":rock_pop" => $rock_pop,
		":rock_ska" => $rock_ska,
		":rock_jazz" => $rock_jazz,
		":reg_pop" => $reg_pop,
		":reg_ska" => $reg_ska,
		":reg_jazz" => $reg_jazz,
		":pop_ska" => $pop_ska,
		":pop_jazz" => $pop_jazz,
		":ska_jazz" => $ska_jazz,
		":grado" => $grado,
		":animo"=>$animo	
		));
	}
    echo json_encode($cancionid);
?>