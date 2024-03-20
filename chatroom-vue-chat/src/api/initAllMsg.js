import request from '@/utils/request.js'

export function getAllGroupList(){
    return request({
        url: '/init/getAllGroupList',
        method: 'get'
    })
}

export function getAllGroupMsg(){
    return request({
        url: '/init/getAllGroupMsg',
        method: 'get'
    })
}

export function getAllFriendList(userId){
    return request({
        url: '/init/getAllFriendList/' + userId,
        method: 'get'
    })
}

export function getAllFriendMsg(userId){
    return request({
        url: '/init/getAllFriendMsg/' + userId,
        method: 'get'
    })
}