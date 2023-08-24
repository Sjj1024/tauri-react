# Tauri + React + Typescript

一个使用 tauri+react+ts 开发的线上笔记本软件，依托 Github api 作为接口，实现创建笔记文件，创建文件夹，删除笔记，富文本编辑笔记，Markdown 编辑笔记，Markdown 实时预览，预览同步滚动，图片/视频/音乐等文件上传同步存储等功能

使用到的技术栈：  
tauri：必须要用到的  
react：前端页面开发框架，也可以用 Vue  
react-router：路由页面跳转控制  
mobx：数据存储和共享  
antd：UI 页面渲染  
sass：样式编程  
node：v16.18.0 本地开发依赖

## 页面预览

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.35ywvl1kmdc0.webp)

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.39hqgfcwwg80.webp)

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.1zdc3yt6nylc.webp)

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.z3wf7msueeo.webp)

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.4l8136m6fp20.webp)

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.5rni30s4jws0.webp)

## 本地开发配置

克隆到本地：

```
git clone https://github.com/Sjj1024/tauri-react.git
```

安装依赖：

```
pnpm install
```

开发预览：第一次比较耗时和消耗电脑性能，因为要安装 tauri 依赖

```
pnpm develop
```

编译打包：打包为不同平台的安装文件

```
pnpm bundle
```

## 使用 Github Action 发版

使用 github action 打包不同平台的安装包，然后发布新版本，并支持自动升级。操作教程：[tauri 在 github 上进行自动更新打包并发版过程，实战操作避坑](https://xiaoshen.blog.csdn.net/article/details/131963524)

打 tag 命令：

```
git tag v0.0.2
```

推 tag 命令：

```
git push --tag
```
