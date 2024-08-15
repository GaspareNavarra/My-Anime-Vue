import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/LoginPage'
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    }

  ]
})

export default router
