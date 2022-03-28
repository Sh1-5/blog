---
title: mode和devtool
categories:
  - 前端进阶
tags:
  - Webpack
---

## mode 和 devtool

```javascript
module.exports = {
  mode: 'development', // 采用开发者模式打包，代码不会进行压缩丑化
  devtool: 'source-map' // 开启source-map后会生成对应的source-map文件，方便调试和debug
}
```
