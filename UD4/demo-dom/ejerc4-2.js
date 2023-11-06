function insertarElementoAleatorio(){
    //crear  un nuevo elemento de la lista 
    let nuevoElemento = document.createElement("li");

    //generar un numero aleatirio entre 1 y 100 ;
    let nuevoAleatorio = Math.floor(Math.random()*100);

    //asignar el numero aleatorio al nuevo elemento de la lista
    nuevoElemento.appendChild(document.createTextNode("Elemento "+nuevoAleatorio));

    //obtener la lista desordenada
    var lista = document.getElementById("lista");

    //insertar el nuevo elemeto al final de la lista desordenada
    lista.appendChild(nuevoElemento);
}

let botonInsertar = document.getElementById("insertarAleatorio");

botonInsertar.addEventListener("click",insertarElementoAleatorio);