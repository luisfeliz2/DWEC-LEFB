console.log("hoa")
let fecha = ()=>{
    let fechaActual = new Date();
    fechaFormateadda=`la hora es ${  fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
    console.log(fechaFormateadda)
    document.title=fechaFormateadda
}
setInterval(fecha,1000)
