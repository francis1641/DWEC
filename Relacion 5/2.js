function mifuncion(){
    x=document.createElement("h1");
    x.innerHTML= "Esto es un h1 creado";
    document.getElementById("content").appendChild(x);
}

function borrar(){
    y=document.getElementById("content").childNodes;
    y[3].remove();
}

// ESTA FUNCION NO FUNCIONA
function cambio(){
    var texto= document.createTextNode("Este texto ha sido reemplazado");
    var objetoCambiado= document.getElementById("content").childNodes[3];
    objetoCambiado.replaceChild(texto, objetoCambiado.childNodes[3]);
}