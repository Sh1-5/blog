---
title: webpack-dev-server
categories:
  - 前端进阶
tags:
  - Webpack
---

## 作用

监听文件变化，重新编译并自动刷新浏览器

## 使用

安装

```bash
npm install webpack-dev-server -D
```

在 package.json 中添加脚本"serve": "webpack serve"

基于 express 搭建的本地服务器

特别注意：webpack-dev-server 帮助我们打包后并没有输出，而是使用 memfs 将其输出在内存中

## 特别配置

```javascript
module.exports = {
  target: 'web',
  devServer: {
    contentBase: './source', // 如果webpack没有提供资源，那么会在source文件夹中加载
    // static: './source', // webpack5
    hot: true, // 模块热替换,
    host: '0.0.0.0', // 主机地址
    port: 6666, // 端口
    open: true, // 自动打开浏览器
    compress: true // 压缩加载资源
    // ...
  }
}
```

实现模块热替换

```javascript
if (module.hot) {
  module.hot.accept('./js/bar.js', () => {
    // 监听模块热替换
  })
}
```

开启 HMR 之后，webpack-dev-server 会在浏览器和文件资源之间建立 socket 连接
