<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Inicio from './components/Inicio.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <Inicio msg="Pagina de Inicio!" />
  </header>

</template>

<style scoped></style>