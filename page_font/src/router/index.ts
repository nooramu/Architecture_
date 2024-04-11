import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import page3 from '../views/page3.vue'
import page1 from '../views/page1.vue'
import page301 from '../views/page301.vue'
import map from '../views/map.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/page1',
    name: 'page1',
    component: page1,
    meta: { title: '首页' }
  },
  {
    path: '/page3',
    name: 'page3',
    component: page3,
    meta: { title: '详情页' }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
