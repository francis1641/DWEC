function fondoColor(e){
    var e=window.event;
    console.log(e);
    let color=e.target.id;
    document.body.style.backgroundColor= color;
}

function fondoBlanco(){
    document.body.style.backgroundColor= "white";
}