var Agenda = new Array();

function Contacto(nombre, direccion, telefono, email) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
  }



function introducirContacto(nombre, direccion, telefono, email){
    nContacto= new Contacto(nombre, direccion, telefono, email);
    Agenda.push(nContacto);
    nContacto;
}

function mostrarContacto(nombreElegido){
    for(let i=0;i<Agenda.length;i++){
        if(Agenda[i].nombre==nombreElegido)
            console.log(Agenda[i].nombre);
    }
}

// PREGUNTAR COMO HACERLO ALFABETICAMENTE
function MostrarTodos(){
    Agenda.sort();
    for(let i=0;i<Agenda.length;i++){
            console.log(Agenda[i].nombre);
    }
}

function borrarContacto(nombreElegido){
    let index=0;
    for(let i=0;i<Agenda.length;i++){
        if(Agenda[i].nombre==nombreElegido)
            index=i;
    }
    let removed= Agenda.splice(index, 1);
}

introducirContacto("Francis", "CPinos", 1235, "francis@gmail.com");
introducirContacto("David", "C Almendra", 4232, "david@gmail.com");
introducirContacto("Jose", "C Loco", 2413, "jose@gmail.com");