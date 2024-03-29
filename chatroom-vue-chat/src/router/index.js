import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true,
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'chatroom',
        name: '聊天室',
        component: () => import('@/views/chat/ChatRoom.vue')
      },
      {
        path: 'community',
        name: '热帖',
        component: () => import('@/views/chat/Community.vue')
      },
      {
        path: 'welcome',
        name: '欢迎页面',
        component: () => import('@/views/Welcome.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
