---
title: 打包vue代码
categories:
  - 前端
tags:
  - Webpack
---

## 打包 vue 代码

```bash
npm install vue
```

```javascript
import { createApp } from 'vue'
createApp({
  template: `<h1>Hello Vue</h1>`
}).mount('#app')
```

打包后发现控制台出现警告信息，默认安装的 vue 版本是 runtime-only，而我们需要 compiler 去解析 template

所以必须指定带 compiler 的版本

```javascript
import { createApp } from 'vue/dist/vue.esm-bundler'
createApp({
  template: `<h1>Hello Vue</h1>`
}).mount('#app')
```

服务端渲染使用 `vue/dist/vue.cjs`

## vue 打包后的不同版本

- vue(.runtime).global(.prod).js

  通过浏览器 script 标签直接使用，cdn 引入和下载的版本

- vue(.runtime).esm-browser(.prod).js

  用于通过原生 es 模块导入使用，即在浏览器中使用 script 标签，并添加属性 type="module"来使用

- vue(.runtime).esm-bundler.js

  用于 webpack、rollup、parcel 等构件工具使用，默认是 runtime 版本，如果需要解析模版 template，则需手动指定 vue.esm-bundler.js

- vue.cjs(.prod).js

  服务端渲染使用，通过 require()在 node 中使用

## vue 编写 dom 元素的三种方式

- 方式一：template 模版
- 方式二：render 函数
- 方式三：.vue 文件

方式二中，h 函数可以直接返回一个虚拟节点，不需要编译

方式一和三的 template 需要特定的代码来对其进行解析，方式三需要 vue-loader 进行编译和解析，方式一通过源码中的一部分代码来进行编译

## 打包.vue 文件

安装 vue-loader

```bash
npm install vue-loader -D
```

```javascript
// import { createApp } from 'vue/dist/vue.esm-bundler'
import { createApp } from 'vue' // vue-loader帮助解析template
import App from './App.vue'
createApp(App).mount('#app)
```

还需配置 webpack

```javascript
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: false, // 不需要options api支持
      __VUE_PROD_DEVTOOLS__: false // 生产环境不需要devtools支持
    })
  ]
}
```
