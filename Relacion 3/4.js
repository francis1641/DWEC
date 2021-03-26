let cadena='davida';
let caracter='a';
function ponerMayuscula(cadenaC, caracterA){
    cadena2="";

    var mayuscula=caracterA.toUpperCase();

    for(let i=0;i<cadenaC.length;i++){
        if(cadenaC[i]==caracterA)
            cadena2+=mayuscula;
        else cadena2+=cadena[i];     
    }
    console.log(cadena2);
}

ponerMayuscula(cadena, caracter);