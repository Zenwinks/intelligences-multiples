import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questions from '../views/Questions.vue'
import Results from "@/views/Results";
import Accueil from "@/views/Accueil";
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    if (
      store.getters.getInfos.firstname !== '' &&
      store.getters.getInfos.lastname !== '' &&
      store.getters.getInfos.consultant !== ''
    ) {
      next()
    } else {
      next('/')
    }
  }
})

export default router
