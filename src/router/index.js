import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import mine from '../views/mine.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/mine',
    name:'mine',
    component: mine
  },
  {
    path:'/register',
    name:'register',
    component:register
  },
  {
    path:'/login',
    name:'/login',
    component:login
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
