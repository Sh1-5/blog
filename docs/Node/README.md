---
title: 基础
categories:
  - 前端进阶
tags:
  - Node
---

## Node 是什么

一个基于 V8 JavaScript 引擎的 JavaScript 运行时环境

## Node 版本管理工具

- nvm
- n

## 运行 JavaScript 代码

可以通过 html 文件引入 js 文件使用浏览器运行，也可以直接通过 node 运行

```javascript
// index.js
function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(10, 15))
console.log(sum('kobe', ' bryant'))

setTimeout(() => {
  console.log('定时器执行')
})
```

```bash
node index.js
```

## REPL

Read-Eval-Print Loop，“读取-求值-输出”循环

REPL 是一个简单的、交互式编程环境

终端输入 node 即可进入
