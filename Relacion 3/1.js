let cadena='NO entiENDO que EStA PasANDO';


function NMayMin(cadenaC){
    var minuscula='abcdefghijklmnopqrstuvwxyz';
    var mayuscula='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let contmayus=0,contminus=0;

    for(let i=0;i<minuscula.length;i++){
            if(cadenaC.indexOf(minuscula.charAt(i),0)!=-1)
            //if(minuscula.charAt(i)==cadenaC.indexOf(j))
                contminus++;
    }
    for(let i=0;i<mayuscula.length;i++){
        if(cadenaC.indexOf(mayuscula.charAt(i),0)!=-1)
                contmayus++;
    }
    console.log("Hay "+contmayus+" mayusculas y "+contminus+" minusculas");
}

NMayMin(cadena);