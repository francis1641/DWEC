<?php
 $uri = $_SERVER['REQUEST_URI'];
 $foo = $_GET['mivariable'];

 header('Content-type: text/html');
    if(strlen($foo)<=3)
        //LE ESTAMOS PASANDO UN ARCHIVO JSON
        echo '{"value":"Es demasiado corto"}';
    else{
        if($foo=='David')
        echo '{"value": "Ya esta ocupado"}';

        else echo '{"value":"Libre"}';
    }
?>