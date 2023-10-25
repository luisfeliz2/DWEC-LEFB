let boton = document.getElementById("idEnviar")
boton.addEventListener("click",insertarCheckbox);

function insertarCheckbox(params) {

    let cantidad = parseInt(document.getElementById("contenido").value)
        let padre = document.getElementById("contenido")

    for (let index = 1; index < cantidad; index++) {
        let random = Math.random;        
        let check = document.createElement("input");
       let span = document.createElement("span");
        let br = document.createElement("br");
 
        check.setAttribute("type","checkbox")
        span.innerHTML=random;
        check.setAttribute("value",value);

        padre.appendChild(check)
        padre.appendChild(span)
        padre.appendChild(br)
        
        
    }
}


