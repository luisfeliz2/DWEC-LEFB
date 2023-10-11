
function frases (){
    let frase=prompt("Intoduce una frase");
    let array = frase.split(" ");
    console.log("la frase comienza con la palabra "+array[0])
    console.log("la frase termina con la palabra "+array[array.length-1]);
    console.log("El numero de palabra es "+array.length)
}