import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import jin from '../views/jin.vue'
import yue from '../views/yue.vue'
import su from '../views/su.vue'
import hai from '../views/hai.vue'
import min from '../views/min.vue'
import chuan from '../views/chuan.vue'
import jing from '../views/jing.vue'
import hui from '../views/hui.vue'

import home from '../views/home.vue'
import begin from '../views/begin.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/begin',
  },
  {
    path: '/begin',
    name: 'begin',
    component: begin,
    meta: { title: '开场' }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { title: '首页' },
  },

  {
    path: '/jin',
    name: 'jin',
    component: jin,
    meta: { title: '晋派' }
  },
  {
    path: '/yue',
    name: 'yue',
    component: yue,
    meta: { title: '粤派' }
  },
  {
    path: '/su',
    name: 'su',
    component: su,
    meta: { title: '苏派' }
  },
  {
    path: '/hai',
    name: 'hai',
    component: hai,
    meta: { title: '海派' }
  },
  {
    path: '/min',
    name: 'min',
    component: min,
    meta: { title: '闽派' }
  },

  {
    path: '/chuan',
    name: 'chuan',
    component: chuan,
    meta: { title: '川派' }
  },  
  {
    path: '/jing',
    name: 'jing',
    component: jing,
    meta: { title: '京派' }
  },
  {
    path: '/hui',
    name: 'hui',
    component: hui,
    meta: { title: '徽派' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
