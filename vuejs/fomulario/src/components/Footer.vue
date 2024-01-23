<script setup >


</script>


<!-- Footer.vue -->

<template>
 <footer>
    <p>&copy; 2024 Mi Empresa - Todos los derechos reservados.</p>

    <!-- Redes sociales -->
    <div class="redes-sociales">
      <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <!-- Agrega más enlaces y iconos según sea necesario -->
    </div>
  </footer>
</template>


<style scoped>
/* Estilos específicos del componente Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.redes-sociales a {
  margin: 0 10px;
  color: white;
  font-size: 1.5em;
}

.redes-sociales a:hover {
  color: #55acee;
  /* Cambia el color al pasar el ratón sobre los iconos */
}
</style>