let cadena='davida';
let caracter='a';
function ponerMayuscula(cadenaC, caracterA){
    cadena2='';
    let array=[], index=0;

    var mayuscula=caracterA.toUpperCase();

    for(let i=0;i<cadenaC.length;i++){
        if(cadenaC.charAt(i)==caracterA){
            array[index]=i;
            index++;
        }
        cadena2+=cadenaC.charAt(i);
        //if(cadenaC.chartAt(i)==caracterA)
            
    }
    console.log(cadena2);
}

ponerMayuscula(cadena, caracter);