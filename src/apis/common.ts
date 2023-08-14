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
}
