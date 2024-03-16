import router from './router'

router.beforeEach((to, from, next) => {
    const userId = window.sessionStorage.getItem('userId')

    if (userId) {
        if (to.path === '/login' || to.path === '/') {
            next('/chatroom');
        } else {
            next();
        }
    } else {
        if(to.path !== '/login'){
            next('/login');
        }else{
            next()
        }
        
    }

})