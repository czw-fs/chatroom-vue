import request from '@/utils/request.js'

export function getGroupMsgById(groupId){
    return request({
        url: '/group/getGroupMsgById/' + groupId,
        method: 'get'
    })
}