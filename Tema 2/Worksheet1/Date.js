// Ejercicio 1
var fecha=new Date();
document.write(fecha.getFullYear()+"<br>");
document.write(fecha.getMonth()+"<br>");
document.write(fecha.getDay()+"<br>");
document.write(fecha.getHours()+"<br>");v 
document.write(fecha.getMinutes()+"<br>");
document.write(fecha.getSeconds()+"<br>"); */

/* Ejercicio 2
fechaHoy=new Date();
console.log("fechaHoy"+fechaHoy);
var fecha85 = new Date();
fecha85.setDate(fecha85.getDate()+85);
console.log("Fecha85"+fecha85);
console.log("fechaHoy"+fechaHoy);
*/

/*var fecha187=new Date();
fecha187.setDate(fecha187.getDate()-187);
console.log(fecha187);
fecha85.setFullYear(fecha85.getFullYear()+2);
console.log(fecha85);
console.log(fecha187);
fecha187.setHours(fecha187.getHours()-24);
console.log(fecha187);
var fechaResto=new Date();
fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
console.log(fechaResto); */

/* //Ejercicio 3
var cont=60;
function imprime(){
    console.log(cont);
    cont--;
    if(!cont>=0)
        setTimeout(imprime, 1000);
}
setTimeout(imprime,1000);
 */

/* //Ejercicio 4
var google=document.location;
setTimeout("google.replace('https://www.google.es/?gws_rd=ssl')",3000);  */


/* function reloj1(){
    var fecha = new Date();
    document.relojForm.reloj.value = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    setTimeout(reloj1,1000);
};
reloj1(); */