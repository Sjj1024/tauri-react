import Note from '@/components/note';
import { CodeOutlined, FormOutlined, InteractionOutlined, MenuFoldOutlined, MenuUnfoldOutlined, OneToOneOutlined, PartitionOutlined, PlusOutlined, RedoOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, Input, Tooltip } from 'antd';
import "./index.scss"

const { Search } = Input;

export default function Notes() {

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

  return <div className="note-main">
    <div className="note-left">
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
    <div className="note-content">
      <div className='content-main'>内容区域</div>
      <div className='content-footer'>
        {/* 折叠侧边栏 */}
        <Tooltip title="隐藏侧边栏" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <MenuFoldOutlined className='menu-footer-action' />
        </Tooltip>
        <Tooltip title="显示侧边栏" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <MenuUnfoldOutlined className='menu-footer-action' />
        </Tooltip>
        <Tooltip title="MarkDown模式" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <CodeOutlined className='menu-footer-action' />
        </Tooltip>
        <Tooltip title="富文本模式" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <FormOutlined className='menu-footer-action' />
        </Tooltip>
        <Tooltip title="模式切换" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <InteractionOutlined className='menu-footer-action' />
        </Tooltip>
        <Tooltip title="实时预览" color="white" overlayClassName="action-tip" overlayInnerStyle={{ color: "black" }}>
          <OneToOneOutlined className='menu-footer-action' />
        </Tooltip>
      </div>
    </div>
  </div>
}
