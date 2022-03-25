---
title: Webpack基础
categories:
  - 前端
tags:
  - Webpack
---

## webpack 是什么

静态的模块化构建工具

## 安装

```sh
npm install webpack webpack-cli -g # 全局安装
npm install webpack webpack-cli -D # 局部安装
```

## 初体验

### 使用全局 webpack

```sh
.
├── index.html
└── src
    ├── index.js
    └── js
        ├── format.js
        └── math.js
```

```javascript
// src/index.js
import { sum, mul } from './js/math.js'
const { priceFormat } = require('./js/format.js')

console.log(sum(10, 15))
console.log(mul(10, 15))
console.log(priceFormat())

// src/js/format.js
const priceFormat = () => {
  return '100'
}

module.exports = {
  priceFormat
}

// src/js/math.js
export const sum = (num1, num2) => {
  return num1 + num2
}

export const mul = (num1, num2) => {
  return num1 * num2
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./src/index.js" type="module"></script>
  </body>
</html>
```

打开 index.html，报错，浏览器不支持 commonJS

进入项目目录下，使用 webpack 打包

```sh
webpack
```

产生了打包后的文件夹 dist，在 index.html 中将其引入

```html
<!-- <script src="./src/index.js" type="module"></script> -->
<script src="./dist/main.js"></script>
```

### 使用局部 webpack

生成 package.json，安装 webpack、webpack-cli

```sh
npm init -y

npm install webpack webpack-cli -D
```

进行打包

```
npx webpack
```

或者编辑 package.json，然后 npm run build

```json
"scripts": {
  "build": "webpack"
}
```

## 指定入口和出口打包

```sh
npx webpack --entry ./src/index.js --output-path ./build
```

或配置 package.json 后使用 `npm run build` 打包

```json
"scripts": {
  "build": "webpack --entry ./src/index.js --output-path ./build"
}
```

也可以使用配置文件 webpack.config.js

```javascript
const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}
```

注意：path 需为绝对路径

## 指定配置文件

```json
"scripts": {
  "build": "webpack --config 配置文件路径"
}
```
