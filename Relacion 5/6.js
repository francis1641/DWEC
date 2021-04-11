//El array que recibimos son los TD
function crearTabla(array){
    table=document.createElement("table");
    table.id="mitable";
    div=document.getElementById("midiv");
    div.appendChild(table);


    tr=document.createElement("tr");
    tr.id="mitr";
    document.getElementById("mitable").appendChild(tr);

    for(let i=0;i<array.length;i++){
        td=document.createElement("td");
        td.innerHTML=array[i];
        document.getElementById("mitr").appendChild(td);
        
    }
}


/*

<table>
    <tr>
    <td></td>
    <td></td>
    </tr>
</table>

*/