window.onload = () =>
{
    bola= document.getElementById("bola");
    bola2= document.getElementById("bola2");

    setInterval(anima, 20);
}
var bola, bola2;
var posX=0, posY=0;
var incX=2;

function anima(){
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
    posX+=incX;
    posY++;
    if(posX >=500 || posX<=0)
    incX*=-1;

    bola2.setAttribute("cy", posY);
    posY++;
}