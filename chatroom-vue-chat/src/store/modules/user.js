import { getUserInfo } from '@/api/user.js'
import { login } from '@/api/login.js'
import { Message } from "element-ui"
const user = {
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) :{

        //用户信息
        id: '',
        userName: '',
        userProfile: '',//用户头现象
        userStateId: '',//用户当前状态
    },

    mutations: {
        set_id: (state, id) => {
            state.id = id
        },
        set_name: (state, userName) => {
            state.userName = userName
        },
        set_userProfile: (state, userProfile) => {
            state.userProfile = userProfile
        },
        set_userStateId: (state, userStateId) => {
            state.userStateId = userStateId
        }
    },

    actions: {

        async getUserId({ commit }, loginForm) {
            await login(loginForm).then(res => {
                const userId = res.data;
                commit('set_id', userId);
            })

        },

        // 获取用户详情
        async getUserInfo({ commit }, userId) {
            await getUserInfo(userId).then(resp => {
                const user = resp.data;

                //用户个人信息
                console.log(user)
                commit('set_id', user.id);
                commit('set_name', user.userName)
                commit('set_userProfile', user.userProfile)
                commit('set_userStateId', user.userStateId)

                window.sessionStorage.setItem("user",JSON.stringify(user))
            }).catch(err => {
                Message.error({err})
            })
        },
    }

}

// 在页面加载时读取sessionStorage里的状态信息
if (sessionStorage.getItem("user")) {

    const savedStateString = window.sessionStorage.getItem('user');
    if (savedStateString) {
        const savedState = JSON.parse(savedStateString);
        Object.assign(user.state, savedState);
    }
    console.log(user.state.id)
}

export default user
