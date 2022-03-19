---
title: copy-webpack-plugin
---

## 作用

复制文件

```bash
npm install copy-webpack-plugin -D
```

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      // 匹配的对象
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [] // 忽略的文件
          }
        }
      ]
    })
  ]
}
```
