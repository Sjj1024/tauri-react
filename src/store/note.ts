import { makeAutoObservable } from 'mobx'

class NoteStore {
    constructor() {
        makeAutoObservable(this)
    }

    activeNote = JSON.parse(localStorage.getItem('activeNote') || '{}') || {
        id: null,
        name: '',
    }

    setActive = (note) => {
        this.activeNote = note
        localStorage.setItem('activeNote', JSON.stringify(note))
    }
}

export default NoteStore
