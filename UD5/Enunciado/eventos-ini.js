var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

let boton = document.getElementById("idEnviar")
boton.addEventListener("click", validarInformacion);

let formulario = document.getElementById("idFormulario")


function validarInformacion(e) {
    let span = document.querySelectorAll("span");
    console.log(span)
    span.forEach(e => {
        e.innerHTML = ""
    });

    this.disabled = true;
    //limpio el contenido del span
    if (validarAPIHTML(e) && confirm("¿Deseas enviar el formulario?")) {

        return true;

    } else {
        e.preventDefault();
        this.disabled = false;
        return false;
    }
}

function validarAPIHTML(e) {

    return validarNombreHTML() && validarEdadHTML();

}

function validarJS(e) {

    return validarNombre() && validarEdad() && validarTextarea()
}

function validarEdad() {
    let zonaError = document.getElementById("edad")
    let edad = formulario["idEdad"].value

    if (isNaN(edad)) {
        zonaError.innerHTML = "Especifica un valor numerico"
        return false;
    }

    if (edad <= 18 || edad >= 99) {
        zonaError.innerHTML = "Tamaño incorrecto"
        return false
    }

    //console.log(formulario["idEdad"])
    console.log("Pendiente de programar, validar Edad")
    return true
}

function validarNombre() {
    let nombre = formulario["idNombre"].value.trim()
    let zonaError = document.getElementById("idErrorNombre")

    let mensajeNombre = nombre.length > 10 || nombre.length < 5 ? "tamaño incorggrecto..." : ""

    console.log(mensajeNombre)
    if (nombre === "") {

        zonaError.innerHTML = "campo Vacio"
        return false;
    }

    if (nombre.length > 30 || nombre.length < 5) {
        zonaError.innerHTML = "tamaño incorrecto..."
        return false;
    }




    console.log("Pendiente de programar, validar nombre")
    return true
}



function validarTextarea(params) {

    let textArea = formulario["idMensaje"].value
    console.log(textArea + "dsfdsfdf-----------")
    let zonaError = document.getElementById("idMensaje")

    if (textArea = "") {
        zonaError.innerHTML = "Debe enviar algo";
        return false;
    }

    if (textArea.length > 500) {
        zonaError.innerHTML = "Demasiados caracteres";
        return false;
    }

    return true;

}

function validarNombreHTML() {
    let inputNombre = formulario["idNombre"];
    
    if (inputNombre.validity.valueMissing) {
        let mensajeError = "no puede estar en blanco"
        inputNombre.classL = "errorInput";
        inputNombre.focus();

    }
}