import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/slide',
      name: 'slide',
      component: () => import('@/views/纯CSS实现Tab滑块选项卡/index.vue')
    },
  ]
})

export default router
