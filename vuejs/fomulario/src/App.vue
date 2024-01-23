<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Inicio from './components/Inicio.vue'
import foot from "./components/Footer.vue"
</script>

<template>
  <header>
 
      <Inicio msg="Pagina de Inicio!" />
      <footer>

        <foot />
              
      </footer>

  </header>

</template>

<style scoped></style>