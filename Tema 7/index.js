var app = new Vue({
    el: '#miAplicacion',
    data: {
      nuevoRecordatorio: "",
      listaRecordatorio: [],
      isButtomDisabled: true
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
        cambiarEstadoTarea: function(posicion){
            //this.listaRecordatorio.splice(posicion,1);
            if(this.listaRecordatorio[posicion].completado)
                this.listaRecordatorio[posicion].completado=false;
            else this.listaRecordatorio[posicion].completado=true;

        },

        habilitarBoton: function(){
            if(this.nuevoRecordatorio.length>0)
                this.isButtomDisabled=false;
            else 
                this.isButtomDisabled=true;
        },
        quitarCompletadas: function(){
            for(let i=0; i<this.listaRecordatorio.length; i++){
                if(this.listaRecordatorio[i].completado)
                this.listaRecordatorio.splice(i,1);
            }
        }
    },
    computed: {
        totalTareas: function(){
           return this.listaRecordatorio.length
        },

        totalPendientes: function(){
            let total=0;

            for(let i=0; i<this.listaRecordatorio.length; i++){
                if(!this.listaRecordatorio[i].completado)
                total+=1;
            }

            return total;
        },


    }
  })