import router from './router'
import { Message } from "element-ui"

router.beforeEach((to, from, next) => {
    const user = window.sessionStorage.getItem('user')
    if (user) {
        // 用户已登录
        if (to.path === '/login' || to.path === '/') {
            // 如果用户已登录但尝试访问登录页或根路径，则重定向到聊天室页面
            next('/chatroom');
        } else {
            // 用户已登录并尝试访问其他页面，允许导航
            next();
        }
    } else {
        // 用户未登录
        if (to.path !== '/login') {
            // 如果用户尝试访问非登录页面，则重定向到登录页面
            Message.error("请先登录")
            next('/login');
        } else {
            // 如果用户访问登录页面，则允许导航
            next();
        }
    }
})
