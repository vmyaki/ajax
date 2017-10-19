<?php

//Obtenemos el json que hemos enviado desde script.js
$data=json_decode(file_get_contents('php://input',TRUE));

//Creamos un array
$x=[];

//Incluimos en el array el contenido de $data que es un objeto Json del archivo script.js
$x['json']=$data ; //Coge el atributo a, si quito '$data->a' coge todo el objeto $data

print json_encode($x);
   



?>
