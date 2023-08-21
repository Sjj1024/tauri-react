import { makeAutoObservable } from 'mobx'

class Setting {
    constructor() {
        makeAutoObservable(this)
    }

    // 设置相关的配置
    showMenu = localStorage.getItem('showMenu') === 'false' ? false : true

    switchMenu() {
        this.showMenu = !this.showMenu
        localStorage.setItem('showMenu', String(this.showMenu))
    }
}

export default Setting
