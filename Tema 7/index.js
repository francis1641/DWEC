var app = new Vue({
    el: '#miAplicacion',
    data: {
      nuevoRecordatorio: "",
      listaRecordatorio: []
    },

    methods:{
        anadirRecordatorio: function(){
            this.listaRecordatorio.push(
                {titulo:this.nuevoRecordatorio,
                 prioridad: 0,
                 fechaCreacion: new Date(),
                 completado:false
                }          
        );
        this.nuevoRecordatorio="";
        },
        borrarTodo: function(){
            
        },
        cambiarEstadoTarea: function(posicion){
            this.listaRecordatorio.splice(posicion,1);
        }
    }
  })