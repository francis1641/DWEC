function ocultar(){
    $("ul li:first").hide();
    $("ol li:first").hide();
}
$( document ).ready(function() {
    console.log( "ready!" );$("button").click(ocultar);
});