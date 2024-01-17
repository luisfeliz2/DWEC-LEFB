<script setup>
import { ref } from 'vue'

const count = ref(0)

defineProps({
  msg: {
    type: String,
    required: true
  }
})

setInterval(() => {
  console.log("Retrasado por 1 segundo.");
  count.value++;
}, "100");

</script>

<template>

  
    <h1>{{ msg }}</h1>
    <h2>{{ msg }}</h2>
 
  <button  @mouseenter ="count++">Contador</button>
  <button  @click ="count++">Contador</button>
  
  {{ count }}
 

</template>

<style scoped>

</style>
