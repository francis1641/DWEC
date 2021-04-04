let cadena='  Esto   es   una  frase   ';

function borraEspacios(cadenaC){
    var NcadenaC= cadenaC.replace(/\s/g, "");
    console.log(NcadenaC);
}

borraEspacios(cadena);