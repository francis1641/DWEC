let array= [1,2,2,2];


function multiplica(arrayNumeros){
    let total=1;
    for(let i=0; i<arrayNumeros.length; i++){
        total*=arrayNumeros[i];
    }
    console.log(total); 
}



multiplica(array);