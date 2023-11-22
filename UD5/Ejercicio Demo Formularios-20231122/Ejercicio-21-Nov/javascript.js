/*hola*/
alert("hola")
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["miFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e){    
    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName y CustomMessage
    for (let i=0; i<formulario.elements.length; i++){
        formulario.elements[i].classList.remove("errorInput")
        formulario.elements[i].setCustomValidity("")
    }

    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Span de error        
    document.querySelectorAll(".errorSpan").forEach(e=>e.innerHTML="");
        
    // IMPORTANTE!!! Deshabilitamos el botón
    this.disabled = true;


    if(validarAPIHTML(e) && (e) && confirm("¿Deseas enviar el formulario?")){           
        return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false;
    }
}
/********************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************/

 function validarJS(eventopordefecto) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarEdad() // && validarXXXXX();             
}

/*********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML
 ********************************************************************************************/
 function validarAPIHTML(eventopordefecto) {
    
    return validarNombreAPIHTML() //&& validarXXXXAPIHTML;            

}


/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/

function validarNombreAPIHTML() {
    
    let inputNombre= formulario.elements["idNombre"]    
    let spanNombre=document.getElementById('idNombreError')

    if (inputNombre.validity.valueMissing){     
        
        let mensajeError= `Campo obligatorio`
        
        inputNombre.classList.add("errorInput")
        inputNombre.focus();       
        inputNombre.setCustomValidity(mensajeError);
        spanNombre.innerHTML = inputNombre.validationMessage;
        
        return false;
    }
    return true;
}



