function boton1(){
    alert($("head").html())
}

function boton2(){
    alert($("body").html())
}

function parrafo1(){
    alert("Has pulsado el parrafo")
}

function parrafo2(){
    $("#parrafo2").hide();
}

function anadircaracter(){
    $("li").prepend("#");
}

function ocultar(){
    $("li").click(function(){
        $(this).hide();
      });
}

function cambiarTexto(){
    $("a").text("Enlace");
}

function cambiarColor(){
    $(".color").click(function(){
        $(this).attr("style", "background: blue");
      });
}

function ocultarFila(){
    $(".fila").click(function(){
        $(this).hide();
      });
}

$(document).ready(function() {
    alert("ready!");
    anadircaracter();
    $("#boton1").click(boton1);
    $("#boton2").click(boton2);
    $("#parrafo1").click(parrafo1);
    $("#parrafo2").click(parrafo2);
    ocultar();
    cambiarTexto();
    cambiarColor();
    ocultarFila();
});