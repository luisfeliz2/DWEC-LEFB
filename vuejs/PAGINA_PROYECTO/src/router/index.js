import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/Paginas/paginaInicio.vue";
import paginaListar from "@/Paginas/paginaListar.vue";
import aboutMeh from "@/Paginas/aboutMe.vue";
import inicioSecion from "@/Paginas/iniciosecion.vue";

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
            // ,
            // beforeEnter:(to,from,next)=>{
            //     let usuario= localStorage.getItem("usuario")

            //     if (usuario!=null) {
            //         next()
            //     } else {
            //         next("/inicio")
                  
                    
            //     }
            // }
        }, 

        {
            path:'/about',
            name:'about',
            component: aboutMeh
        },{
            path:'/login',
            name:'login',
            component:inicioSecion
        },
        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;