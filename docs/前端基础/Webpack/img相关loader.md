---
title: img相关loader
---

## file-loader

将图片打包，这种方式打包后的图片本质是引入了资源，需要发送网络请求

先安装 file-loader，再进行配置

```bash
npm install file-loader -D
```

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // outputPath: 'img'
              name: 'img/[name]-[hash:6].[ext]'
            }
          }
        ]
      }
    ]
  }
}
```

## url-loader

与 file-loader 类似，但是可以将较小的文件，转成 base64 的 URI

```
npm install url-loader -D
```

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024,
              name: 'img/[name]-[hash:6].[ext]'
            }
          }
        ]
      }
    ]
  }
}
```
