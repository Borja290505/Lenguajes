import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pokemones',
      name: 'pokemones',
      component: () => import('../views/PokemonesView.vue')
    },
    {
      path: '/pokemones/:name',
      name: 'pokedetalle',
      component: () => import('../views/PokeDetalleView.vue'),
    },
  ],
})

export default router
