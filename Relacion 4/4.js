var clickado=false;
function myfuncion(){

    if (clickado){
    let evento= window.event;
   // console.log(evento);
    let x= evento.clientX;
    let y= evento.clientY;
    img= document.getElementById("img");
 //   console.log(img);
    x1=x-incrX;
    y1=y-incrY;
    y1=y1+"px";
    x1=x1+"px";
    img.style.top=y1;
    img.style.left=x1;
    }
}

function pinchar(){
    //document.getElementById("img");
    evento1=window.event;
    clickado = !clickado;
    incrX=(evento1.clientX)-img.x;
    incrY=evento1.clientY-img.y;
    /*
    if(!clickado)
    clickado=true;
    else clickado=false;    */
}
