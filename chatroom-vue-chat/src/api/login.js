import request from '@/utils/request.js'

export function login(loginForm){
    return request({
        url: '/login/getUserId',
        method: 'post',
        data: loginForm
    })
}