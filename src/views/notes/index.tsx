import { CodeOutlined, ExportOutlined, FormOutlined, GithubOutlined, MenuFoldOutlined, MenuUnfoldOutlined, OneToOneOutlined, PartitionOutlined, PlusOutlined, RedoOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, Input, Tooltip } from 'antd';
import "./index.scss"
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import Note from '@/components/note';
import Wang from "@/components/wang"
import Markdown from '@/components/md';
import { useEffect, useRef } from 'react';


const { Search } = Input

function Notes() {

  const { setting } = useStore()

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
  const onKeyDown = (event: any) => {
    console.log("keyEvent--", event);
    if (event.ctrlKey && event.keyCode === 83) {
      console.log('ctrKey + s 保存文档', mdRef, wangRef);
      mdRef.current && (mdRef.current as any).saveMd()
      wangRef.current && (wangRef.current as any).saveHtml()
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  // 控制侧边栏
  // const [sidBar, setSidBar] = useState(setting.showMenu)
  // 侧边栏控制设置
  const setMenu = () => {
    console.log("setMenu--", setting);
    setting.switchMenu()
  }

  return <div className="note-main">
    <div className="note-left" style={setting.showMenu ? { display: 'block' } : { display: 'none' }}>
      <div className="menu-header">
        <Search placeholder="搜索内容" onSearch={onSearch} />
      </div>
      <div className="menu-list">
        {
          noteList.map(item => <Note noteInfo={item} key={item.id}></Note>)
        }
      </div>
      <div className="menu-footer">
        {/* 刷新同步 */}
        <Tooltip title="同步刷新" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <RedoOutlined className='menu-footer-action' />
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
          <SettingOutlined className='menu-footer-action' />
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
          {/* <Tooltip title="模式切换" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <InteractionOutlined className='menu-footer-action' />
        </Tooltip> */}
          <Tooltip title="MarkDown模式" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <CodeOutlined className='menu-footer-action' onClick={() => setting.switchEdit("markdown")} />
          </Tooltip>
          <Tooltip title="实时预览" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <OneToOneOutlined className='menu-footer-action' onClick={() => setting.switchEdit("preview")} />
          </Tooltip>
          <Tooltip title="导出文件" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
            <ExportOutlined className='menu-footer-action' onClick={() => setting.switchEdit("preview")} />
          </Tooltip>
        </div>
        <div>
          <GithubOutlined className='menu-footer-action' />
        </div>
      </div>
    </div>
  </div>
}


export default observer(Notes)