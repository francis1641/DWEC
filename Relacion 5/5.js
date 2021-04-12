function eliminaElemento(padre, posicion){
    x=document.getElementById(padre).childNodes;
    x[posicion].remove();
}
function borrar(){
    padre=document.getElementById("padre").value;
    posicion=document.getElementById("posicion").value;
    eliminaElemento(padre, posicion);
}