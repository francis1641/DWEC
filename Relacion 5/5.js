function eliminaElemento(padre, posicion){
    x=document.getElementById(padre).childNodes;
    x[posicion].remove();
}