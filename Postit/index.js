window.onload= function()
{
    aux = localStorage.getItem("notas");
    if (aux)
    {
        listaNotas = aux;
        //crearPostit(listaNotas);
       // hay notas previas -> maquetarlas
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

var listaNotas=[], numeroNota=1;

function crear(){
    titulo=document.querySelector("#titulo");
    titulo=titulo.value;
    textarea=document.querySelector("#asunto");
    textarea=textarea.value;
    fecha=Date.now(); 
    listaNotas.push(new Nota(numeroNota, titulo, textarea, fecha));
    numeroNota++;

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

        textarea.setAttribute("class", "textarea");
        textarea.style.height = "140px";
        textarea.style.width = "180px";
        textarea.style.margin = "7px";
        textarea.style.resize= "none";
        textarea.style.backgroundColor = "transparent";

        input.setAttribute("class", "input");
        input.style.height = "20px";
        input.style.width = "100px";
        input.style.marginLeft = "10px";
        input.style.marginTop = "6px";
        input.style.backgroundColor = "transparent";

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

function enseñarPostit(array){
    // 
    for(let i=0;array.length;i++){
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

        textarea.setAttribute("class", "textarea");
        textarea.style.height = "140px";
        textarea.style.width = "180px";
        textarea.style.margin = "7px";
        textarea.style.resize= "none";
        textarea.style.backgroundColor = "transparent";

        input.setAttribute("class", "input");
        input.style.height = "20px";
        input.style.width = "100px";
        input.style.marginLeft = "10px";
        input.style.marginTop = "6px";
        input.style.backgroundColor = "transparent";

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
    
}

document.borrarNota = function(e){
    e.target.parentNode.remove();
}

function guardarNota(e){
    guardarid=e.target.parentNode.id;
    guardartitulo=document.querySelector(".input");
    guardartitulo=guardartitulo.value;

    guardarasunto=document.querySelector(".textarea");
    guardarasunto=guardarasunto.value;

    //console.log(guardartitulo);
    //console.log(guardarasunto);
    fecha=Date.now(); 
    let nNota= new Nota(guardarid, guardartitulo, guardarasunto, fecha);
    listaNotas.push(nNota);
    localStorage.setItem("notas", JSON.stringify(listaNotas));

    /*titulo.value= "";
    asunto.value= ""; */

}

var clickado=false,numeroencontrarNota;
function mover(){

    if (clickado){
    let evento= window.event;
    let x= evento.clientX;
    let y= evento.clientY;
    div= document.getElementById(numeroencontrarNota);
    x1=x-incrX;
    y1=y-incrY;
    y1=y1+"px";
    x1=x1+"px";
    div.style.top=y1;
    duv.style.left=x1;
    }
}

function pinchar(){
    //document.getElementById("img");
    evento1=window.event;
    clickado = !clickado;
    incrX=(evento1.clientX)-img.x;
    incrY=evento1.clientY-img.y;
}

    document.encontrarNota = function(e){
     numeroencontrarNota=e.target.id;
     console.log(numeroencontrarNota);
}
