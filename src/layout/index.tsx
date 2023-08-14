import { Outlet } from 'react-router-dom'
import { appWindow } from '@tauri-apps/api/window'
import { useEffect } from 'react'
import './index.scss'
import LogoImg from '@/assets/images/logo.png'
import { CloseOutlined, ExpandOutlined, MinusOutlined } from '@ant-design/icons'

export default function Layout() {
    useEffect(() => {
        document
            .getElementById('titlebar-minimize')!
            .addEventListener('click', () => appWindow.minimize())
        document
            .getElementById('titlebar-maximize')!
            .addEventListener('click', () => appWindow.toggleMaximize())
        document
            .getElementById('titlebar-close')!
            .addEventListener('click', () => appWindow.close())
        console.log(
            'onMounted------',
            document.getElementById('titlebar-close')
        )
    }, [])

    return (
        <>
            {/* 统一的头部内容 */}
            <div className="main-header" data-tauri-drag-region>
                <div className="header-action">
                    <img src={LogoImg} alt="" className="action-logo" />
                </div>
                <div data-tauri-drag-region className="titlebar">
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
