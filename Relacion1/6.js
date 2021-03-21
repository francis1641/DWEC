let frase1= 'Esto es un ej';  /*PREGUNTAR */

function invertir(frase){
    let fraseInvertida=[];
    let index=0;
    let j=-1;
    for(let index=frase.length;index>=0; index--){
        fraseInvertida[j]=frase.charAt(index);
            /*fraseInvertida[j]=arrayR.chartAt[i];*/

            /*fraseInvertida[j]=arrayR[i];*/
            j++;
    }

    for(let i=0;i<fraseInvertida.length;i++){
        console.log(fraseInvertida[i]);
    }
}

invertir(frase1);