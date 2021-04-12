//El array que recibimos son los TD
function crearTabla(array)
{
    table=document.createElement("table");
    table.id="mitable";
    div=document.getElementById("midiv");
    div.appendChild(table);

    for(let j=0;j<array.length;j++){
    tr=document.createElement("tr");
    //tr.id="mitr";
    table.appendChild(tr);
        for(let i=0;i<array[j].length;i++){
            td=document.createElement("td");
            td.innerHTML=array[j][i];
            tr.appendChild(td);
        }        
    }
}

function inicio(){
arr = []

crearTabla(arr);
}
/*

<table>
    <tr>
    <td></td>
    <td></td>
    </tr>
</table>

*/