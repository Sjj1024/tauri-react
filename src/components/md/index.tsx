import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
// 1. 引入markdown-it库
import markdownIt from 'markdown-it'
import "./index.scss"
import TextArea from 'antd/es/input/TextArea'
import { InputRef } from 'antd'

// 2. 生成实例对象
const md = new markdownIt()

function Markdown(props, ref) {

  // 暴露出去的实例对象应该有哪些函数
  useImperativeHandle(ref, () => ({
    saveMd: () => {
      console.log("保存markdown内容");
      localStorage.setItem("notes", htmlString)
    }
  }))

  const [htmlString, setHtmlString] = useState('')  // 存储解析后的html字符串
  // 3. 解析markdown语法
  const parse = (text: string) => setHtmlString(md.render(text));
  // 4.控制md模式和预览模式
  const { config } = props
  // 设置文本框自动获取焦点
  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    console.log("inputRef-", inputRef.current);
    inputRef.current!.focus({
      cursor: 'end',
    });
  }, [])

  return (
    <div className="markdown-main">
      <div className='md-box' style={{ width: config.editor === "preview" ? "50%" : "100%" }}>
        <TextArea
          className="markdown"
          rows={4}
          ref={inputRef}
          style={{ resize: 'none' }}
          onChange={(e) => parse(e.target.value)}
          bordered={false}
        />
      </div>
      {
        config.editor === "preview" ? <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: htmlString }} // 将html字符串解析成真正的html标签
        /> : null
      }
    </div>
  )
}


export default forwardRef(Markdown)