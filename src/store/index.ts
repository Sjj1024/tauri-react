import React from 'react'
import UserInfo from './user'
import Setting from './seting'

class Store {
    userInfo: UserInfo
    setting: Setting

    constructor() {
        this.userInfo = new UserInfo()
        this.setting = new Setting()
    }
}

// 使用context是为了让react识别到Store里面的mobx，不然react不认识Store
const rootStore = new Store()
const context = React.createContext(rootStore)
export const useStore = () => React.useContext(context)
export default () => React.useContext(context)
