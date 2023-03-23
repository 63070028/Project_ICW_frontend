import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/ex',
    name: 'ex',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExamplePage.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/company',
    name: 'CompanyProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompanyProfile.vue')
  },
  {
    path: '/companyJob',
    name: 'CompanyJob',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompanyJob.vue')
  },
  {
    path: '/companyProgram',
    name: 'CompanyProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompanyProgram.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
