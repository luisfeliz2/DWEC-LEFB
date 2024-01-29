<script setup>
import servicioAficiones from "../servicios/personal/servicioAficiones";
import { ref, onMounted } from "vue";

// #############################################################
// ################ VARIABLES A UTILIZAR

let aficiones=ref(null)

// #############################################################
// ################ FUNCIONES DE GESTIÓN DE SERVIVIOS

function obtenerAficiones(){
  servicioAficiones
  .getAll()
  .then((response) => {      
      aficiones.value = response.data;
      console.log(aficiones.value)
    })
  .catch((error) => {
      console.log(error);
  });
}

// #############################################################
// ################ MONTADO DEL COMPONENTE
onMounted(() => {
  obtenerAficiones();
});
let imagen=ref(null)
function verAficion(aficion) {
  console.log(aficion.nombre)
    imagen.value=aficion
}


</script>

<template>
<div class="padre">
    <h1>Página Listar</h1>
    <p>Página para listar</p>
    <ul>
        <li v-for="(aficion, id) in aficiones" :key="id">
         

            <span class="li-nombre" @click="verAficion(aficion)" >{{ aficion.nombre }}</span>
            <span class="li-descripcion"> {{ aficion.descripcion }} </span>
            <!-- <img :src="aficion.url_img" :alt="aficion.nombre"> -->
            
        </li>
    </ul>

</div>
<div>
  <img :src="imagen.url_img" alt="" >
  
</div>


</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC");
.padre{
  max-width: 900px;
}
img {
  width: 100px;
  height: 100px;
}
ul {
  list-style-type: none;
}
ul li {
  background-position: 0px 5px;
  background-repeat: no-repeat;
  padding-left: 20px;
}
ul li span.li-nombre {
  display: block;
  width: 30%;
  float: left;
  background-color: lightslategray;
  text-align: center;
}
ul li span.li-descripcion {
  display: block;
  width: 60%;
  float: left;
  text-align: right;
  background-color: lightgray;
  margin-bottom: 1vh;
}

h2 {
  text-align: center;
  font-family: "Bowlby One SC", cursive;
  font-size: 5vw;
  background-color: lightblue;
  margin: 3vh;
}
ul::after {
  content: "";
  clear: both;
  display: table;
}

button {
  padding: 0.375rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  color: black;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

button:hover,
button:active,
button:focus {
  color: #fff;
  background-color: black;
}
</style>