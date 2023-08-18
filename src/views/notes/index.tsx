import Note from '@/components/note';
import { Input } from 'antd';
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
      <div className="menu-footer">底部功能区域</div>
    </div>
    <div className="note-content">
      <div>内容区域</div>
      <div>底部功能区</div>
    </div>
  </div>
}
