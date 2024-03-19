import request from '@/utils/request.js'

export function getGroupMsgById(groupId){
    return request({
        url: '/msg/getGroupMsg/' + groupId,
        method: 'get'
    })
}

export function getFriendMsg(receiveUserId,sendUserId){
    return request({
        url: '/msg/getFriendMsg/' + receiveUserId + '/' + sendUserId,
        method: 'get'
    })
}