---
title: craco
categories:
  - 框架
tags:
  - React
---

## craco

安装 @craco/craco

```bash
npm install @craco/craco
```

## package.json

```json
"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

## craco.config.cjs

配置别名

```javascript
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
```
