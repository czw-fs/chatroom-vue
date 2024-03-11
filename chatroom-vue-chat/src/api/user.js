import request from '@/utils/request.js'

export function getUserInfo(userId){
    return request({
        url: '/user/getInfoByUserId/' + userId,
        method: 'get'
    })
}