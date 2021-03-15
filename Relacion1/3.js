let array= [5,19,8,3,58,1];



function max(arrayNumeros){
    let mayor=arrayNumeros[0];
    for(let i=1; i<arrayNumeros.length; i++){
        if(mayor<arrayNumeros[i])
            mayor=arrayNumeros[i];
    }
    console.log(mayor); 
}



max(array);