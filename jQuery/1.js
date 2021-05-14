function ocultar(){
    $("header").hide();
    $("p").hide(); 
}
$( document ).ready(function() {
    console.log( "ready!" );$("button").click(ocultar);
});

