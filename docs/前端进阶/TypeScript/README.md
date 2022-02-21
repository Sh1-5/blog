---
title: 笔记
---

### 没有类型检查带来的问题

编程开发的共识：错误出现的越早越好

能在写代码的时候发现错误，就不要在代码编译时再发现；能在代码编译时发现，就不要在代码运行时发现；能在开发阶段发现错误，就不要在测试期间发现错误；能在测试期间发现错误，就不要在上线后发现错误

#### 例子

```javascript
// 1.没有对类型进行检查
// 2.没有对是否传入参数进行检查
function foo(message) {
  console.log(message.length)
}

foo('Hello JavaScript')
// 等到在运行时才能发现错误
foo()
// 永远执行不到
foo('Hello World')
```

#### 类型思维的缺失

没有类型约束，担心代码不够安全，不够健壮

### TypeScript

拥有类型的 JavaScript 超集，可以编译成 JavaScript 代码

### 安装编译器

```sh
npm install typescript -g
```

使用

```sh
tsc index.ts
```

### 运行环境的搭建

#### ts-node

安装 ts-node，及其依赖包

```sh
npm install ts-node tslib @types/node -g
```

使用 ts-node

```sh
ts-node index.ts
```

#### webpack

初始化项目

```sh
npm init -y

npm install webpack webpack-cli ts-loader typescript webpack-dev-server html-webpack-plugin -D

tsc --init # 生成tsconfig.json
```

配置 webpack.config.js

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs', '.json']
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
```

逻辑代码

```typescript
// src/main.ts
import { sum } from './math'
const message: string = 'Hello TypeScript'
console.log(message)
console.log(sum(10, 15))

// src/math.ts
export function sum(num1: number, num2: number): number {
  return num1 + num2
}
```

在项目目录下新建 index.html 文件

编辑 package.json

```json
"scripts": {
  "build": "webpack",
  "serve": "webpack serve"
}

```

### 变量的声明

var/let/const 标识符: 数据类型 = 赋值

```typescript
const name: string = 'kobe'
const age: number = 18
const height = 1.8 // 类型推导
```
