var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

let boton = document.getElementById("idEnviar")
boton.addEventListener("click", validarInformacion);

let formulario=document.getElementById("idFormulario")


function validarInformacion(e){    


     this.disabled = true;
   
    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){
        
        return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false;
    }    
}

function validarAPIHTML(e){

    console.log("Pendiente de implementar")
    
    return true
}

function validarJS(e){
    
    return validarNombre() && validarEdad()
}

function validarEdad(){
    let zonaError =  document.getElementById("idErrorNombre")
    let edad = formulario["idEdad"].value

    if(isNaN(edad)){
        zonaError.innerHTML="Especifica un valor numerico"
    }

    if(edad >=18 || edad <= 99){
        zonaError.innerHTML="Tamaño incorrecto"
        return false
    }

    //console.log(formulario["idEdad"])
    console.log("Pendiente de programar, validar Edad")
    return true
}

function validarNombre(){
    let nombre = formulario["idNombre"].value.trim()
    let zonaError= document.getElementById("idErrorNombre")
    let mensajeNombre = nombre.length > 10 || nombre.length <5 ? "tamaño incorggrecto..." : ""
    console.log(mensajeNombre)
    if(nombre === ""){
        
        zonaError.innerHTML="campo Vacio"
        return false;
    }
    
    if (nombre.length  > 30 || nombre.length <5){  
        zonaError.innerHTML="tamaño incorrecto..."
        return false;
    }
    



    console.log("Pendiente de programar, validar nombre")
    return true
}