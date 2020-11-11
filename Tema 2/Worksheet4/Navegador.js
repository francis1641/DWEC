var navegador=window.navigator;
var table="<table>";
for(propiedad in navegador){
    table+="<tr><td>"+propiedad+"</td><td>"+navegador[propiedad]+"</td></tr>";
}
table+="</table>";
document.write(table);


var pantalla=window.screen;
var table="<table>";
for(propiedad in pantalla)
    table+="<tr><td>"+propiedad+"</td><td>"+pantalla[propiedad]+"</td></tr>";
table+="</table>";
document.write(table);