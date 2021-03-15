let array= [1,20,10,10];



function suma(arrayNumeros){
    let total=0;
    for(let i=0; i<arrayNumeros.length; i++){
        total+=arrayNumeros[i];
    }
    console.log(total); 
}



suma(array);