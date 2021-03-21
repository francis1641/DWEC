var eleccionusuario=1;
function Juego(eleccion){
    // 1: PIEDRA, 2: PAPEL, 3: TIJERA
    console.log("Hemos decidido que 1:PIEDRA, 2:PAPEL, 3:TIJERA")
    console.log(a1+" eleccion de la maquina");
    console.log(eleccionusuario+ " eleccion usuario")
    switch(eleccion){
        case 1: 
            if(a1==1) console.log("Ambos han sacado piedra");
            else{
                if(a1==2) console.log("Ha ganado la maquina")
                else console.log("Ha ganado el usuario")
            }
            break;
        case 2: 
            if(a1==1) console.log("Ha ganado el usuario");
            else{
                if(a1==2) console.log("Ambos han sacado papel")
                else console.log("Ha ganado la maquina")
            }
           break;
        case 3: 
            if(a1==1) console.log("Ha ganado la maquina");
            else{
                if(a1==2) console.log("Ha ganado la maquina")
                else console.log("Ambos han sacado tijeras")
            }
            break;
        default: 
            console.log("No ha elegido un numero bien");
            break;
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
var a=getRandomArbitrary(1,3);
a1=Math.trunc(a);
Juego(eleccionusuario);