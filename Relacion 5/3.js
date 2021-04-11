function myfuncion(){
    let evento= window.event;
    let idElemento=evento.target.id;
    x= document.createElement("p");
    x.innerHTML= "Has creado una p";
    document.getElementById(idElemento).appendChild(x);
}