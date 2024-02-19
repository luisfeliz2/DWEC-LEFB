<script setup>
import { RouterLink} from 'vue-router';
import {ref} from "vue";
const props = defineProps({
    "titulo":String,
    "links":Array,
    "about":String,
    
})

let usuario = ref(localStorage.getItem("usuario")) 
let mostrar=false
if(usuario.value){
    mostrar =!mostrar
}
1234
</script>

<template> 
<div>
    <p>{{ usuario }}</p>

    <form action="" method="post" v-if="mostrar" >
        <input type="button" @click.prevent="cerrarSecion" value="cerrar sesion">
    </form>
</div>
    <nav>
        <RouterLink
         v-for="enlace in props.links"
         :key="enlace"
         :to="{ name: enlace }">
           <span class="enlace-menu"> {{ enlace }} </span>
        </RouterLink>        
    </nav>
</template>

<style scoped>

span.enlace-menu{
    display:inline-block;
    width:33%;
    padding:5px 10px;
    background-color:#000;
    border:1px solid #000;
    text-align:center;
    color:#fff;    
}
span.enlace-menu:hover{
    background-color:#fff;
    color:#000;
}
nav{
    margin-bottom: 2vh;
}

</style>