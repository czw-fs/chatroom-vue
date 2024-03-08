import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  // }

  {
    path:'/',
    name:'系统',
    component: Layout,
    iconCls:"fa fa-user",
    children:[{
      path:'userinfo',
      name:'管理系统用户信息',
      component:() =>import('@/views/system/SystemUserInfo.vue'),
    }]
  },
  {
    path: '/',
    name:'群组',
    iconCls:'fa fa-book',
    component: Layout,
    children:[
      {
        path:'groupInfo',
        name:'群组信息详情',
        component:() =>import('@/views/group/GroupInfo.vue'),
      },
      {
        path:'groupMsg',
        name:'群聊记录',
        component:() =>import('@/views/group/GroupMsg.vue'),
      }
    ]
  },
  {
    path: '/',
    name:'用户',
    iconCls:'fa fa-book',
    component: Layout,
    children:[
      {
        path:'aaa',
        name:'聊天室用户信息',
        component:() =>import('@/views/user/UserInfo.vue'),
      },
      {
        path:'/bbb',
        name:'用户私聊记录',
        component:() =>import('@/views/user/UserPrivateMsg.vue'),
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
