/*hola*/

// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar);
let formulario=document.forms["miFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e){
    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName y CustomMessage
    //limpieza
    for (let i=0; i<formulario.length; i++){
        formulario.elements[i].classList.remove("errorInput")
        formulario.elements[i].setCustomValidity("")
    }

    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Span de error        
    document.querySelectorAll(".errorSpan").forEach(e=>e.innerHTML="");
        
    // IMPORTANTE!!! Deshabilitamos el botón
    this.disabled = true;
    console.log("llega hasta aqui")

    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){           
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
    return validarEdad() && validarJSInteres()// && validarCorreo();          
    
    
}
function validarEdad(){
    return true
}
function validarJSInteres(params) {
    
    let interes = new Set(["deportes","musica","viaje","y-mas"]);
    let valorInteres = formulario.querySelectorAll("input[type='checkbox']")
    let valorSpam = document.getElementById("idInteresesError")


    // let valorInteres2= formulario.querySelectorAll("input[name='interes']")
    // let valorInteres3 = formulario["interes"];

    let selecionado = 0;
    let error="";
    valorInteres.forEach(chechk =>{
        if (chechk.checked ===true) {
            selecionado += 1
            if (interes.has(chechk.value)===false) {
                error +=`El valor; ${chechk.value},no existe; `
            }
        }
    })

    if (selecionado===0) {
        valorSpam.innerHTML="Debes selecionar un interes....."
        return false
        
    }

    if (error!=="") {

        valorSpam.innerHTML=error
        console.log(error)
        return false
    }

    return true
}

/*********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML
 ********************************************************************************************/
 function validarAPIHTML(eventopordefecto) {
    
    return validarNombreAPIHTML() && validarEdadAPIHTML();            

}


/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/

function validarEdadAPIHTML(params) {
    
    let inputEdad = formulario["idEdad"];
    let span = document.getElementById("idEdadError")


    if (inputEdad.validity.valueMissing){

        let mensajeError ="Campo obligatorio"
        inputEdad.focus()
        inputEdad.setCustomValidity(mensajeError)
        span.innerHTML=inputEdad.validationMessage

    }else if(inputEdad.validity.rangeUnderflow){

        let mensajeError ="valor debe debe ser mayor de 18"
        inputEdad.focus()
        inputEdad.setCustomValidity(mensajeError)
        span.innerHTML=inputEdad.validationMessage
    }else if(inputEdad.validity.rangeOverflow){

        let mensajeError ="valor debe debe ser menor de 100"
        inputEdad.focus()
        inputEdad.setCustomValidity(mensajeError)
        span.innerHTML=inputEdad.validationMessage
        
    }





    return false




}




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



