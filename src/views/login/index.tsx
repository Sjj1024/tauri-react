import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import loginApi from '@/apis/user'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()

  const [loading, setLoading] = useState(false)

  // 登陆或者注册逻辑
  const onFinish = async (values: any) => {
    console.log('注册登陆行为:', values)
    setLoading(true)
    // 注册行为
    if (regist) {
      console.log("注册：");
      // 判断用户名是否重复
      const loginRes = await loginApi.loginUserName(values.username)
      console.log("获取用户名结果", loginRes);

    } else {
      console.log("登陆：");

    }
    if (values.username && values.password) {
      // 使用github token获取用户信息
      // const res = await commonApi.getUserInfo(values.token)
      // console.log('获取用户信息', res)
      // if (res && (res as any).name) {
      //     messageApi.open({
      //         type: 'success',
      //         content: '校验成功',
      //     })
      //     // 将Token存储到本地
      //     localStorage.setItem('token', values.token)
      //     userInfo.setUserInfo({
      //         userName: (res as any).name,
      //         loginName: (res as any).login,
      //         avatarUrl: (res as any).avatar_url,
      //     })
      //     navigate('/', { replace: true })
      //     setLoading(false)
      // }
      // navigate('/notes', { replace: true })
      console.log("登陆接口");
    } else {
      messageApi.open({
        type: 'error',
        content: '请将输入框填写完整',
      })
    }
    // navigate('/', { replace: true })
  }

  // 忘记密码了
  const forget = () => {
    message.warning("忘记密码请联系微信或者QQ：648133599")
  }

  // 控制登陆还是注册
  const [regist, setRegist] = useState(false)

  return (
    <div className="login-box" data-tauri-drag-region>
      {contextHolder}
      <div className="login-main">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
            className="username"
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon" />
              }
              placeholder="用户名"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={
                <LockOutlined className="site-form-item-icon" />
              }
              type="password"
              placeholder="密码"
              size="large"
            />
          </Form.Item>
          {/* 注册状态下添加Token */}
          {
            regist ? <Form.Item
              name="token"
              rules={[{ required: true, message: '请输入Github Token' }]}
            >
              <Input
                prefix={
                  <VerifiedOutlined className="site-form-item-icon" />
                }
                type="password"
                placeholder="Github Token"
                size="large"
              />
            </Form.Item> : null
          }
          <div className='login-action'>
            <span className='login-tip' onClick={forget}>忘记密码了？</span>
            {
              regist ?
                (<>
                  <span className='login-tip' onClick={() => setRegist(false)}>获取一个Token</span>
                  <span className='login-tip' onClick={() => setRegist(false)}>用户名登陆</span>
                </>
                ) :
                <span className='login-tip' onClick={() => setRegist(true)}>注册新账号</span>
            }
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
              loading={loading}
            >
              {regist ? "注册" : "登陆"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login
