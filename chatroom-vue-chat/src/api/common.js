import request from '@/utils/request.js'

export function getMsgListByChatId(chatId,chatType){
    return request({
        url: '/getMsgListByChatId/' + chatId + '/' + chatType,
        method: 'get'
    })
}