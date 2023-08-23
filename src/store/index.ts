import React from 'react'
import UserInfo from './user'
import Setting from './seting'
import NoteStore from './note'

class Store {
    userInfo: UserInfo
    setting: Setting
    noteActive: NoteStore

    constructor() {
        this.userInfo = new UserInfo()
        this.setting = new Setting()
        this.noteActive = new NoteStore()
    }
}

// 使用context是为了让react识别到Store里面的mobx，不然react不认识Store
export const rootStore = new Store()
const context = React.createContext(rootStore)
export const useStore = () => React.useContext(context)
export default () => React.useContext(context)
