
let alumnosArray = ["Agustin","Paco","Pedro"]

let edadArray = [40,55,23];


//version SET
let alumnosSet = new Set(["Agustin","Paco","Pedro"]);
let edadSet = new Set([33,23,12]);


//version map

// Crear un array para almacenar a los alumnos
const alumnos = new Map();

// Función para insertar un nuevo alumno al array
function insertarAlumno(nombre, edad) {
  AlumnoNombre=prompt("dime el nombre");
  AlumnoApellido=prompt("dime el apellido")
  alumnos.set(nombre,edad);
  
}


console.log(alumnos.get("luis")); // Muestra el array de alumnos
