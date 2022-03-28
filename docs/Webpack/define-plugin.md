---
title: define-plugin
categories:
  - 前端进阶
tags:
  - Webpack
---

## 作用

在编译时创建配置的全局常量，是 webpack 内置的一个插件，直接导入即可

```javascript
const { DefinePlugin } = require('webpack')

module.exports = {
  plugins: [
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}
```

在创建时可以传入一个配置对象，取值的时候是被当作一个变量，如果确定是字符串，则需使用双层引号
