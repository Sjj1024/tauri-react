import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { appWindow } from '@tauri-apps/api/window'
import { useEffect } from 'react'
import './index.scss'
// import LogoImg from '@/assets/images/logo.png'
import { CloseOutlined, ExpandOutlined, MinusOutlined } from '@ant-design/icons'
import { Dropdown, Progress, Tooltip } from 'antd'

export default function Layout() {

  // 路由的hooks
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // 窗口控制功能
    document
      .getElementById('titlebar-minimize')!
      .addEventListener('click', () => appWindow.minimize())
    document
      .getElementById('titlebar-maximize')!
      .addEventListener('click', () => appWindow.toggleMaximize())
    document
      .getElementById('titlebar-close')!
      .addEventListener('click', () => appWindow.close())
  }, [])


  useEffect(() => {
    // API限制进度
    if (location.pathname !== "/") {
      document.querySelector("div.ant-progress-bg")!.innerHTML = "<span class='api-text'>API剩余：99.67%</span>"
    }
  }, [location])



  // 退出登录
  const logout = () => {
    navigate("/", { replace: true })
  }

  // 跳转设置
  const goSet = () => {
    navigate("/set", { replace: true })
  }

  const items = [
    {
      key: '1',
      label: (
        <span onClick={goSet}>
          用户设置
        </span>
      ),
    },
    {
      key: '2',
      label: (
        <span onClick={logout}>
          切换账号
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <span onClick={logout}>
          退出登录
        </span>
      ),
    },
  ];

  return (
    <>
      {/* 统一的头部内容 */}
      <div className="main-header" data-tauri-drag-region>
        {/* log显示 */}
        <div className="header-action" data-tauri-drag-region>
          <img src="https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/dochub-b.2tlycxl6mhu0.webp" alt="" className="action-logo" data-tauri-drag-region />
          {/* 接口使用显示 */}
          {location.pathname === "/" ? null :
            <Tooltip overlayClassName="api-tip" placement="right" title="每小时可发送5000个请求, 已使用：3, 剩余：5498 恢复时间：2023/8/18">
              <Progress percent={89} size={[200, 20]} className="api-limit" showInfo={false}></Progress>
            </Tooltip>
          }
        </div>
        {/* 窗口控制按钮 */}
        <div data-tauri-drag-region className="titlebar">
          {/* 用户头像 */}
          <div className='user-box'>
            {location.pathname === "/" ? null :
              <Dropdown menu={{ items }} placement="bottom" arrow>
                <img src="https://avatars.githubusercontent.com/u/48399687?v=4" alt="" className='user-icon' />
              </Dropdown>
            }
          </div>
          {/* 窗口控制 */}
          <div className="titlebar-button" id="titlebar-minimize">
            <MinusOutlined />
          </div>
          <div className="titlebar-button" id="titlebar-maximize">
            <ExpandOutlined />
          </div>
          <div className="titlebar-button" id="titlebar-close">
            <CloseOutlined />
          </div>
        </div>
      </div>
      {/* 内容渲染区域 */}
      <div className="main-box">
        <Outlet></Outlet>
      </div>
    </>
  )
}
