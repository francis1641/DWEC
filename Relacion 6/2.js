function loadDoc() {
    let evento=window.event;
    id=evento.target.id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos = JSON.parse(this.responseText);
        for(let i=0;i<misDatos.length;i++){
            if(misDatos[i]==id)
                document.getElementById("first").innerHTML= misDatos.id;
        }
       
      }
    };
    xhttp.open("GET", "2.JSON", true);
    xhttp.send();
}