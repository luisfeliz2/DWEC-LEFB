<script setup>
import { computed, reactive, watch,onMounted } from 'vue'
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

let base = ref(0)
let altura = ref(0)
let largo = ref(0)
let ancho = ref(0)
let alto = ref(0)
const mensaje = reactive({
  mensaje_alto: "",
  mensaje_ancho: "",
  mensaje_largo: ""
})
let modificado = false;

watch(alto, (nuevoValor, antiguoValor) => {
  if (isNaN(nuevoValor)) {



    mensaje.mensaje_alto = `valor incorrecto ${nuevoValor}`
    alto.value = antiguoValor
    modificado = true
  } else {
    if (modificado == true) {
      modificado = false
    } else {
      mensaje.mensaje_alto = ""
    }
  }






})
watch(ancho, (nuevoValor, antiguoValor) => {
  if (isNaN(nuevoValor)) {
    ancho.value = antiguoValor
  } else {

  }
})
watch(largo, (nuevoValor, antiguoValor) => {
  if (isNaN(nuevoValor)) {
    largo.value = antiguoValor
  } else {

  }
})

function limpiar(params) {
  base.value = ""
  altura.value = ""
}

const area = computed(function luis() {
  if (ancho.value > 0) {

  }
  return base.value * altura.value

})

const perimetro = computed(() => 2 * ancho.value + 2 * alto.value);

const volumen = computed(() => ancho.value * largo.value * alto.value)
//se ejecuta cuendo cambie el valor de las variabñes
const mostrarResultado = computed(function(){
  if (ancho.value ==="" || ancho.value===0) {
    return false
  } else {
    return true
  }

} )

onMounted(() => {
 console.log("Hola, el componente esta montado")
})


</script>

<template>
  <div class="greetings">
    <form @submit.prevent="">
      <label for="">largo
        <span>{{ mensaje.mensaje_largo }}</span>
        <input v-model="largo">


      </label>

      <label for="">alto
        <input v-model="alto">
        <span>{{ mensaje.mensaje_alto }}</span>
        <br>
      </label>


      <label for="">ancho
        <input @click="mostrarElemento2" v-model="ancho">
        <span>{{ mensaje.mensaje_ancho }}</span>
      </label>




    </form>

    <div v-show="mostrarResultado">

      <p>Area : {{ area }} </p>

      <p>Perimetro : {{ perimetro }} </p>
      <p>volumen : {{ volumen }} </p>

    </div>


  </div>
</template>

<style scoped>
.rojo {
  color: red;
}

input {
  display: block;
}
</style>
