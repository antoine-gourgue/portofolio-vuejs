import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectView from "@/views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/project/:id/:name',
      name: 'project',
      component: ProjectView
    },
  ]
})

export default router