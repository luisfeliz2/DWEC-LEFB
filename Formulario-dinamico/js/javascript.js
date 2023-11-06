// Aquí tu código JAVASCRIPT
let h2 = document.getElementsByTagName("h2");
let labelNombre = document.createElement("label");
let br = document.createElement("br");
labelNombre.setAttribute("for", "nombre");
labelNombre.innerHTML = "Nombre: ";
h2[0].after(labelNombre);

inputNombre = document.createElement("input");
inputNombre.setAttribute("id", "nombre");
inputNombre.setAttribute("name", "nombre");
inputNombre.setAttribute("required", "")
inputNombre.setAttribute("type", "text")
labelNombre.after(br)
labelNombre.after(inputNombre);

//correo electronico






const datosMultimediaArray = [
  {
    "Peliculas": [
      "Titanic",
      "Forrest Gump",
      "Avatar",
      "The Shawshank Redemption",
      "The Godfather",
      "Inception",
      "Pulp Fiction",
      "The Dark Knight",
      "Schindler's List",
      "The Matrix"
    ]
  },
  {
    "Series": [
      "Juego de Tronos",
      "Breaking Bad",
      "Stranger Things",
      "Friends",
      "The Crown",
      "Los Serrano"
    ]
  }
];

const generosSet = new Set(["Masculino", "Femenino", "Otro"]);

const aficionesMap = new Map([
  ["deportes", "Practicar deportes"],
  ["musica", "Escuchar música"],
  ["lectura", "Leer libros"],
  ["viajes", "Viajar"],
  ["otra", "Otra afición"]
]);


function genero(params) {
  let hermano = document.getElementById("nombre");
  let labelsex = document.createElement("label");

  labelsex.innerHTML = "sexo: "
  labelNombre.appendChild(labelsex)


  generosSet.forEach(ele => {
    let input = document.createElement("input");
    let labelsex = document.createElement("label");
    labelsex.innerHTML = ele;

    input.type = "radio"

    input.setAttribute("id", ele)
    input.setAttribute("name", "sexo")

    labelNombre.after(input);
    labelNombre.after(labelsex);

  });

}
genero();
//correo electronico

let correo = document.createElement("label");
correo.innerHTML = "Correo Electromico: ";
correo.setAttribute("for", "email")

let inputCorreo = document.createElement("input")
inputCorreo.setAttribute("id", "email")
inputCorreo.type = "email"
labelNombre.appendChild(correo);

labelNombre.appendChild(inputCorreo);

//aficiones


function aficiones(params) {
  let labelAficion = document.createElement("label");
  labelAficion.setAttribute("for", "aficion");
  labelAficion.innerHTML = "Aficion Favorita:";
  labelNombre.appendChild(labelAficion);
  let select = document.createElement("select");
  select.setAttribute("id", "aficion");
  select.setAttribute("name", "aficion");
  labelNombre.appendChild(select)

  aficionesMap.forEach((clave, valor) => {

    let option = document.createElement("option");
    option.setAttribute("value", valor);
    option.innerHTML = clave;

    select.appendChild(option)

  });


}


  function serie(params) {
    
    datosMultimediaArray.forEach(ob=>{
      
    })

  }
aficiones();


console.log("Los datos multimedia son :")
console.log(datosMultimediaArray)

console.log("Los valores de género son:")
console.log(generosSet)

console.log("La información de aficiones es:")
console.log(aficionesMap)