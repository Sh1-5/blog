---
title: clean-webpack-plugin
categories:
  - 前端
tags:
  - Webpack
---

## 作用

自动删除之前打包生成的文件夹

安装后，导入 CleanWebpackPlugin 类，创建一个实例

```bash
npm install clean-webpack-plugin -D
```

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [new CleanWebpackPlugin()]
}
```
