import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import "./index.scss"

// 笔记列表每一项
function Note({ noteInfo }) {

  const { noteActive } = useStore()

  // 激活笔记
  const activeNote = (note) => {
    noteActive.setActive(note)
  }

  return (
    <div className={noteActive.activeNote.id === noteInfo.id ? "note-item note-active" : "note-item"} onClick={() => activeNote(noteInfo)}>
      <div className="note-title">{noteInfo.title}</div>
      <div className="note-pre">
        <span className="pre-text">{noteInfo.pre}</span>
        {
          noteInfo.preImg ? <img src={noteInfo.preImg} alt="" className="pre-img" /> : ""
        }
      </div>
    </div>
  )
}

export default observer(Note)