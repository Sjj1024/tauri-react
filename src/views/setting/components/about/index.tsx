import "./index.scss"

export default function About() {

  const codeInfo = {
    "wxPayCode": localStorage.getItem("wxPayCode") || "https://sjj1024.github.io/DataHub/FileData/config/wx.webp",
    "aliPayCode": localStorage.getItem("aliPayCode") || "https://sjj1024.github.io/DataHub/FileData/config/zf.webp",
    "qqChatCode": localStorage.getItem("qqChatCode") || "https://sjj1024.github.io/DataHub/FileData/config/qq.webp",
    "wxChatCode": localStorage.getItem("wxChatCode") || "https://sjj1024.github.io/DataHub/FileData/config/wxq.webp"
  }

  return (
    <div className="help-box">
      <div className="filehub-info">
        <h3>项目介绍：<a href="https://github.com/Sjj1024/s-hub" target="_blank" className="alink">Github主页</a></h3>
        <span>
          FileHub是一个依托Github
          Api开发的开源免费文件系统软件，功能类似百度云，但没有百度云的会员限制。主要用作图床和网络文件存储。其他附加功能并不是本软件的核心功能，但是就是想集成进去，因为可能是我个人常用的功能。有问题请<a href="https://github.com/Sjj1024/s-hub/issues" target="_blank" className="alink">提交Issue</a>。如果对你有帮助，可以请我喝个咖啡：
        </span><br />
        <span className="praise">
          <span className="pay-box">
            <div>微信赞赏码</div>
            <img className="pay-code" src={codeInfo.wxPayCode} alt="" />
          </span>
          <span className="pay-box">
            <div>支付宝打赏</div>
            <img className="pay-code" src={codeInfo.aliPayCode} alt="" />
          </span>
          <span className="pay-box">
            <div>QQ交流群</div>
            <img className="pay-code" src={codeInfo.qqChatCode} />
          </span>
          <span className="pay-box">
            <div>微信交流群</div>
            <img className="pay-code" src={codeInfo.wxChatCode} />
          </span>
        </span>
      </div>
      <br />
      <div>
        <h3>我的信息</h3>
        <span>曾就职于上海华为实验室，现自由开发者，如果你有开发需求，可以联系我合作，合作流程：按照合作谈定的价格，预付50%的项目款，开始工作。完成验收后，支付尾款。价格参考：视具体项目难度和工作量。<br />
          技术栈：Python\Java\Kotlin\Swift\Go\HTML\Vue\React\UniAPP\Tauri\Rust等<br />
          平台主页：
          <a href="https://github.com/Sjj1024" target="_blank" className="alink">Github主页</a>&nbsp;&nbsp;&nbsp;
          <a href="https://xiaoshen.blog.csdn.net/?type=blog" target="_blank"
            className="alink">CSDN(200W+)</a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Sjj1024/s-hub" target="_blank" className="alink">Bilibili主页</a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Sjj1024/s-hub" target="_blank" className="alink">抖音主页</a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Sjj1024/s-hub" target="_blank" className="alink">微信公众号</a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Sjj1024/s-hub" target="_blank" className="alink">今日头条</a><br />
          联系邮箱：1024xiaoshen@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;QQ/微信: 2950525265<br />
        </span>
      </div>
    </div>
  )
}
