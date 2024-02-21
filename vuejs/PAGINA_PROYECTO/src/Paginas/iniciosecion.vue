<script setup>
import { inject, reactive } from "vue";
import servicioAficiones from "@/servicios/personal/servicioAficiones";
import { useRouter } from "vue-router";


const rutas = useRouter();

let usuarioc = reactive({
  usuario: "",
  contrasena: "",
});

function establecerUsuario(params) {
alert("daskijddsaesdkbjj")

  if (usuarioc.usuario !== "") {
    servicioAficiones.findByUsuario(window.btoa(usuarioc.usuario+usuarioc.contrasena)).then(
    (response)=>{
      console.log(response)
    console.log("--------------------------")
      if(response.data.length===0){
        alert("el usario no existe")
        localStorage.setItem("usuario",null);
      }else{
        alert("bienvenido")
        localStorage.setItem("usuario", usuarioc.usuario);

        rutas.go();

      }
     

    }
    ).catch((error) => {
        //console.log(`problemas de conexion ${error}`);
        error(`problemas de conexion ${error}`)
      });
    
  }





  localStorage.setItem("contrasenia", usuarioc.contrasena);

  // let token = "";
  // servicioAficiones.getUsuario(token).then();
  //alert(cryptojs.AES.encrypt("Hi There!", "Secret Passphrase").toString());

  location.reload();
}
function cerrarSecion(params) {
    localStorage.removeItem("usuario")
// rutas.go()
    location.reload()

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
        class="form-input "
        placeholder="Ingresa tu contraseña"
      />
    </div>
    <button @click.prevent="establecerUsuario" class="btn-submit">
      Iniciar Sesión
    </button>
    <button @click.prevent="cerrarSecion" class="btn-submit">
      Cerrar sesion
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
