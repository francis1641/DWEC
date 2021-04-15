/*var titulo, texto, fecha;

notas = {
    "listaNotas": [
        {"Titulo":titulo, "texto":texto, "fecha":fecha}]
}*/

var numeroNota = 1;

function createPostIt(){
    let postIt = document.createElement("div");
    let headPost = document.createElement("div");
    let bodyPost = document.createElement("div");
    let textAreaPost = document.createElement("textarea");
    let textAreaTitulo = document.createElement("textarea");
    let botonBorrar = document.createElement("button");

    postIt.setAttribute("id", "nota"+numeroNota);
    postIt.style.width = "200px";
    postIt.style.height = "200px";
    postIt.style.backgroundColor = "#FDFDAA";

    headPost.style.zIndex = "1";
    headPost.style.width = "200px";
    headPost.style.height = "40px";
    headPost.style.backgroundColor = "#FFFF83";

    bodyPost.style.height = "160px";
    bodyPost.style.width = "200px";
    bodyPost.style.backgroundColor = "transparent";

    textAreaPost.setAttribute("id", "textoNota"+numeroNota);
    textAreaPost.style.height = "140px";
    textAreaPost.style.width = "180px";
    textAreaPost.style.margin = "7px";
    textAreaPost.style.backgroundColor = "transparent";

    textAreaTitulo.style.height = "20px";
    textAreaTitulo.style.width = "100px";
    textAreaTitulo.style.marginLeft = "10px";
    textAreaTitulo.style.marginTop = "6px";
    textAreaTitulo.style.backgroundColor = "transparent";


    botonBorrar.innerText = "Borrar";
    
    botonBorrar.setAttribute("onClick", "borrarNota(event)");
    botonBorrar.style.marginLeft = "10px";
    botonBorrar.style.marginTop = "10px";
    
    postIt.appendChild(headPost);
    postIt.appendChild(bodyPost);
    bodyPost.appendChild(textAreaPost);
    headPost.appendChild(botonBorrar);
    headPost.appendChild(textAreaTitulo);

    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(postIt, currentDiv);
    numeroNota++;
}

window.borrarNota = function(e){
    let botonPulsado = e.target;
    e.target.parentNode.parentNode.remove(botonPulsado);
}
