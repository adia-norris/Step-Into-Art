import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WalkPrep from '@/views/WalkPrep.vue';
import MapCourse from '@/views/MapCourse.vue';
import WalkerGallery from '@/views/WalkerGallery.vue';
import AboutUs from '@/views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/walkprep',
      name: 'walkprep',
      component: () => import('../views/WalkPrep.vue')
    },
    {
      path: '/mapcourse',
      name: 'mapcourse',
      component: () => import('../views/MapCourse.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/WalkerGallery.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutUs.vue')
    }
  ]
})

export default router
