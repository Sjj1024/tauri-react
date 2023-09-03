import { Input, Modal } from "antd";
import { useState } from "react";
import "./index.scss";
import noteApi from "@/apis/notes";
import { observer } from "mobx-react-lite";
import useStore from "@/store";

function NewFile({ isShow, setShow, newType, callBack }) {
  const [fileName, setFileName] = useState("");
  const [dirName, setdirName] = useState("");
  const [dirDigest, setdirDigest] = useState("");

  const { noteActive } = useStore();

  const handleOk = () => {
    setShow(false);
    newType === 1 ? creatFile() : creatDir();
  };

  // 新建文件
  const creatFile = () => {
    console.log("新建文件", fileName);
    // 先创建文件
    noteApi
      .uploadFile(fileName, {
        message: "Upload From DocHub",
        content: "",
      })
      .then((upRes) => {
        console.log("上传成功", upRes);
        const { path, sha, name } = (upRes.data as any).content;
        const tempNote = {
          title: name,
          type: "md",
          path: path,
          category: "分类",
          digest: "",
          img: "",
          openLink: `https://cdn.staticaly.com/gh/${localStorage.getItem(
            "loginName"
          )!}/Dochub@main/${path}`,
          downLike: `https://cdn.staticaly.com/gh/${localStorage.getItem(
            "loginName"
          )!}/Dochub@main/${path}`,
          delete: "false",
          sha: sha,
          issueNum: "",
          fileSha: sha,
          createTime: "2023.8.22",
          updateTime: "2023.8.23",
        };
        const fileInfo = {
          title: `DOC::${name}`,
          labels: ["documentation"],
          body: JSON.stringify(tempNote),
        };
        noteApi.creatIssue(fileInfo).then((issRes) => {
          console.log("issue创建成功:", issRes);
          // 设置激活笔记
          tempNote.issueNum = (issRes.data as any).number;
          noteActive.setActive(tempNote);
          // 刷新笔记列表
          setTimeout(() => callBack(), 1000);
        });
      });
    // 再创建issue

    handleCancel();
  };

  // 新建文件夹
  const creatDir = () => {
    console.log("新建文件夹", dirName, dirDigest);
    handleCancel();
  };

  const handleCancel = () => {
    setShow(false);
    setdirName("");
    setFileName("");
    setdirDigest("");
    console.log("newType", newType);
  };

  return (
    <div>
      <Modal
        title={newType === 1 ? "新建文件" : "新建文件夹"}
        open={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="content">
          {newType === 1 ? (
            <div className="form-line">
              <span className="label">文件名:</span>
              <Input
                placeholder="请输入文件名"
                key="fileName"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
          ) : (
            <>
              <div className="form-line">
                <span className="label">文件夹:</span>
                <Input
                  placeholder="请输入文件夹名称"
                  key="dirName"
                  value={dirName}
                  onChange={(e) => setdirName(e.target.value)}
                />
              </div>
              <div className="form-line">
                <span className="label">描&nbsp;&nbsp;&nbsp;&nbsp;述:</span>
                <Input
                  placeholder="请输入描述内容"
                  key="dirDigest"
                  value={dirDigest}
                  onChange={(e) => setdirDigest(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default observer(NewFile);
