import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/Paginas/paginaInicio.vue";
import paginaListar from "@/Paginas/paginaListar.vue";
import aboutMeh from "@/Paginas/aboutMe.vue";

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {   path: '/', 
            name:'inicio',
            component: paginaInicio
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar
        }, 

        {
            path:'/about',
            name:'about',
            component: aboutMeh
        },
        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;