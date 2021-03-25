let cadena='cdauhcclkucc';
let car='c';

function palabraRepetida(cadenaC, caracter){
    let contador=0;
    for(let i=0; i<cadenaC.length;i++){
        if(cadenaC.charAt(i)==caracter)
            contador++;
    }
    console.log(cadenaC);
    console.log("Has escogido la letra "+caracter+" y hay "+contador+" numero/s");
}

palabraRepetida(cadena, car);