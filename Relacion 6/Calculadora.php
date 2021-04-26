<?php
 $uri = $_SERVER['REQUEST_URI'];
 $foo = $_GET['mivariable'];
 $valor1 = $_GET['valor1'];
 $valor2 = $_GET['valor2'];
 $resultado=0;
 header('Content-type: text/html');

    if($foo== 'suma'){
        $resultado=$valor1-$valor2;
        echo '{"resultado": '$resultado'}';
    }

    if($foo== 'resta'){
        $resultado=$valor1-$valor2;
        echo '{"resultado": '$resultado'}';
    }
    if($foo== 'mult'){
        $resultado=$valor1*$valor2;
        echo '{"resultado": '$resultado'}';
    }
    if($foo== 'divi'){
        $resultado=$valor1/$valor2;
        echo '{"resultado": '$resultado'}';
    }

?>