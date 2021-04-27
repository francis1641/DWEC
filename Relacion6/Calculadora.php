<?php
 $uri = $_SERVER['REQUEST_URI'];
 $foo = $_GET['mivariable'];
 $valor1 = $_GET['valor1'];
 $valor2 = $_GET['valor2'];
 $resultado=0;

    if($foo== 'suma'){
        $resultado=$valor1+$valor2;
        
    }
    else{
        if($foo== 'resta'){
            $resultado=$valor1-$valor2;
        }
        else{
            if($foo== 'mult'){
                $resultado=$valor1*$valor2;
            }
            else{
                $resultado=$valor1/$valor2;
                }
            }
        }
        echo "{\"resultado\": $resultado}";
?>