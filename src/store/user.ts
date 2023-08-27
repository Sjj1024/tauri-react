import { makeAutoObservable } from 'mobx'

class UserInfo {
    userName = localStorage.getItem('userName') || '默认小神'
    loginName = localStorage.getItem('loginName') || 'Sjj1024'
    avatarUrl = localStorage.getItem('avatarUrl') || ''
    apiLimit = localStorage.getItem('apiLimit')
        ? JSON.parse(localStorage.getItem('apiLimit') || '{}')
        : {
              limit: 5000,
              used: 0,
              remaining: 5000,
              reset: 1687853989,
          }

    constructor() {
        makeAutoObservable(this)
    }

    // 计算属性获取api的剩余
    get apiRemain() {
        console.log('计算属性')
        return (this.apiLimit.remaining / this.apiLimit.limit) * 100
    }

    setUserInfo = (info: any) => {
        this.userName = info.userName
        this.loginName = info.loginName
        this.avatarUrl = info.avatarUrl
        localStorage.setItem('userName', this.userName)
        localStorage.setItem('loginName', this.loginName)
        localStorage.setItem('avatarUrl', this.avatarUrl)
    }

    setApiLimit = (apiInfo: any) => {
        if (apiInfo) {
            this.apiLimit = apiInfo
            localStorage.setItem('apiLimit', JSON.stringify(apiInfo))
        }
    }
}

export default UserInfo
