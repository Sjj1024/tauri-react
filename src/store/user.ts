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

    setUserInfo = (info: any) => {
        this.userName = info.userName
        this.loginName = info.loginName
        this.avatarUrl = info.avatarUrl
        localStorage.setItem('userName', this.userName)
        localStorage.setItem('loginName', this.loginName)
        localStorage.setItem('avatarUrl', this.avatarUrl)
    }

    setApiLimit = (apiInfo: any) => {
        this.apiLimit = apiInfo
        localStorage.setItem('apiLimit', JSON.stringify(apiInfo))
    }
}

export default UserInfo
