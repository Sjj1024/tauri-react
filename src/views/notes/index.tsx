import {
  CodeOutlined,
  ExportOutlined,
  FormOutlined,
  GithubOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OneToOneOutlined,
  PartitionOutlined,
  PlusOutlined,
  RedoOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, message, Tooltip } from "antd";
import { open } from "@tauri-apps/api/shell";
import "./index.scss";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import Note from "@/components/note";
import Wang from "@/components/wang";
import Markdown from "@/components/md";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteApi from "@/apis/notes";
import NewFile from "@/components/newFile";

const { Search } = Input;

interface noteType {
  title: string;
  type: string;
  category: string;
  digest: string;
  img: string;
  path: string;
  issueNum: string;
  openLink: string;
  downLike: string;
  delete: string;
  sha: string;
  createTime: string;
  updateTime: string;
}

function Notes() {
  const { setting } = useStore();

  const navigate = useNavigate();

  const onSearch = (value: string) => console.log(value);

  const [noteList, setNoteList] = useState<noteType[]>([]);

  // 新建文件、文件夹
  const [show, setShow] = useState(false);
  const [newType, setType] = useState(0);
  const newFile = () => {
    console.log("新创建一个文件");
    setShow(true);
    setType(1);
  };

  const newDir = () => {
    console.log("新创建一个文件夹");
    setShow(true);
    setType(2);
  };

  // 删除文件
  const delNote = () => {
    console.log("删除文件", menuFile);
    // 真删文件
    // noteApi.delFile(menuFile!.path, {
    //   "message": "delete from FileHub",
    //   "sha": menuFile!.sha
    // }).then(delRes => {
    //   console.log("删除成功", delRes);
    // })
    // 逻辑删除
    menuFile!.delete = "true";
    noteApi
      .updateNote(menuFile!.issueNum, {
        title: `DEL::${menuFile?.title}`,
        labels: ["delete"],
        body: JSON.stringify(menuFile),
      })
      .then((delRes) => {
        console.log("删除笔记结果:", delRes);
        getNotes();
      });
  };

  const items = [
    {
      key: "1",
      label: <span onClick={newFile}>新建文件</span>,
    },
    {
      key: "2",
      label: <span onClick={newDir}>新建文件夹</span>,
    },
  ];

  // 监听保存事件
  const mdRef = useRef(null);
  const wangRef = useRef(null);
  const [messageApi, _] = message.useMessage();
  const onKeyDown = (event: any) => {
    if (event.ctrlKey && event.keyCode === 83) {
      console.log("ctrKey + s 保存文档", mdRef, wangRef);
      mdRef.current && (mdRef.current as any).saveMd();
      wangRef.current && (wangRef.current as any).saveHtml();
      message.success("保存文件成功！");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // 获取笔记列表
  const getNotes = async () => {
    const noteRes = await noteApi.getNotes();
    console.log("获取笔记列表", noteRes);
    if (noteRes.status === 200) {
      const issueNotes = (noteRes.data as any).items.reduce((pre, cur) => {
        const note = JSON.parse(cur.body);
        note["issueNum"] = cur.number;
        note.delete === "false" ? pre.push(note) : null;
        return pre;
      }, []);
      console.log("issueNotes--", issueNotes);
      setNoteList(issueNotes);
    } else {
      console.log("获取数据失败", noteRes);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  // 跳转到设置页面
  const goSet = () => {
    navigate("/set", { replace: true });
  };

  // 消息提示
  const showTips = () => {
    console.log("提示内容");
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };

  // 控制侧边栏
  // const [sidBar, setSidBar] = useState(setting.showMenu)
  // 侧边栏控制设置
  const setMenu = () => {
    console.log("setMenu--", setting);
    setting.switchMenu();
  };

  // 笔记本右键菜单
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuFile, setMenuFile] = useState<noteType | null>();
  const noteMenu = (e: MouseEvent, noteInfo) => {
    e.preventDefault();
    setMenuFile(noteInfo);
    console.log("父组件控制：右键菜单", noteInfo);
    menuRef.current!.style.top = e.clientY - 56 + "px";
    menuRef.current!.style.left = e.clientX + 8 + "px";
    menuRef.current!.style.display = "block";
  };
  // 隐藏笔记本菜单
  const hiddenMenu = () => {
    menuRef.current!.style.display = "none";
  };

  // 同步刷新
  const refresh = async () => {
    getNotes();
  };

  // 跳转到仓库主页
  const toMdhub = async () => {
    await open("https://github.com/Sjj1024/tauri-react/tree/dm-hub");
  };

  return (
    <div className="note-main" onClick={hiddenMenu}>
      <div
        className="note-left"
        style={setting.showMenu ? { display: "block" } : { display: "none" }}
      >
        <div className="menu-header">
          <Search placeholder="搜索内容" onSearch={onSearch} />
        </div>
        <div className="menu-list">
          {noteList.map((item) => (
            <Note noteInfo={item} activeMenu={noteMenu} key={item.title} />
          ))}
        </div>
        <div className="menu-footer">
          {/* 刷新同步 */}
          <Tooltip
            title="同步刷新"
            color="white"
            overlayClassName="action-tip"
            overlayInnerStyle={{ color: "black" }}
          >
            <RedoOutlined className="menu-footer-action" onClick={refresh} />
          </Tooltip>
          {/* 新建文件或者文件夹 */}
          <Dropdown menu={{ items }} placement="top" arrow>
            <PlusOutlined className="menu-footer-action" />
          </Dropdown>
          {/* 树形结构/列表结构 */}
          <Tooltip
            title="树形结构"
            color="white"
            overlayClassName="action-tip"
            overlayInnerStyle={{ color: "black" }}
          >
            <PartitionOutlined className="menu-footer-action" />
          </Tooltip>
          <Tooltip
            title="列表结构"
            color="white"
            overlayClassName="action-tip"
            overlayInnerStyle={{ color: "black" }}
          >
            <UnorderedListOutlined className="menu-footer-action" />
          </Tooltip>
          {/* 软件设置 */}
          <Tooltip
            title="软件设置"
            color="white"
            overlayClassName="action-tip"
            overlayInnerStyle={{ color: "black" }}
          >
            <SettingOutlined className="menu-footer-action" onClick={goSet} />
          </Tooltip>
        </div>
      </div>
      <div
        className="note-content"
        style={{ width: setting.showMenu ? "calc(100% - 300px)" : "100%" }}
      >
        <div className="content-main">
          {setting.editor === "wang" ? (
            <Wang ref={wangRef} refNote={getNotes} />
          ) : (
            <Markdown ref={mdRef} config={setting} refNote={getNotes} />
          )}
        </div>
        <div className="content-footer">
          <div>
            {/* 折叠侧边栏 */}
            {setting.showMenu ? (
              <MenuFoldOutlined
                className="menu-footer-action"
                onClick={setMenu}
              />
            ) : (
              <MenuUnfoldOutlined
                className="menu-footer-action"
                onClick={setMenu}
              />
            )}
            <Tooltip
              title="富文本模式"
              color="white"
              overlayClassName="action-tip"
              overlayInnerStyle={{ color: "black" }}
            >
              <FormOutlined
                className="menu-footer-action"
                onClick={() => setting.switchEdit("wang")}
              />
            </Tooltip>
            <Tooltip
              title="MarkDown模式"
              color="white"
              overlayClassName="action-tip"
              overlayInnerStyle={{ color: "black" }}
            >
              <CodeOutlined
                className="menu-footer-action"
                onClick={() => setting.switchEdit("markdown")}
              />
            </Tooltip>
            <Tooltip
              title="实时预览"
              color="white"
              overlayClassName="action-tip"
              overlayInnerStyle={{ color: "black" }}
            >
              <OneToOneOutlined
                className="menu-footer-action"
                onClick={() => setting.switchEdit("preview")}
              />
            </Tooltip>
            <Tooltip
              title="导出文件"
              color="white"
              overlayClassName="action-tip"
              overlayInnerStyle={{ color: "black" }}
            >
              <ExportOutlined
                className="menu-footer-action"
                onClick={showTips}
              />
            </Tooltip>
          </div>
          <div>
            <GithubOutlined className="menu-footer-action" onClick={toMdhub} />
          </div>
        </div>
      </div>
      {/* 笔记本右键菜单 */}
      <div className="note-menu" ref={menuRef}>
        <div className="menu-item">复制链接</div>
        <div className="menu-item" onClick={delNote}>
          删除文件
        </div>
      </div>
      {/* 新建文件夹或者文件 */}
      <NewFile
        newType={newType}
        isShow={show}
        setShow={setShow}
        callBack={getNotes}
      ></NewFile>
    </div>
  );
}

export default observer(Notes);
