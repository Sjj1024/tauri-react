import { CodeOutlined, ExportOutlined, FormOutlined, GithubOutlined, MenuFoldOutlined, MenuUnfoldOutlined, OneToOneOutlined, PartitionOutlined, PlusOutlined, RedoOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, Input, message, Tooltip } from 'antd';
import { open } from '@tauri-apps/api/shell';
import "./index.scss"
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import Note from '@/components/note';
import Wang from "@/components/wang"
import Markdown from '@/components/md';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import loginApi from '@/apis/user'


const { Search } = Input

function Notes() {

  const { setting } = useStore()

  const navigate = useNavigate()

  const onSearch = (value: string) => console.log(value);

  const noteList = [
    {
      id: 1,
      title: "第一篇内容第一篇内容第一篇内容第一篇内容第一篇内容",
      pre: "预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容",
      sha: "唯一sha",
      preImg: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      openLink: "https://ant.design/components/image-cn",
      shareLink: "https://ant.design/components/image-cn",
      show: true
    },
    {
      id: 2,
      title: "第二篇内容",
      pre: "预览的内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容",
      sha: "唯一sha",
      preImg: "",
      openLink: "",
      shareLink: "",
      show: true
    },
    {
      id: 3,
      title: "第一篇内容第一篇内容第一篇内容第一篇内容第一篇内容",
      pre: "预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容",
      sha: "唯一sha",
      preImg: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      openLink: "https://ant.design/components/image-cn",
      shareLink: "https://ant.design/components/image-cn",
      show: true
    },
    {
      id: 4,
      title: "第二篇内容",
      pre: "预览的内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容",
      sha: "唯一sha",
      preImg: "",
      openLink: "",
      shareLink: "",
      show: true
    },
    {
      id: 5,
      title: "第一篇内容第一篇内容第一篇内容第一篇内容第一篇内容",
      pre: "预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容",
      sha: "唯一sha",
      preImg: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      openLink: "https://ant.design/components/image-cn",
      shareLink: "https://ant.design/components/image-cn",
      show: true
    },
    {
      id: 6,
      title: "第二篇内容",
      pre: "预览的内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容",
      sha: "唯一sha",
      preImg: "",
      openLink: "",
      shareLink: "",
      show: true
    },
    {
      id: 7,
      title: "第一篇内容第一篇内容第一篇内容第一篇内容第一篇内容",
      pre: "预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容",
      sha: "唯一sha",
      preImg: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      openLink: "https://ant.design/components/image-cn",
      shareLink: "https://ant.design/components/image-cn",
      show: true
    },
    {
      id: 8,
      title: "第二篇内容",
      pre: "预览的内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容",
      sha: "唯一sha",
      preImg: "",
      openLink: "",
      shareLink: "",
      show: true
    },
    {
      id: 9,
      title: "第一篇内容第一篇内容第一篇内容第一篇内容第一篇内容",
      pre: "预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容",
      sha: "唯一sha",
      preImg: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      openLink: "https://ant.design/components/image-cn",
      shareLink: "https://ant.design/components/image-cn",
      show: true
    },
    {
      id: 10,
      title: "第二篇内容",
      pre: "预览的内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容第二篇内容",
      sha: "唯一sha",
      preImg: "",
      openLink: "",
      shareLink: "",
      show: true
    }
  ]

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          新建文件
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          新建文件夹
        </a>
      ),
    },
  ];

  // 监听保存事件
  const mdRef = useRef(null)
  const wangRef = useRef(null)
  const [messageApi, _] = message.useMessage();
  const onKeyDown = (event: any) => {
    if (event.ctrlKey && event.keyCode === 83) {
      console.log('ctrKey + s 保存文档', mdRef, wangRef);
      mdRef.current && (mdRef.current as any).saveMd()
      wangRef.current && (wangRef.current as any).saveHtml()
      message.success("保存文件成功！")
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  // 跳转到设置页面
  const goSet = () => {
    navigate("/set", { replace: true })
  }

  // 消息提示
  const showTips = () => {
    console.log("提示内容");
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  }

  // 控制侧边栏
  // const [sidBar, setSidBar] = useState(setting.showMenu)
  // 侧边栏控制设置
  const setMenu = () => {
    console.log("setMenu--", setting);
    setting.switchMenu()
  }

  // 笔记本右键菜单
  const menuRef = useRef<HTMLDivElement>(null)
  const noteMenu = (e: MouseEvent) => {
    e.preventDefault()
    console.log("父组件控制：右键菜单", menuRef.current, e);
    menuRef.current!.style.top = (e.clientY - 56) + "px"
    menuRef.current!.style.left = (e.clientX + 8) + "px"
    menuRef.current!.style.display = "block"
  }
  // 隐藏笔记本菜单
  const hiddenMenu = () => {
    menuRef.current!.style.display = "none"
  }

  // 同步刷新
  const refresh = async () => {
    const loginRes = await loginApi.loginUserName("1024")
    console.log("refresh------", loginRes);
  }


  // 跳转到仓库主页
  const toMdhub = async () => {
    await open('https://github.com/Sjj1024/tauri-react/tree/dm-hub');
  }

  return (
    <div className="note-main" onClick={hiddenMenu}>
      <div className="note-left" style={setting.showMenu ? { display: 'block' } : { display: 'none' }}>
        <div className="menu-header">
          <Search placeholder="搜索内容" onSearch={onSearch} />
        </div>
        <div className="menu-list">
          {
            noteList.map(item => <Note noteInfo={item} activeMenu={noteMenu} key={item.id}></Note>)
          }
        </div>
        <div className="menu-footer">
          {/* 刷新同步 */}
          <Tooltip title="同步刷新" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <RedoOutlined className='menu-footer-action' onClick={refresh} />
          </Tooltip>
          {/* 新建文件或者文件夹 */}
          <Dropdown menu={{ items }} placement="top" arrow>
            <PlusOutlined className='menu-footer-action' />
          </Dropdown>
          {/* 树形结构/列表结构 */}
          <Tooltip title="树形结构" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <PartitionOutlined className='menu-footer-action' />
          </Tooltip>
          <Tooltip title="列表结构" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <UnorderedListOutlined className='menu-footer-action' />
          </Tooltip>
          {/* 软件设置 */}
          <Tooltip title="软件设置" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <SettingOutlined className='menu-footer-action' onClick={goSet} />
          </Tooltip>
        </div>
      </div>
      <div className="note-content" style={{ width: setting.showMenu ? "calc(100% - 300px)" : "100%" }}>
        <div className='content-main'>
          {setting.editor === "wang" ? <Wang ref={wangRef} /> : <Markdown ref={mdRef} config={setting} />}
        </div>
        <div className='content-footer'>
          <div>
            {/* 折叠侧边栏 */}
            {setting.showMenu ? <MenuFoldOutlined className='menu-footer-action' onClick={setMenu} /> : <MenuUnfoldOutlined className='menu-footer-action' onClick={setMenu} />}
            <Tooltip title="富文本模式" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
              <FormOutlined className='menu-footer-action' onClick={() => setting.switchEdit("wang")} />
            </Tooltip>
            <Tooltip title="MarkDown模式" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
              <CodeOutlined className='menu-footer-action' onClick={() => setting.switchEdit("markdown")} />
            </Tooltip>
            <Tooltip title="实时预览" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
              <OneToOneOutlined className='menu-footer-action' onClick={() => setting.switchEdit("preview")} />
            </Tooltip>
            <Tooltip title="导出文件" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
              <ExportOutlined className='menu-footer-action' onClick={showTips} />
            </Tooltip>
          </div>
          <div>
            <GithubOutlined className='menu-footer-action' onClick={toMdhub} />
          </div>
        </div>
      </div>
      {/* 笔记本右键菜单 */}
      <div className='note-menu' ref={menuRef}>
        <div className='menu-item'>复制链接</div>
        <div className='menu-item'>删除文件</div>
      </div>
    </div>
  )
}


export default observer(Notes)