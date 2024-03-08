import request from '@/utils/request'

export function getGroupInfoList(query) {
    return request({
      url: '/group/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize,
      method: 'get'
    })
}