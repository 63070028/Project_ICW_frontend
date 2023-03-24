import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import CompanyPage from '@/views/Applicant/CompanyPage.vue';
import ProgramPage from '@/views/Applicant/ProgramPage.vue';
import ContactPage from '@/views/Applicant/ContactPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/ex',
    name: 'ex',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ExamplePage.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SignIn.vue')
  },
  {
    path: '/programs/:id',
    component:ProgramPage
  },
  {
    path: '/companies/:id',
    component:CompanyPage
  },
  {
    path: '/contact',
    component:ContactPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
