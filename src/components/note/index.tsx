import "./index.scss"

export default function Note({ noteInfo }) {

  return (
    <div className="note-item">
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
