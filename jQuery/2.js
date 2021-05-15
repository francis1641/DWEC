function ocultar(){
    $("button").hide();
}
$( document ).ready(function() {
    console.log( "ready!" );$("button").click(ocultar);
});