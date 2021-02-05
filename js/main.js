var url = "./js/datos.json";
var app = new Vue({
    el: "#app",

    mounted: function(){
        this.obtenerInfo();
    },
    data () {
        return {
            datos: [],
            es: true,
            en: false
        }
     },
    
    methods: {
        cambioEN: function ()  {
            this.en = true;
            this.es = false;
        },

        cambioES: function () {
            this.en = false;
            this.es = true;

        },
        obtenerInfo: function(){
            axios.get("./js/datos.json").then((response) => {
                this.datos = response.data

            })
            .catch(function (error){
                console.log(error);
            });
        }
    }
});