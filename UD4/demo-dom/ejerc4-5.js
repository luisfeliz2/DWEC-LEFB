



//obtengo el boton para añadirle un evento
let boton = document.getElementById("anadir");
boton.addEventListener("click",anadirElemetno);


let elementos =[];

function anadirElemetno(params) {
    //obtengo el ariculo
    let articulo = document.getElementById("articulo");

    elementos.push(articulo.value);
  
    console.log(elementos)
    
    dibujar();
    borrar();
}

function borrar(params) {
    elementos.splice(0,elementos.length)
}



function dibujar(params) {
    elementos.sort();
    elementos.forEach(a=>{
        let li= document.createElement("li");
        li.innerHTML=a;
        let padre = document.getElementById("lista");
        padre.appendChild(li)

        
    });

    
}