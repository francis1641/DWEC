function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos = JSON.parse(this.responseText);
       document.getElementById("midiv").innerHTML= misDatos.Nombre;
      }
    };
    xhttp.open("GET", "1.JSON", true);
    xhttp.send();
}