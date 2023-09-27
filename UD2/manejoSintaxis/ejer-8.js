// Solicitar al usuario que ingrese el número N
const N = parseInt(prompt("Ingrese un número N mayor o igual a 1:"));

// Verificar que N sea mayor o igual a 1
if (N < 1) {
  console.log("El número N debe ser mayor o igual a 1.");
} else {
  // Iterar desde N hasta 1 e imprimir los números impares
  for (let i = N; i >= 1; i--) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
