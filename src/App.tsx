/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/login'
import LayoutBoard from './layout'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import Setter from './views/setting'
import Notes from './views/notes'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          {/* 布局组件 */}
          <Route path="/" element={<LayoutBoard />}>
            {/* 登陆组件 */}
            <Route index element={<Login />}></Route>
            {/* 二级路由出口 */}
            <Route path="notes" element={<Notes />}></Route>
            <Route path="set" element={<Setter />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
