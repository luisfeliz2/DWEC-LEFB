
// Crear un script en el que se pregunte por el número de alumnos y en función de este dato
// pida el nombre de los alumnos y sus notas finales. Al final se debe mostrar, cada alumno con su nota
// y después la media de todos los alumnos.

// Pedir el número de alumnos
const numAlumnos = parseInt(prompt("Ingrese el número de alumnos:"));

// Crear un array vacío para almacenar los nombres y las notas finales
const alumnos = [];

// Pedir los nombres y las notas de los alumnos
for (let i = 0; i < numAlumnos; i++) {
  const nombre = prompt(`Ingrese el nombre del alumno ${i + 1}:`);
  const notaFinal = parseFloat(prompt(`Ingrese la nota final de ${nombre}:`));
  
  alumnos.push({ nombre, notaFinal });
}

// Mostrar los nombres y las notas de los alumnos
console.log("Nombres y Notas Finales de los Alumnos:");
for (let i = 0; i < numAlumnos; i++) {
  console.log(`${alumnos[i].nombre}: ${alumnos[i].notaFinal}`);
}

// Calcular y mostrar la media de las notas finales
let sumaNotas = 0;
for (let i = 0; i < numAlumnos; i++) {
  sumaNotas += alumnos[i].notaFinal;
}
const media = sumaNotas / numAlumnos;
console.log(`La media de las notas finales es: ${media}`);
