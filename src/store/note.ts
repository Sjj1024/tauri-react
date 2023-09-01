import { makeAutoObservable } from "mobx";
import noteApi from "@/apis/notes";
import { decode64, encode64 } from "@/utils/encode";

class NoteStore {
  constructor() {
    makeAutoObservable(this);
  }

  activeNote = JSON.parse(localStorage.getItem("activeNote") || "{}") || {
    title: "",
    type: "",
    category: "",
    digest: "",
    img: "",
    openLink: "",
    downLike: "",
    delete: "",
    sha: "",
    fileSha: "",
    createTime: "",
    updateTime: "",
    content: "",
  };
  setActive = (note) => {
    console.log("设置的激活笔记:", this.activeNote);
    // 获取激活笔记的详情,并设置文本内容
    noteApi.getNoteText(note.title).then((res) => {
      console.log("获取到的详情是", res);
      const content = decode64((res.data as any).content);
      //   const content = atob((res.data as any).content);
      console.log("文章内容是", content);
      this.activeNote = note;
      this.activeNote.content = content;
      this.activeNote.fileSha = (res.data as any).sha;
      localStorage.setItem("activeNote", JSON.stringify(this.activeNote));
    });
  };

  updateFile = (content: string) => {
    console.log("更新文档内容");
    noteApi
      .updateFile(this.activeNote.path, {
        message: "Update From Dochub",
        content: encode64(content),
        sha: this.activeNote.fileSha,
      })
      .then((res) => {
        console.log("更新成功", res);
        this.activeNote.content = content;
        this.activeNote.fileSha = (res.data as any).content.sha;
      });
  };
}

export default NoteStore;
