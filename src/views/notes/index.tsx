import { Input } from 'antd';
import "./index.scss"

const { Search } = Input;

export default function Notes() {

  const onSearch = (value: string) => console.log(value);

  return <div className="note-main">
    <div className="note-left">
      <div className="note-action">
        <div className="menu-header">
          <Search placeholder="搜索内容" onSearch={onSearch} />
        </div>
        <div className="menu-list">中间文档列表</div>
      </div>
      <div className="menu-footer">底部功能区域</div>
    </div>
    <div className="note-content">
      <div>内容区域</div>
      <div>底部功能区</div>
    </div>
  </div>
}
