function loadDoc() {
    evento=window.event;
    id=evento.target.id;
    valor1=document.getElementById("primero").value;
    valor2=document.getElementById("segundo").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos= JSON.parse(this.responseText);
        document.getElementById("3input").value= misDatos.resultado;
      }
    };
    xhttp.open("GET", "Calculadora.php?mivariable="+id+"&valor1="+valor1+"&valor2="+valor2, true);
    xhttp.send();
}

//"Calculadora.php?mivariable="+id+"&valor1="+valor1+"&valor2="+valor2