function ocultar(){
    $("ul li:first").hide();
}
$( document ).ready(function() {
    console.log( "ready!" );$("button").click(ocultar);
});