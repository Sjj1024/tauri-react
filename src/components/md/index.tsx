import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
// 1. 引入markdown-it库
import markdownIt from 'markdown-it'
import "./index.scss"
import "./theme/styles/hybrid.min.css"
import 'github-markdown-css'
import hljs from './theme/highlight.js'
import TextArea from 'antd/es/input/TextArea'
import { InputRef } from 'antd'

// 2. 生成实例对象
const md = new markdownIt({
  html: true,
  linkify: false,
  typographer: true,
  // 设置代码高亮的配置
  highlight: function (code, language) {
    if (language && hljs.getLanguage(language)) {
      try {
        return `<pre><code class="hljs language-${language}">` +
          hljs.highlight(code, { language }).value +
          '</code></pre>';
      } catch (__) { }
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(code) + '</code></pre>';
  }
})

// 同步滚动配置
let scrolling: 0 | 1 | 2 = 0
let scrollTimer;

function Markdown(props, ref) {

  // 暴露出去的实例对象应该有哪些函数
  useImperativeHandle(ref, () => ({
    saveMd: () => {
      console.log("保存markdown内容", htmlString);
      localStorage.setItem("notes", htmlString)
    }
  }))

  // 驱动一个元素进行滚动
  const driveScroll = (scale: number, el: HTMLElement) => {
    let { scrollHeight, clientHeight } = el
    el.scrollTop = (scrollHeight - clientHeight) * scale  // scrollTop的同比例滚动
    if (scrollTimer) clearTimeout(scrollTimer);
    // 是否在滚动了
    scrollTimer = setTimeout(() => {
      scrolling = 0
      clearTimeout(scrollTimer)
    }, 200)
  }

  const handleScroll = (block: number, event) => {
    let { scrollHeight, scrollTop, clientHeight } = event.target
    let scale = scrollTop / (scrollHeight - clientHeight)  // 改进后的计算滚动比例的方法
    if (block === 1) {
      if (scrolling === 0) scrolling = 1;
      if (scrolling === 2) return;
      driveScroll(scale, showRef.current!)
    } else if (block === 2) {
      if (scrolling === 0) scrolling = 2;
      if (scrolling === 1) return;
      // 同步滚动真正的textArea元素
      driveScroll(scale, (inputRef.current! as any).resizableTextArea.textArea)
    }
  }

  const [htmlString, setHtmlString] = useState('')  // 存储解析后的html字符串
  // 3. 解析markdown语法
  const parse = (text: string) => setHtmlString(md.render(text));
  // 4.控制md模式和预览模式
  const { config } = props
  // 设置文本框自动获取焦点
  const inputRef = useRef<InputRef>(null);
  const showRef = useRef(null)


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
          onScroll={(e) => handleScroll(1, e)}
          onChange={(e) => parse(e.target.value)}
          bordered={false}
        />
      </div>
      {
        config.editor === "preview" ? <div
          className="preview markdown-body"
          ref={showRef}
          onScroll={(e) => handleScroll(2, e)}
          dangerouslySetInnerHTML={{ __html: htmlString }} // 将html字符串解析成真正的html标签
        /> : null
      }
    </div>
  )
}


export default forwardRef(Markdown)