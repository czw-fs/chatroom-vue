import router from './router'
import { Message } from "element-ui"
router.beforeEach((to, from, next) => {
    const userId = window.sessionStorage.getItem('userId')
    if (userId) {
        if (to.path === '/login' || to.path === '/') {
            next('/chatroom');
        } else {
            next();
        }
    } else {
        //请先登录
        if (to.path !== '/login') {
            Message.error("请先登录")
            next('/login');
        } else {
            next()
        }

    }

})