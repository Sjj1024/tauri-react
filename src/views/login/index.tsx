import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import loginApi from '@/apis/user'
import { useState } from 'react'
import { useStore } from '@/store'
import { rsaDecode, rsaEncode } from '@/utils/encode'

function Login() {
  const navigate = useNavigate()
  const { userInfo } = useStore()
  const [messageApi, contextHolder] = message.useMessage()

  const [loading, setLoading] = useState(false)

  const firstRegistInit = async (token: string) => {
    // frok仓库FileHub，然后登陆
    const payload = {
      "name": "Dochub",
      "include_all_branches": false
    }
    // 使用Filehub作为模板创建一个新仓库
    const frokRes = await loginApi.creatDocHub(token, payload)
    if (frokRes.status === 201) {
      console.log("Creat DocHub 成功");
    } else {
      console.log("Creat DocHub 出错", frokRes);
    }
  }

  // 登陆或者注册逻辑
  const onFinish = async (values: any) => {
    console.log('注册登陆行为:', values)
    localStorage.setItem("username", values.username)
    localStorage.setItem("password", values.password)
    setLoading(true)
    // 注册行为
    if (regist) {
      message.info("第一次注册时间比较长，请耐心等待...")
      console.log("注册：");
      // 判断用户名是否重复
      const loginRes = await loginApi.loginUserName(values.username)
      console.log("获取用户名结果", loginRes);
      if (loginRes.status === 404) {
        // 说明没有重复可以注册
        console.log("可以注册");
        if (values.username && values.password && values.token) {
          const res = await loginApi.getUserInfo(`${values.token}`)
          localStorage.setItem("token", values.token)
          if (res.status === 200) {
            console.log("可以获取到用户信息", res);
            const { name, login, avatar_url } = res.data as any
            userInfo.setUserInfo({
              userName: name,
              loginName: login,
              avatarUrl: avatar_url
            })
            // 初始化一个存储文档的仓库
            firstRegistInit(values.token)
            // 文件名直接使用用户名，文件内容：用户名+密码+token加密
            const encodeUser = rsaEncode(JSON.stringify(values))
            const user = {
              "body": encodeUser,
              "title": `[dochub]userName:${values.username}`
            }
            const registRes = await loginApi.registUser(values.token, user)
            if (registRes.status === 201) {
              // 说明注册成功
              const timer = setInterval(() => {
                loginApi.checkReady(`/repos/${login}/Dochub/contents/README.md`).then(checkRes => {
                  // console.log("checkReady----", checkRes);
                  if (checkRes.status === 200) {
                    clearInterval(timer)
                    navigate('/notes', { replace: true })
                    setRegist(false)
                    message.success("欢迎使用Dochub")
                  } else {
                    console.log("还在检查中:", checkRes);
                  }
                })
              }, 1500)
            } else {
              console.log("注册失败:", registRes);
            }
          } else {
            console.log("token无效:", res);
            message.error("Token无效，请更换正确的Token")
            setLoading(false)
            return
          }
        }
      } else {
        message.error("用户名重复，请更换用户名")
        setLoading(false)
        return
      }
    } else {
      console.log("登陆：");
      if (values.username && values.password) {
        console.log("登陆接口");
        const loginRes = await loginApi.loginUserName(values.username)
        if (loginRes.status === 200) {
          const rsaContent = JSON.parse(rsaDecode(atob((loginRes.data as any).content)))
          // // console.log("rsaDecode----", rsaContent, loginForm);
          if (rsaContent.username === values.username && rsaContent.password === values.password) {
            // console.log("用户名密码正确", rsaContent);
            console.log("用户名密码正确:");
            const res = await loginApi.getUserInfo(rsaContent.token)
            if (res.status === 200) {
              localStorage.setItem("token", rsaContent.token)
              console.log("可以获取到用户信息", res);
              const { name, login, avatar_url } = res.data as any
              userInfo.setUserInfo({
                userName: name,
                loginName: login,
                avatarUrl: avatar_url
              })
              navigate('/notes', { replace: true })
              setRegist(false)
            } else {
              console.log("token失效");
            }
          } else {
            console.log("用户名密码不正确");
            message.error("用户名密码不正确")
          }
        } else {
          console.log("没有找到该用户");
          message.error("没有找到该用户")
        }
      } else {
        messageApi.open({
          type: 'error',
          content: '请将输入框填写完整',
        })
      }
    }
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
            initialValue={localStorage.getItem("username") || ""}
            rules={[{ required: true, message: '请输入用户名' }]}
            className="username"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            initialValue={localStorage.getItem("password") || ""}
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
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
