class Contacto{
    constructor(nombre, direccion, telefono, email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
  }


class Agenda{
    constructor(){
        this.listaAgenda = new Array();
    }

    introducirContacto(nombre, direccion, telefono, email){
        let nContacto= new Contacto(nombre, direccion, telefono, email);
        this.listaAgenda.push(nContacto);
    }

    mostrarContacto(nombreElegido){
        for(let i=0;i<this.listaAgenda.length;i++){
            if(lista[i].nombre==nombreElegido)
                console.log(this.listaAgenda[i].nombre);
        }
    }

    MostrarTodos(){
        this.listaAgenda.sort();
        for(let i=0;i<this.listaAgenda.length;i++){
                console.log(this.listaAgenda[i].nombre);
        }
    }

    borrarContacto(nombreElegido){
        let index=0;
        for(let i=0;i<this.listaAgenda.length;i++){
            if(this.listaAgenda[i].nombre==nombreElegido)
                index=i;
        }
        let removed= this.listaAgenda.splice(index, 1);
    }
}

NuevaAgenda= new Agenda();

NuevaAgenda.introducirContacto("Francis", "CPinos", 1235, "francis@gmail.com");
NuevaAgenda.introducirContacto("David", "C Almendra", 4232, "david@gmail.com");
NuevaAgenda.introducirContacto("Jose", "C Loco", 2413, "jose@gmail.com");