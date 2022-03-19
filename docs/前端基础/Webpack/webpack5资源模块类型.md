---
title: webpack5 模块资源类型
---

## asset/resource

发送一个单独的文件并导出 URL，之前通过 file-loader 实现

## asset/inline

导出一个资源的 data URI，之前通过 url-loader 实现

## asset/source

到处资源的源代码，之前通过 raw-loader 实现

## asset（推荐使用）

在导出一个 data URI 和发送一个单独的文件之前自动选择，之前通过使用 url-loader 并且配置资源体积限制实现

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  }
}
```

需要注意的是，asset 里面的<span style="color: red">ext</span>是带了.的
