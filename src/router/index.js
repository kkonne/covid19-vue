import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/country/:id',
    name: "Country",
    props: true,
    component: () => import('../views/Country.vue')
  },
  {
    path: '/by-date',
    name: 'ByDate',
    component: () => import('../views/ByDate.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
