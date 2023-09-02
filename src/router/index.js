import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: "/ingresar-estudiante",
        name: '/ingresar-estudiante',
        
        component: () => import('../pages/GuardarEstudiante.vue') 
    },
    {
        path: "/ver-estudiante",
        name: '/ver-estudiante',
    
        component: () => import('../pages/VerEstudiante.vue')
    },
    {
        path: "/guardar-token",
        name: '/guardar-token',
    
        component: () => import('../pages/GuardarToken.vue')
    },
]

const router=createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router