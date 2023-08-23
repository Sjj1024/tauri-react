import requests from '@/utils/request'

export default {
    searchShare(
        keyWord: string = 'DOC',
        lable: string = '+label:documentation',
        state: string = '+state:closed',
        author: string = '',
        pageSize: number = 35,
        pageNum: number = 1
    ) {
        // 在Sjj1024/DataHub中搜索关闭的和分享的内容，并且是标题里面包含关键字的
        return requests(
            `/search/issues?q=${
                keyWord + lable + state + author
            }+in:title+repo:Sjj1024/doc-data&per_page=${pageSize}&page=${pageNum}`,
            {
                method: 'get',
            }
        )
    },
}
