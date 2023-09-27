console.error(`while un numero N y muestre por la salida estándar todos los pares desde 2 `)
// Solicitar al usuario que ingrese el número N
const N = parseInt(prompt("Ingrese un número N mayor o igual a 2:"));

// Verificar que N sea mayor o igual a 2
if (N < 2) {
  console.log("El número N debe ser mayor o igual a 2.");
} else {
  // Iterar desde 2 hasta N e imprimir los números pares
  for (let i = 2; i <= N; i += 2) {
    console.log(i);
  }
}
