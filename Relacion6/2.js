function loadDoc() {
    let evento=window.event;
    id=evento.target.id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos =this.responseText;
       console.log(misDatos);
       evento.target.firstChild.innerHTML=misDatos;
      }
    };
    xhttp.open("GET",id, true);
    xhttp.send();
}