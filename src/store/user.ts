import { makeAutoObservable } from 'mobx'

class UserInfo {
    userName = localStorage.getItem('userName') || '默认小神'
    loginName = localStorage.getItem('loginName') || 'Sjj1024'
    avatarUrl = localStorage.getItem('avatarUrl') || ''

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
}

export default UserInfo
