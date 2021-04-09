function prueba(){
    let evento= window.event;
    console.log(evento);
    let valor= evento.target.value;
    let valor2= valor*valor;
    let valor3= valor*valor*valor;
    a=document.getElementsByTagName("input");
    a[1].value=valor2;
   

    h1= document.createElement("h1");
    h1.innerHTML= valor3;
    document.getElementById("midiv").appendChild(h1);
    //document.body.appendChild(h1);
}