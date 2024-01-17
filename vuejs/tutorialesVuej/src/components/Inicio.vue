<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const contador = reactive(
  {
  contador: 0
  }
)

console.log(contador.contador) // 0
contador.contador++

const message = ref('Hello World!')

console.log(message.value) // "Hello World!"
message.value = 'cambiado hola'


const clase = ref("rojo");

function incrementar() {
  // update component state
  contador.contador++
}

const texto = ref('')
function onInput(e) {
  // a v-on handler receives the native DOM event
  // as the argument.
  texto.value = e.target.value
}

const awesome = ref(true)

function cambiarTrue() {
  awesome.value = !awesome.value
}


// give each todo a unique id
let id = 0
// const texto1 =ref("")
// const dni = ref("")
const persona = reactive({
  text:"",
  dni:"",
  apellido:""
 
  
})

const newTodo = ref('')
const todos = ref([
  { id: id++,dni:"7277223", text: 'Pedro',apellido:"" },
  { id: id++,dni:"7277224", text: 'Paco',apellido:"" },
  { id: id++,dni:"727vf7225", text: 'Guillermo',apellido:"" }
])

function addTodo() {
if (persona.dni ==="") {
  alert("El DNI no puede estar vacio")
  return 
  
}else if(persona.text ===""){
  alert("El nombre no puede estar vacio")
  return
}

 if(persona.dni !== "" && persona.text !== ""){
  if (persona.apellido ==="") {
    persona.apellido="sin Apellido"
  }
  todos.value.push({id:id++, dni:persona.dni, text:persona.text,apellido:persona.apellido})
  console.log(persona.dni)
  persona.dni=""
 persona.text=""
 persona.apellido=""
 }else{
  alert("Debes comppletar ambos valores")
 }}


function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

function Cambiarclase(e) {
  e.classList.addClass("red")
  
  
}



function limpiarTodo(params) {
  texto1.value=""
  dni.value=""
  
  
}
</script>

<template>

  <div class="greetings">
    <h1>tutorial 1</h1>
    <h3>{{ msg }}</h3>
    <h3>{{ contador.contador }}</h3>

    <h1>tutorial 2</h1>
    <h3>{{ message }}</h3>
    <h3>{{ message.split('').reverse().join('') }}</h3>
    
 
  
  </div>

  <div v-bind:class=clase>
    cambiar color
    <button @click="">cambiar</button>
  </div>

  <button v-on:click="incrementar">{{ "contador " +contador.contador }}</button>

  

  <input :value="texto" @input="onInput" placeholder="escribe aqui">
  <input v-model="texto" readonly >

  
<br>
<h1>tutorial 6</h1>
 <button  v-on:click="cambiarTrue" >palanca</button>
  <h1 v-if="awesome">¡Vue es increíble!</h1>
  <h1 v-else>Oh no 😢</h1>



  <h1>tutorial 7</h1>
  <form @submit.prevent="addTodo">
    
    <label for="">dni</label>
    <input v-model="persona.dni">

    <label for="">texto</label>
    <input v-model="persona.text">

    <label for=""  >apellido</label>
    <input placeholder="No obligatorio" v-model="persona.apellido">
    
    <button>Add Todo</button>    
    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{todo.id+" "+todo.dni+" " + todo.text+ " "+todo.apellido }}
    
      <button @mouseenter="Cambiarclase(e)" @click="removeTodo(todo)">X</button>
    </li>
    <button type="submit" @click.prevent="limpiarTodo" >limpiar todo</button>
  </ul>

</template>

<style scoped>
.rojo{
  color:red;
}
input{
  display: block;
}
</style>
