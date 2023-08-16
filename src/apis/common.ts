import requests from '@/utils/request'

export default {
    getUserInfo(token: string) {
        return requests('/user', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    },
    creatIssue(body: any) {
        return requests('/repos/Sjj1024/DataHub/issues', {
            method: 'post',
            body,
        })
    },
    registUser(token: string, body: any) {
        return requests(`/repos/Sjj1024/DataHub/issues`, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body,
        })
    },
}
