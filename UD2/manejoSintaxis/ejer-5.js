
let sueldo = parseInt(prompt("introduce sueldo"))
let antiguedad = parseInt(prompt("introduce antiguedad"))
let nuevoSueldo = sueldo;
if(sueldo < 500 && antiguedad > 10 ){
    nuevoSueldo = sueldo*3

}else if(sueldo < 500 && antiguedad < 10){
    nuevoSueldo = sueldo*3
}else if(sueldo >= 500 ){
    nuevoSueldo= sueldo
}//

console.log(`
Entrada            salida
${sueldo}                ${nuevoSueldo} 
${antiguedad}    
`)
