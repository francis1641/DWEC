window.onload = () =>
{
    bola= document.getElementById("bola");
    bola2= document.getElementById("bola2");
    bola3= document.getElementById("bola3");
    setInterval(anima, 30);
}
var bola, bola2;
var posX=0, posY=0;
var incX=3;

function anima(){
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
    posX+=incX;
    posY++;
   /*if(posX >=400 || posX<=0)
    incX*=-1;*/
    bola2.setAttribute("cy", posY);
    posY++;

    //DETECTAR COLISIONES
   tamanoSVG= document.getElementsByTagName("svg")[0].getBoundingClientRect();
    if(posX<=0 || posX>= tamanoSVG.width){
        incX*=-1;
    }
}

/*
//CREAR BOLAS
let circ= document.createElementNS("circle");
circ.cx="20";
circ.cy="10";
circ.r="5";
circ.fill="red";

document.getElementsByTagName("svg")[0].appendChild("circle");
*/
