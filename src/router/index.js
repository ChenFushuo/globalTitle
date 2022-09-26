import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: { title: "首页", left: false }
  },
  {
    path: '/index2',
    name: 'index2',
    component: () => import('@/views/index/index-two.vue'),
    meta: { title: "假的首页", left: true }
  },
]

const router = new VueRouter({
  routes
})

export default router
