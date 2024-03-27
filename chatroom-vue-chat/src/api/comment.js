import request from '@/utils/request.js'

export function getCommentPage(query){
    return request({
        url: '/comment/list?pageNum='+ query.pageNum +'&pageSize=' + query.pageSize + '&articleId=' + query.articleId,
        method: 'get'
    })
}