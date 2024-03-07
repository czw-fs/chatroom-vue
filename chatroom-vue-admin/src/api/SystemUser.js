import request from '@/utils/request'

export function getSystemUserInfo(query) {
    return request({
      url: '/system/user/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize,
      method: 'get'
    })
}