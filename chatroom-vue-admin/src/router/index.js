import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  // }

  {
    path:'/',
    name:'用户管理',
    component: () =>import('../views/HomeView.vue'),
    iconCls:"fa fa-user",
    children:[{
      path:'userinfo',
      name:'用户信息管理',
      component:() =>import('../views/system/UserInfo.vue'),
    }]
  },
  {
    path: '/',
    name:'聊天记录管理',
    iconCls:'fa fa-book',
    component: () =>import('../views/HomeView.vue'),
    children:[
      {
        path:'groupChatRecord234234',
        name:'群聊记录管理',
        component:() =>import('../views/TestView.vue'),
      },
      {
        path:'privateChatRecord',
        name:'私聊记录管理',
        component:() =>import('../views/TestView.vue'),
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
