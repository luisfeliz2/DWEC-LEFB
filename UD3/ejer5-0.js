
let alumnosArray = ["Agustin","Paco","Pedro"]

let edadArray = [40,55,23];


//version SET
let alumnosSet = new Set(["Agustin","Paco","Pedro"]);
let edadSet = new Set([33,23,12]);


//version map

// Crear un array para almacenar a los alumnos
const alumnos = new Map();

// Función para insertar un nuevo alumno al array
function insertarAlumno() {
  nombre=prompt("dime el nombre");
  edad=parseInt(prompt("Dime la Edad"))
  alumnos.set(nombre,edad);
  
}

function listarAlumnos(){

  alumnos.forEach((edad,nombre) => {
      console.log(`Nombre ${nombre} , edad ${edad}`)
  });

}
function nombre(){
  let nombre = prompt("Dime el nombre")
  return nombre;
}

console.log(alumnos); // Muestra el array de alumnos

function mediaEdad (){
  let media=0;
  let edades=0;
  alumnos.forEach((edad)=>{
    edades+=edad;
    media+=edad/alumnos.size;
  });
  console.log(media)
}

function borrarNombre(){
  let nombre = prompt("Dime el nombre")
  alumnos.delete(nombre);
  console.log(`Alumno ${nombre} ha sido borrado correctamente`)
}
function existeAlumno(){
  let nombre = nombre()

  
  console.log("ds")
}