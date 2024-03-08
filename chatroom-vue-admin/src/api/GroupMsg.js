import request from '@/utils/request'

export function getGroupMsgList(query) {
    return request({
      url: '/group/msg/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize,
      method: 'get'
    })
}