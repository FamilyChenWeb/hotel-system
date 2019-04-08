import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import err from '@/views/404'
import Home from '@/views/home'
import Privilege from '@/views/privilege/privilege'

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
      name: '登录'
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
          component: Home,
          name: '首页'
        },
        {
          path: '/privilege',
          component: Privilege,
          name: '权限管理'
        },
        {
          path: '/index1',
          component: index1,
          name: 'index1'
        },
        {
          path: '/index2',
          component: index2,
          name: 'index2'
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
