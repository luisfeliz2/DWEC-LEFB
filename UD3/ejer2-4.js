

let fechaActual=()=>{
    let fecha = new Date().toLocaleDateString('es', { weekday:"long", year:"numeric", month:"long", day:"numeric",hour:"numeric"}) 
    let fechaFormateada= fecha;
    document.write(fecha)
}
setTimeout(fechaActual,1000)