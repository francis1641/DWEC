var app = new Vue({
    el: '#app',
    data: {
      NuevoRecordatorio: ' ',
      listaRecordatorio: [],
      estahabilitado: true,
      filtro: ''
    },
    mounted()
      {
          if(localStorage.listaTareas)
          this.listaRecordatorio=JSON.parse(localStorage.listaTareas);
      },
    methods:{
      anadirRecordatorio: function(){
          this.listaRecordatorio.push({
              titulo:this.NuevoRecordatorio,
              prioridad: 0,
              fechaCreacion: new Date(),
              completado: false,
              decoracion: ""
          });
          this.NuevoRecordatorio="";
          this.actualizarLocalStorage();
      },
      cambiarEstado: function(posicion){
        posicion=this.listaRecordatorio.indexOf(this.listaRecordatorioFiltrada[posicion]);
          
          console.log(posicion);
          if(this.listaRecordatorio[posicion].completado== true)
          this.listaRecordatorio.splice(posicion,1);
          this.actualizarLocalStorage();
      },
      completado: function(posicion){
          posicion=this.listaRecordatorio.indexOf(this.listaRecordatorioFiltrada[posicion]);
          
          if( this.listaRecordatorio[posicion].completado== true){
          console.log(posicion);
          this.listaRecordatorio[posicion].completado= false;
          this.listaRecordatorio[posicion].decoracion= " ";
          }else{
              this.listaRecordatorio[posicion].completado= true;
              this.listaRecordatorio[posicion].decoracion= "line-throught";
          }
          this.actualizarLocalStorage();
      },
      habilitar: function(){
       if(this.NuevoRecordatorio.length>0){
         this.estahabilitado= false;
       }else{
         this.estahabilitado=true;
       }
       this.actualizarLocalStorage();
      },
      borrarcompletadas: function(){
        this.listaRecordatorio=this.listaRecordatorio.filter((nota)=>{
        if( nota.completado==false)
         return true;
        });
        this.actualizarLocalStorage();
        
      },
      actualizarLocalStorage: function()
      {
          localStorage.listaTareas= JSON.stringify(this.listaRecordatorio);
      }
    },
    computed:{
      totaltareas: function(){
        return this.listaRecordatorio.length;
      },
      pendientes: function(){
      let total = 0;
      for(i=0; i<this.listaRecordatorio.length; i++){
        if(this.listaRecordatorio[i].completado==false)
        total++;
      }
      return total;
      },
      listaRecordatorioFiltrada: function(){
        if(this.filtro==''){
          return this.listaRecordatorio;
        }
        return this.listaRecordatorio.filter((recordatorio)=>{
          if(recordatorio.titulo.indexOf(this.filtro)>=0)
          return true;
          else{
            return false;
          }
        })
      }
    }
    
  })