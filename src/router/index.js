import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login/login'
import err from '@/views/404'

import Index from '@/views/index'
import index1 from '@/views/index1'
import index2 from '@/views/index2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/404',
      component: err,
      meta: {
        requireAuth: true
      },
      name: 'err'
    },
    {
      path: '/',
      component: Index,
      redirect: '/home',
      name: 'home',
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/index1',
          component: index1
        },
        {
          path: '/index2',
          component: index2
        },
      ]
    },
    {
      path: '*',
      redirect: '/404',
      name: '404'
    }
  ]
})
