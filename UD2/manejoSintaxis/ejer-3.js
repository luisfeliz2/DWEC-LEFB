// Solicitar al usuario que ingrese tres valores numéricos enteros
const valor1 = parseInt(prompt("Ingrese el primer valor:"));
const valor2 = parseInt(prompt("Ingrese el segundo valor:"));
const valor3 = parseInt(prompt("Ingrese el tercer valor:"));

// Verificar si alguno de los valores es mayor que 10
if (valor1 > 10 || valor2 > 10 || valor3 > 10) {
  console.log("Al menos uno de los números es mayor que 10.");
} else {
  console.log("Ninguno de los números es mayor que 10.");
}
