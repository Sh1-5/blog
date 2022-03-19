---
title: html-webpack-plugin
---

## 作用

生成 html 模版

安装后，导入 CleanWebpackPlugin 类，创建一个实例

```bash
npm install html-webpack-plugin
```

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [new HtmlWebpackPlugin()]
}
```

在创建实例的时候可以传入一个配置对象

具体见[](html-webpack-plugin)[https://github.com/jantimon/html-webpack-plugin#options]
