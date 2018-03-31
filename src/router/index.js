import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Opener from '@/views/Pages/Opener'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Opener',
          component: Opener
        }
      ]
    }
  ]
})
