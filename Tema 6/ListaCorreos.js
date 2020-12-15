function NuevoCorreo(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState == 4 && this.status== 200){
            maquetaRespuesta(JSON.parse(this.responseText));
        }
    }

    xhttp.open("GET", "ListaCorreos.txt", true);
    xhttp.send();
}

function maquetaRespuesta(objetoJSON){

};