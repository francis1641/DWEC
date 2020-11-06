class ListaLibros extends Libro{
    NoLeidos= new Array();
    constructor(){
        this.ListaLibros=[];
       //this.LibrosLeidos=[]; 
      //this.NoLeidos=NoLeidos;
    }
        add(book){
            this.ListaLibros.push(book);
        }
        get numbBooksRead(){
            
        }
};

class Libro{
    constructor(Titulo, Genero, Autor){   
        this.Titulo= Titulo;
        this.Genero= Genero;
        this.Autor= Autor;
        this.Leido= false //TRUE O FALSE
        this.FechaLeido= null //PUEDE IR EN BLANCO O NO   
    }
    set añadirLibro(Libro){
        
    }
};