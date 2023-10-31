



//obtengo el boton para añadirle un evento
let boton = document.getElementById("anadir");
boton.addEventListener("click",anadirElemetno);
let eliminar= document.getElementById("eliminar");
eliminar.addEventListener("click",limpiar)


let elementos =[];

let ultimoElemento;

guardarElementoHtml();
function anadirElemetno(params) {
    //obtengo el ariculo
    let articulo = document.getElementById("articulo");

    ultimoElemento=articulo.value;
    if(!elementos.includes(articulo.value)){
        elementos.push(articulo.value);
        Swal.fire(
            'buen Trabajo!',
            'Acepta para continuar',
            'success'
          )
  
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    
    console.log(elementos)
    borrar();
    dibujar();
    
}

function borrar(params) {

    let hijos = document.querySelectorAll("#lista li");
    hijos.forEach(elemento=>{
    elemento.remove();
    })
    //elementos.splice(0,elementos.length)
}

function guardarElementoHtml(params) {
    let li = document.querySelectorAll("#lista li");

    li.forEach(elemento=>{
        elementos.push(elemento.innerHTML);
    })
}


function dibujar(params) {
    elementos.sort();
    let padre = document.getElementById("lista");

    elementos.forEach(a=>{
        let li= document.createElement("li");
        
        li.innerHTML=a;
        //añadimos el  evento a los li
        li.addEventListener("dblclick",eliminarLi);

        //añadir clase veerde si es el ultimo 
        if(a === ultimoElemento){
            li.classList.add("rojo")

        }
        padre.appendChild(li)

        
    });

    
}

function eliminarLi(){
    this.remove();


    elementos=elementos.filter(elemento=>{
        return elemento !== this.innerHTML;
    });
console.log(elementos)

}




function limpiar(params) {
    document.getElementById("articulo").value="";
    elementos=[];
    borrar();

}