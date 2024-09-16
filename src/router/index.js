import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListadoView from '../views/animes/ListView.vue'
import Details from '@/views/animes/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //Agregamos nuestra nueva ruta de animes
    //----------------------------------------------------
    {
      path: '/animes/listado',
      name: 'ListadoView',
      component: ListadoView
    },
    {
      path: '/anime/:id',
      name: 'anime-details',
      component: Details,
      props: true // Pasar los parámetros como props
    }
    //----------------------------------------------------
  ]
})

export default router
