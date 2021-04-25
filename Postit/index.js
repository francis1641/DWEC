window.onload= function()
{
    existenNotasGuardadas = localStorage.getItem("notas");
    if (existenNotasGuardadas)
    {
        listaNotas = JSON.parse(existenNotasGuardadas);
        numeroNota= listaNotas.length-1;
        for (i=0; i<listaNotas.length; i++)
            enseñarPostit(listaNotas[i])
        }
}

class Nota{
    constructor(id, titulo, asunto, fecha){
        this.id=id;
        this.titulo=titulo;
        this.asunto=asunto;
        this.fecha=fecha;
    }
}

var listaNotas=[], numeroNota=0;

function crear(){
    titulo=document.querySelector("#titulo");
    titulo=titulo.value;
    textarea=document.querySelector("#asunto");
    textarea=textarea.value;
    fecha=Date.now();
    nuevanota=new Nota(numeroNota, titulo, textarea, fecha); 
    listaNotas.push(nuevanota);
    enseñarPostit(nuevanota);

    localStorage.setItem("notas", JSON.stringify(listaNotas));    
}

function enseñarPostit(objnota){
    
    contenedor=document.createElement("div");
    input=document.createElement("input");
    textarea=document.createElement("textarea");
    botonBorrar=document.createElement("button");
    botonBorrar.innerText= "Borrar";
    botonGuardar=document.createElement("button");
    botonGuardar.innerText="Guardar";
    
    contenedor.setAttribute("id", numeroNota);
    //contenedor.setAttribute("onmouseover", "encontrarNota(event)");

        /* ESTILO DE LA NOTA */
        contenedor.style.width = "200px";
        contenedor.style.height = "225px";
        contenedor.style.border= "2px solid yellow"
        contenedor.style.backgroundColor = "#FDFDAA";
        contenedor.onclick=pinchar;

        textarea.setAttribute("class", "textarea");
        textarea.style.height = "140px";
        textarea.style.width = "180px";
        textarea.style.margin = "7px";
        textarea.style.resize= "none";
        textarea.style.backgroundColor = "transparent";
        textarea.value=objnota.asunto;

        input.setAttribute("class", "input");
        input.style.height = "20px";
        input.style.width = "100px";
        input.style.marginLeft = "10px";
        input.style.marginTop = "6px";
        input.style.backgroundColor = "transparent";
        input.value=objnota.titulo;

        botonBorrar.setAttribute("onClick", "borrarNota(event)");
        botonBorrar.style.marginLeft = "10px";
        botonBorrar.style.marginTop = "4px";

        botonGuardar.setAttribute("onClick", "guardarNota(event)");
        botonGuardar.style.marginLeft = "65px";
    /* FIN ESTILO NOTA */

        contenedor.appendChild(input);
        contenedor.appendChild(textarea);
        contenedor.appendChild(botonBorrar);
        contenedor.appendChild(botonGuardar);

        document.getElementById("notas").appendChild(contenedor);
        numeroNota++;
    
}

document.borrarNota = function(e){
    divid=0;
    divid=e.target.parentNode.id;
    divid--;
    e.target.parentNode.remove();
    listaNotas.splice(divid, 1);
    localStorage.setItem("notas", JSON.stringify(listaNotas)); 
}

function guardarNota(e){
    guardarid=0;
    guardarid=e.target.parentNode.id;
    guardarid--;
    guardartitulo=e.target.parentNode.querySelector(".input");
    guardartitulo=guardartitulo.value;

    guardarasunto=e.target.parentNode.querySelector(".textarea");
    guardarasunto=guardarasunto.value;

    listaNotas[guardarid].titulo=guardartitulo;
    listaNotas[guardarid].asunto=guardarasunto;

    //console.log(guardartitulo);
    //console.log(guardarasunto);
    fecha=Date.now(); 
    localStorage.setItem("notas", JSON.stringify(listaNotas));

}

var clickado=false;


function mover(){

    if (clickado){
    let evento= window.event;
    let x= evento.clientX;
    let y= evento.clientY;
    //div= document.getElementById(numeroencontrarNota);
    div=evento1.target;
    altocontenedor=document.getElementById("cabecera").clientHeight;
    //altocontenedor=altocontenedor;
    anchocontenedor=document.getElementById("cabecera").clientWidth;
    x1=x-incrX;
    y1=y-incrY-altocontenedor;
    y1=y1+"px";
    x1=x1+"px";
    div.style.top=y1;
    div.style.left=x1;
    }
}

function pinchar(){
    //document.getElementById("img");
    evento1=window.event;
    clickado = !clickado;
    incrX=evento1.clientX-evento1.target.offsetLeft;
    incrY=evento1.clientY-evento1.target.offsetTop;
}

/*
    document.encontrarNota = function(e){
     numeroencontrarNota=e.target.id;
     console.log(numeroencontrarNota);
}*/
