import request from '@/utils/request'

export function getUserInfoList(query) {
    return request({
      url: '/chat/user/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize,
      method: 'get'
    })
}