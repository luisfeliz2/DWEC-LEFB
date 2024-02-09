<script setup lang="ts">
import { inject, reactive, ref } from "vue";
import { createApp } from "vue";
import VueCryptojs from "vue-cryptojs";
let usuarioc = reactive({
  usuario: "",
  contrasena: "",
});

import CryptoJS from "crypto-js";

const cryptojs = inject("cryptojs") as typeof CryptoJS;
function establecerUsuario(params) {
  localStorage.setItem("usuario", usuarioc.usuario);

  localStorage.setItem("contrasenia", usuarioc.contrasena);
  alert(cryptojs.AES.encrypt("Hi There!", "Secret Passphrase").toString());

  location.reload();
}
</script>

<template>
  <p>{{}}</p>
  <form action="" method="post" class="login-form">
    <div class="form-group">
      <label for="username" class="form-label">Nombre de Usuario:</label>
      <input
        type="text"
        name="username"
        v-model="usuarioc.usuario"
        id="username"
        class="form-input"
        placeholder="Ingresa tu nombre de usuario"
      />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Contraseña:</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="usuarioc.contrasena"
        class="form-input"
        placeholder="Ingresa tu contraseña"
      />
    </div>
    <button @click.prevent="establecerUsuario" class="btn-submit">
      Iniciar Sesión
    </button>
  </form>
</template>

<style>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
