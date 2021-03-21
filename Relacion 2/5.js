var CatalogoProductos= new Array();
var Empleados1= new Array();
var nombreGlobal='';
function Producto(nombre, precio, unidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidad = unidad;
  }

  function Empleados(nombre, telefono, descuento) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.descuento = descuento;
  }

  function introducirProducto(nombre, precio, unidad){
    nProducto= new Producto(nombre, precio, unidad);
    CatalogoProductos.push(nProducto);
}

function introducirEmpleados(nombre, telefono, descuento){
    nEmpleado= new Empleados(nombre, telefono, descuento);
    Empleados1.push(nEmpleado);
}

function identificarEmpleado(nombreElegido){
    let encontrado=false;
    for(let i=0;i<Empleados1.length;i++){
        if(Empleados1[i].nombre==nombreElegido){
            console.log("Se ha identificado en la caja el empleado "+Empleados1[i].nombre);
            nombreGlobal=Empleados1[i].nombre;
        }
        else 
            if(encontrado==true)
            console.log("No se ha podido encontrar al empleado");
    }
}

function IniciarCuenta(){
    console.log(scan());
}

function FinalizarCuenta(){
    let suma=0, descuentaje=0, resultadototal=0;
        for(let i=0; i<CatalogoProductos.length;i++)
        suma+=CatalogoProductos[i].unidad*CatalogoProductos[i].precio;
        for(let i=0;i<Empleados1.length;i++)
            if(Empleados1[i].nombre==nombreGlobal)
            descuentaje=Empleados1[i].descuento;
    resultadototal=suma-(suma*descuentaje/100);
    console.log("La cuenta final es "+suma);
    console.log("El descuento es del "+descuentaje+"%");
    console.log("La cuenta final con el desucento es "+resultadototal);
}   

function scan(){

    for(let i=0; i<CatalogoProductos.length;i++)
         console.log("Usted ha pedido "+CatalogoProductos[i].nombre+" con un valor de "+CatalogoProductos[i].precio+" y has pedido "+CatalogoProductos[i].unidad+" unidades");

    /*let suma=0;
        for(let i=0; i<CatalogoProductos.length;i++)
        suma+=CatalogoProductos[i].unidad*CatalogoProductos[i].precio;
    return suma;*/
}

introducirProducto("Espinacas", 3, 1);
introducirProducto("Arroz", 1, 5);
introducirProducto("Pollo", 7, 6);

introducirEmpleados("Francis", 789456, 10);
introducirEmpleados("David", 4232, 20);
introducirEmpleados("Jose", 2413, 50);

