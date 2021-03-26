function esPalindromo(cadena){
    let resultado=true;
    for(let i=0, j=cadena.length-1; i<j; i++, j--){
        if(cadena[i]!=cadena[j])
            resultado=false;
    }
    return resultado;
}

console.log(esPalindromo("ana"));
console.log(esPalindromo("somos"));
console.log(esPalindromo("fran"));