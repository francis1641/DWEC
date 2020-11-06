<html>
    <head>
        <title>

        </title>
    </head>
    <body>
        <?php
        $euros=900;
        $cambioMoneda=1.18;
        $dolares= $euros * $cambioMoneda;
        echo "$euros euros son $dolares dolares"
        ?>
    </body>
</html>


<?php
$pais="Espana";
$continente= "Europa";
$habitantes=415040;

echo "$pais es un pais de $continente con $habitantes habitantes <br>";
echo 'contienente es una variaable de tipo: '.getType($continente).'<br>';



%i=0;
do{
    echo "En el do-while: $i <br>";
    $i+=1;
} while($i<0);

while($i>0){
}


echo "Primer for anidado: <br>";
for($i=0; $i<3; $i++){
    for($j=0; $j<3; $j++){
        echo "i: $i j: $j <br>";
        if($j==1) break;
    }
}

echo "Segundo for anidado: <br>";
for($i=0; $i<3; $i++){
    for($j=0; $j<3; $j++){
        echo "i: $i j: $j <br>";
        if($j ==1) break 2;
    }
} 

//EJERCICIO 7 MOSTRAR TODOS LOS NUMEROS PARES DEL 1 AL 100
for($i=2; $i<=100; $i=$i+2){
    echo "$i <br>";
}

//EJERCICIO 8  Escribir el cuadrado de los primeros 40 números naturales usando un bucle whilE
$i=1;
while($i<41){
  echo 'El cuadrado de $i es: '.($i*$i);
  $i++;
}

//APUNTES
echo "En el fichero requerido <br>";
echo 'esta es la primera '.$a;
echo $b;


$a = "variable del principal";
require "ejerequerido.php";
$b= "otra variable principal";
echo "En el script principal";


echo "Hola "._GET("nombre");