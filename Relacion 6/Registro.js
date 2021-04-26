function loadDoc() {
    var xhttp = new XMLHttpRequest();
    let evento=window.event;
    leidoDelInput = evento.target.value;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos=JSON.parse(this.responseText);
        document.getElementById("h3").innerHTML= misDatos.value;
        if(misDatos.value=="Libre"){
          document.getElementById("h3").style.backgroundColor="rgb(165, 255, 123)";
          document.getElementById("h3").innerHTML='Libre';
          document.getElementById("h3").style.color="green";
        }
          else{
          document.getElementById("h3").style.backgroundColor="rgb(250, 132, 132)";
          document.getElementById("h3").style.color="red";
          }
      }
    };
    xhttp.open("GET","Registro.php?mivariable="+leidoDelInput, true);
    xhttp.send();
}