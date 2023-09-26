const MAX = 100;
console.log("hda")
function getRandomint(max){
    return Math.floor(Math.random*max)
}

/**
 * funcion para generall valores aleatorio
 * @param {*} max 
 * @returns un valor aleatorio entre 0 y maximo
 */

let generarValorAleatorio = (max)=>{
    return Math.floor(Math.random()*max);
}



let aleatorio = generarValorAleatorio(MAX);
valorUsuario= parseInt(prompt("Especifica un valor"));
let cont = 0;
while(isNaN(valorUsuario) === true){
    

while (isNaN(valorUsuario) ===false ){
    cont++;
    if(valorUsuario===aleatorio){
        console.log(`
        +++++++++++++++++++++
         *****************HAS ACERTADO**************************
            ***HAS necesitado ${cont} intentos
        `)
        break
    }
    
    if(valorUsuario < aleatorio){
        console.log(`el valor introducido es menor al alea`)
    }else{
        console.log(`el valor  es mayor que alea`)
       
    }
    valorUsuario= parseInt( prompt("Especifica un valor"));
    
}
}
