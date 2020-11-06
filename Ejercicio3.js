var contador= 60;

function imprime(){
    console.log("contador");
    contador--;
    if(contador>0)
    setTimeout(imprime,1000); //ESTO LO METE DENTRO DE SU 
                              //PROPIA FUNCION PARA VOLVERLA A LLAMARLA INDEFINIDAMENTE
} 
setTimeout(imprime, 10000) //ESTO ES UNA FUNCION CON NOMBRE
/*
setTimeout( function(){
    console.log("Entra en funcion");
   }   ,4000); //ESTO LO MISMO PERO CON UNA FUNCION ANONIMA

setTimeout( () => console.log("Entra en funcion"), 4000) */