---
title: babel
categories:
  - 前端进阶
tags:
  - Webpack
---

## babel 是什么

babel 是一个工具链，主要用于旧浏览器环境中将 ECMAScript 2015+ 代码转换为向后兼容的 JavaScript

## 作用

语法转换，源代码转换，比如 JSX 和 TypeScript 箭头函数等等

## 单独使用

babel 本身可以作为一个独立的工具（和 postcss 一样），如果我们希望在命令行使用 babel，那么需要安装两个库：@babel/core 和@babel/cli

```bash
npm install @babel/cli @babel/core -D
```

将 test.js 使用 babel 转换后放在 lib 中（这里使用了箭头函数转换插件和变量定义转换插件）

```bash
npm install @babel/plugin-transform-arrow-functions @babel/plugin-transform-block-scoping -D
```

```bash
./node_modules/.bin/babel test.js --out-dir lib --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping
```

## babel 的预设

如果要转换的内容过多，一个个设置比较麻烦，我们可以使用预设

```bash
npm install @babel/preset-env -D
```

```bash
./node_modules/.bin/babel test.js --out-dir lib --presets=@babel/preset-env
```

## babel 的底层原理

可以将 babel 看作一个编译器，有解析阶段（parsing）、转换阶段（transformation）、生成阶段（code generation）

原生源代码 ---> 词法分析（lexical analysis） ---> tokens 数组 ---> 语法分析（syntactic analysis） ---> ast ---> 遍历 ---> 访问 ---> 应用插件 ---> 新的 ast ---> 目标源代码

## 配合 webpack 使用

需要 babel-loader 和@babel/core，并且安装需要使用的插件或者预设

```bash
npm install babel-loader @babel/core -D
```

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: [
              //   '@babel/plugin-transform-arrow-functions',
              //   '@babel/plugin-transform-block-scoping'
              // ]
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
```

## babel 的配置文件

在项目目录下新建 babel.config.js

```javascript
module.exports = {
  presets: ['@/babel/preset-env']
}
```

webpack 配置直接使用 babel-loader 即可

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
```
