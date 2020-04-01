import Vue from 'vue'
import VueRouter from 'vue-router'
// 生产环境开启路由懒加载
const _import = require('@/utils/util.import.' + process.env.NODE_ENV)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: _import('home/Index.vue')
  },
  {
    path: '/admin/:appId',
    name: '系统首页',
    component: _import('layout/Index.vue'),
    children: [
      {
        name: 'test',
        path: 'test',
        component: _import('modules/role/test.vue')
      },
      {
        path: 'test2',
        component: _import('modules/role/test2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
