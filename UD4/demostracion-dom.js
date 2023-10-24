function anadirElemento() {
    let contenido = document.getElementById("contenido").value;

    if(contenido !== ""){

    
        //elemento creado
        let elemento = document.createElement("li");
        elemento.innerHTML=`Nuevo Elemento:${contenido}`
        //le añadimos una clase
        elemento.classList.add("rojo")
        //damos atributo extras
        elemento.setAttribute("title",contenido);
        elemento.setAttribute("id",`id${contenido}`)
        //recuperar padre
        let padre = document.getElementById("lista");
        
        //Especicar evento
        //añadir un elemento que al darle click
        elemento.addEventListener("dblclick",function(){
            this.remove()
        });
        

        // elemento.forEach(item =>){
        //     item.addEventListener("dblclick",()=>{
        //         item.remove();
        //     })
        // }
        
        //añado al padre
        padre.appendChild(elemento);
    }
    else{
        alert("especifica un contenido");
    }
    

}

//create element setAtrribute .classslist.add("rojo") inner

function limpiarLista() {
    let nodo = document.querySelectorAll("ul#lista li");
    nodo.forEach(
        elemento=>elemento.remove()    

    )

}