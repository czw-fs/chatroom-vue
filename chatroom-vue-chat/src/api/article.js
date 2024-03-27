import request from '@/utils/request.js'

export function getArticlePage(query){
    return request({
        url: '/article/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize,
        method: 'get'
    })
}