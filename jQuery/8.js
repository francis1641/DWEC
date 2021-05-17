  var  tamaño= 1;
  $( document ).ready(function() {
    console.log( "ready!" );
    $("#disminuir").click(menos);
    $("#aumentar").click(mas);
    ocultarTexto();
    cambiarColor();
});

function mas(){
    if(tamaño!=1.75){
        tamaño=tamaño+0.25;
        $(".contenedor").attr("style", "font-size: "+tamaño+"rem")
        }
        else{
            alert("No se puede hacer mas grande");
        }
}

function menos(){
    if(tamaño!=0.25){
        tamaño=tamaño-0.25;
        $(".contenedor").attr("style", "font-size: "+tamaño+"rem")
        }
        else{
            alert("No se puede hacer mas pequeño");
        }
}

function ocultar(){
    $("title").click(function(){
        $("texto").toggle();
      });
}

function ocultarTexto(){
    $("header").click(function(){
        $(this).siblings().slideToggle("slow");
      });
}
function cambiarColor(){
    $("p").mouseenter(function(){
        $(this).attr("style", "background: black; color:white");
      });
      $("p").mouseleave(function(){
        $(this).attr("style", "background: white");
      });
}