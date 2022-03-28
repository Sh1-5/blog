---
title: css相关loader
categories:
  - 前端进阶
tags:
  - Webpack
---

## css-loader

处理 css 导入

## style-loader

把 css 插入到 dom 中

## css 处理

先安装 css-loader 和 style-loader，再进行配置

```sh
npm install css-loader style-loader -D
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

## less-loader

将 less 编译为 css，同时需要 less

## less 处理

先安装 css-loader 和 style-loader 和 less、less-loader，再进行配置

```sh
npm install css-loader style-loader less less-loader -D
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
```
