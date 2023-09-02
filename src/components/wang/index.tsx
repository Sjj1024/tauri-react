import { useState, useEffect, useImperativeHandle } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
// import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import "./index.scss";
import useStore from "@/store";

function Wang(_, ref) {
  // 编辑器内容
  const { noteActive } = useStore();

  // 暴露出去给父组件调用的函数
  useImperativeHandle(ref, () => ({
    saveHtml: () => {
      console.log("保存富文本内容");
      // localStorage.setItem("notes", html);
      // 调用接口更新文档内容
      noteActive.updateFile(html);
    },
  }));
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法

  const [html, setHtml] = useState("<p>hello</p>");

  // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  //   setTimeout(() => {
  //     const notes = localStorage.getItem("notes") || "<p>hello world</p>";
  //     setHtml(notes);
  //   }, 500);
  // }, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: "请输入内容...",
    autoFocus: false,
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div
        style={{ border: "1px solid #ccc", zIndex: 100 }}
        className="wang-main"
      >
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={noteActive.activeNote.content}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          className="wang-edit"
        />
      </div>
    </>
  );
}

export default observer(Wang, { forwardRef: true });
