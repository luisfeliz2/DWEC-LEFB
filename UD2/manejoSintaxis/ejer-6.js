console.error('luis eduardo feliz ')
 

let calificacion = parseInt( prompt("dime una calificacion entre 0 y 10"))

if(calificacion <3 ){
    console.log(`la calificacion es ${calificacion} muy Deficiente`)
}else if(calificacion > 3 && calificacion < 5){
    console.log(`la calificacion es ${calificacion} Insufuciente`)

}else if(calificacion > 5 && calificacion < 6){
    console.log(`la calificacion es ${calificacion} Bien`)

}else if(calificacion > 6 && calificacion < 9){
    console.log(`la calificacion es ${calificacion} Notable`)

}else if(calificacion > 9 && calificacion < 10){
    console.log(`la calificacion es ${calificacion} Sobresaliente`)

}