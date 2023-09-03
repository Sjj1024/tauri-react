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
    path: "",
    issueNum: "",
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
      var imgReg = /<img src="(.*?)"/;
      var arr = content.match(imgReg) as any;
      if (arr && arr.length > 0) {
        console.log("匹配到的预览图是", arr[1]);
        this.activeNote.img = arr[1];
      }
      const temp = content.replace(/<[^>]*>/gi, ""); //html是一个要去除html标记的文档
      console.log("全部替换后的结果是", temp);
      this.activeNote.digest = temp.slice(0, 100);
      this.activeNote.content = content;
      this.activeNote.fileSha = (res.data as any).sha;
      localStorage.setItem("activeNote", JSON.stringify(this.activeNote));
    });
  };

  updateFile = (content: string) => {
    console.log("更新文档内容，标题，简介，预览图", content);
    return new Promise((resolve, reject) => {
      noteApi
        .updateFile(this.activeNote.path, {
          message: "Update From Dochub",
          content: encode64(content),
          sha: this.activeNote.fileSha,
        })
        .then((res) => {
          console.log("更新成功", res);
          if (res.status > 300) {
            console.log("更新失败:", res);
            return;
          }
          // 更新简介和预览图：正则匹配简介和预览图
          var imgReg = /<img src="(.*?)"/;
          var arr = content.match(imgReg) as any;
          if (arr && arr.length > 0) {
            console.log("匹配到的预览图是", arr[1]);
            this.activeNote.img = arr[1];
          }
          const temp = content.replace(/<[^>]*>/gi, ""); //html是一个要去除html标记的文档
          console.log("全部替换后的结果是", temp);
          this.activeNote.digest = temp.slice(0, 100);
          this.activeNote.fileSha = (res.data as any).content.sha;
          // 更新笔记issue
          noteApi
            .updateNote(this.activeNote.issueNum, {
              body: JSON.stringify(this.activeNote),
            })
            .then((updateRes) => {
              console.log("更新笔记结果:", updateRes);
              resolve(updateRes);
            })
            .catch((error) => reject(error));
        });
    });
  };
}

export default NoteStore;
