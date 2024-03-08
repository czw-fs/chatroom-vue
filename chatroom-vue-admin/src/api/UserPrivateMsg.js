import request from '@/utils/request'

export function getUserPrivateMsgList(query) {
    return request({
      url: '/user/private/msg/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize,
      method: 'get'
    })
}