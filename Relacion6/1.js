function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 1){
        document.getElementById("miimagen").style.visibility="visible";
      }
      if (this.readyState == 4 && this.status == 200) {  
        document.getElementById("miimagen").style.visibility="hidden";
        h1=document.createElement("h1");
        h1.innerHTML="Cargado";
        document.getElementById("midiv").appendChild(h1);
        //img = this.responseText;
       //document.getElementById("midiv").innerHTML=;
      }
    };
    xhttp.open("GET", "index.php", true);
    xhttp.send();
}