import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import err from '@/views/404'
import Home from '@/views/home'
import Administrators from '@/views/privilege/administrators'
import Role from '@/views/privilege/role'
import WebsiteSetup from '@/views/systemSetup/websiteSetup'

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
          path: '/administrators',
          component: Administrators,
          name: '管理员'
        },
        {
          path: '/role',
          component: Role,
          name: '角色'
        },
        {
          path: '/websiteSetup',
          component: WebsiteSetup,
          name: '网站设置'
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
