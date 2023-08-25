import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import "./index.scss"
import Folder from "@/assets/images/folder.png"

// 笔记列表每一项
function Note({ noteInfo, activeMenu }) {

  const { noteActive } = useStore()

  const noteMenu = (e) => {
    // console.log("右键菜单");
    activeMenu(e)
  }

  // 激活笔记
  const activeNote = (note) => {
    noteActive.setActive(note)
  }

  return (
    <div className={noteActive.activeNote.title === noteInfo.title ? "note-item note-active" : "note-item"}
      onContextMenu={noteMenu}
      onClick={() => activeNote(noteInfo)}>
      <div className="note-title">{noteInfo.title}</div>
      <div className="note-pre">
        <span className="pre-text">{noteInfo.digest}</span>
        {
          noteInfo.img ? <img src={noteInfo.img} alt="" className="pre-img" /> : null
        }
      </div>
    </div>
  )
}

export default observer(Note)