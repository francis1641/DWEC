function myfuncion(){
    let evento= window.event;
    console.log(evento);
    let x= evento.clientX;
    let y= evento.clientY;
    img= document.getElementById("img");
    console.log(img);
    x1=x+"px";
    y1=y+"px";
    img.top=x1;
    img.left=y1;
}
