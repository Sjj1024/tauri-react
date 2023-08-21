import { makeAutoObservable } from 'mobx'

class Setting {
    constructor() {
        makeAutoObservable(this)
    }

    // 设置相关的配置
    showMenu = localStorage.getItem('showMenu') === 'false' ? false : true
    // 富文本/markdown/同事编辑和渲染
    editor = 'wang'

    switchMenu() {
        this.showMenu = !this.showMenu
        localStorage.setItem('showMenu', String(this.showMenu))
    }

    switchEdit(edit: string) {
        console.log('切换编辑器模式', edit)
        this.editor = edit
    }
}

export default Setting
