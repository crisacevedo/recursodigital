<?php 
    include("../connection.php");
        $datos = json_decode(file_get_contents("php://input"));
         $idc=$datos->cancion;


    
   // $variable = $db->query("SELECT userId from  users where email='$username'");
	//$variable= $variable->fetchAll();
	//$idu=$variable[0][0];

    if($idc==1)
{

    $variable = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from reporte where idc=1");

   	$result = $variable->fetchAll( PDO::FETCH_ASSOC );

    if(count($result)!=1)
{

$insertar=$db->query("INSERT into 
reporte (idc,rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz) 
select DISTINCT(idc),avg(rock_reg),AVG(rock_pop),avg(rock_ska),AVG(rock_jazz),AVG(reg_pop),AVG(reg_ska),avg(reg_jazz),AVG(pop_ska),AVG(pop_jazz),AVG(ska_jazz) 
from categoria where idc=1");


}


    if(count($result)==1)

{

$actualizar=$db->query("UPDATE
reporte set 
reporte.rock_reg=(SELECT i.rock_reg from (select avg(rock_reg) rock_reg from categoria where idc=1) i), 
reporte.rock_pop=(SELECT i.rock_pop from (select avg(rock_pop) rock_pop from categoria where idc=1) i),
reporte.rock_ska=(SELECT i.rock_ska from (select avg(rock_ska) rock_ska from categoria where idc=1) i),
reporte.rock_jazz=(SELECT i.rock_jazz from (select avg(rock_jazz) rock_jazz from categoria where idc=1) i),
reporte.reg_pop=(SELECT i.reg_pop from (select avg(reg_pop) reg_pop from categoria where idc=1) i),
reporte.reg_ska=(SELECT i.reg_ska from (select avg(reg_ska) reg_ska from categoria where idc=1) i),
reporte.reg_jazz=(SELECT i.reg_jazz from (select avg(reg_jazz) reg_jazz from categoria where idc=1) i),
reporte.pop_ska=(SELECT i.pop_ska from (select avg(pop_ska) pop_ska from categoria where idc=1) i),
reporte.pop_jazz=(SELECT i.pop_jazz from (select avg(pop_jazz) pop_jazz from categoria where idc=1) i),
reporte.ska_jazz=(SELECT i.ska_jazz from (select avg(ska_jazz) ska_jazz from categoria where idc=1) i)
where reporte.idc=1");
}




    $variable = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from reporte where idc=1");

    $result = $variable->fetchAll( PDO::FETCH_ASSOC );



    // convert to json
   	$json1 = json_encode( $result);
        // echo the json string
    echo $json1;
}

    




    if($idc==2)
{

    $variable = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from reporte where idc=2");

    $result = $variable->fetchAll( PDO::FETCH_ASSOC );

    if(count($result)!=1)
{

$insertar=$db->query("INSERT into 
reporte (idc,rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz) 
select DISTINCT(idc),avg(rock_reg),AVG(rock_pop),avg(rock_ska),AVG(rock_jazz),AVG(reg_pop),AVG(reg_ska),avg(reg_jazz),AVG(pop_ska),AVG(pop_jazz),AVG(ska_jazz) 
from categoria where idc=2");


}


    if(count($result)==1)

{

$actualizar=$db->query("UPDATE
reporte set 
reporte.rock_reg=(SELECT i.rock_reg from (select avg(rock_reg) rock_reg from categoria where idc=2) i), 
reporte.rock_pop=(SELECT i.rock_pop from (select avg(rock_pop) rock_pop from categoria where idc=2) i),
reporte.rock_ska=(SELECT i.rock_ska from (select avg(rock_ska) rock_ska from categoria where idc=2) i),
reporte.rock_jazz=(SELECT i.rock_jazz from (select avg(rock_jazz) rock_jazz from categoria where idc=2) i),
reporte.reg_pop=(SELECT i.reg_pop from (select avg(reg_pop) reg_pop from categoria where idc=2) i),
reporte.reg_ska=(SELECT i.reg_ska from (select avg(reg_ska) reg_ska from categoria where idc=2) i),
reporte.reg_jazz=(SELECT i.reg_jazz from (select avg(reg_jazz) reg_jazz from categoria where idc=2) i),
reporte.pop_ska=(SELECT i.pop_ska from (select avg(pop_ska) pop_ska from categoria where idc=2) i),
reporte.pop_jazz=(SELECT i.pop_jazz from (select avg(pop_jazz) pop_jazz from categoria where idc=2) i),
reporte.ska_jazz=(SELECT i.ska_jazz from (select avg(ska_jazz) ska_jazz from categoria where idc=2) i)
where reporte.idc=2");
}




    $variable = $db->query("SELECT rock_reg,rock_pop,rock_ska,rock_jazz,reg_pop,reg_ska,reg_jazz,pop_ska,pop_jazz,ska_jazz  from reporte where idc=2");

    $result = $variable->fetchAll( PDO::FETCH_ASSOC );



    // convert to json
    $json2 = json_encode( $result);
        // echo the json string
    echo $json2;
}

?>