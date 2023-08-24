import { makeAutoObservable } from 'mobx'

class NoteStore {
    constructor() {
        makeAutoObservable(this)
    }

    activeNote = JSON.parse(localStorage.getItem('activeNote') || '{}') || {
        title: '',
        type: '',
        category: '',
        digest: '',
        img: '',
        openLink: '',
        downLike: '',
        delete: '',
        sha: '',
        createTime: '',
        updateTime: '',
    }
    setActive = (note) => {
        this.activeNote = note
        localStorage.setItem('activeNote', JSON.stringify(note))
    }
}

export default NoteStore
