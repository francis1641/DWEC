function prueba(){
    let evento= window.event;
    console.log(evento);
    let valor= evento.target.value;
    let valor2= valor*valor;
    let valor3= valor*valor*valor;
    document.form.number2= valor2;
}