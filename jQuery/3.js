function ocultar(){
    $(".intro").hide();
}
$( document ).ready(function() {
    console.log( "ready!" );$("button").click(ocultar);
});