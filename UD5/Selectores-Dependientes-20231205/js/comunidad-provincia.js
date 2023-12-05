let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["Lugo","Orense","Pontevedra"]]
]);


let autonomia = document.getElementById("id_autonomia");
let selectProvincia = document.getElementById("id_provincia");


provincias.forEach((clave,valor)=>{
   let option = document.createElement("option");
    option.innerHTML=valor;
    autonomia.appendChild(option);
    autonomia.addEventListener("click",(cambiarProvincias))  
    console.log("hola")     
  

    

    
})

function cambiarProvincias(params) {
    console.log("lokpdsa")
    
    //obtenemos los valores de la clave del mapa con this.value
    let automifa = provincias.get(this.value);
    selectProvincia.disabled=false
    //limpiamo el select de provincia
    selectProvincia.innerHTML=""
    
    //recorremo eel array creado
    automifa.forEach(e=>{
        let optionn = document.createElement("option")
        optionn.innerHTML=e;
        selectProvincia.appendChild(optionn)
      
     })
    activarSubmit()
    
}



function activarSubmit(params) {
    
    validar()
}


function validar(e) {
    e.preventDefault();
    let autonomiaSelecionada = for

}
