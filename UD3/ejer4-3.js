// Act 4.3 Crear un array para los nombres y otro para las edades. Introducir en el elemento 0 del
// primer array un nombre y en el elemento 0 del segundo array su edad y así sucesivamente hasta 6
// nombres. Mostrar por consola cada nombre con su edad y otro para ver la media de todas las edades. 

let size = new Array(parseInt( prompt("dime el tamaño")));
let arrayAlumno = new Array(size);
let arrayEdades = new Array(size);
for(let i=0;i<size;i++){
    arrayAlumno[i]=prompt("Dime el nombre");
    arrayEdades[i]=prompt("Dime la Edad")
}

arrayAlumno.forEach,arrayEdades.forEach(a,b => {
    console.log(a)
});