// alert("hola");
// let saludar = () =>{
//     alert("te estoy observandoo");
// }
// let idTiempo =setTimeout(saludar,7000)


let valorInicial = 10
console.log("daoik")

let decrementar = ()=>{

    valorInicial-= 1;
    if (valorInicial>0){
        console.log(`valor Actual: ${valorInicial}`)
    }else{
        console.log("Finnn")
        clearInterval(idTiempo)
    }
}
idTiempo =setInterval(decrementar,500);
console.log(`El identificador es: ${idTiempo}`)
