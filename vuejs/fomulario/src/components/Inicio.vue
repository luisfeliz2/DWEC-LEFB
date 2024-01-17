<script setup>
import { computed, reactive } from 'vue'
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

let base = ref("")
let altura= ref("")

function limpiar(params) {
  base.value=""
  altura.value=""
}

const area = computed(function luis() {
  return base.value*altura.value
  
})

const perimetro = computed()



</script>

<template>
  <div class="greetings">
    <form @submit.prevent="">
      <label for="">base

        <input v-model="base">
      </label>
      <label for="">altura

        <input v-model="altura">
      </label>





    </form>

    <p>Area : {{ area }} </p>
    <p>Perimetro : {{ altura }} </p>
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
