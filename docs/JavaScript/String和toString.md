---
title: String和toString
categories:
  - 前端基础
tags:
  - JavaScript
---

## 定义的位置不同

String 是 JavaScript 的全局函数

```javascript
window.hasOwnProperty('String') // true
```

toString 是 Object 原型的方法

## String 可以转换 null、undefined

通过 Object 原型上的 String 方法

## 不同进制之间的转换

```javascript
// 将十进制转化为二进制
var num = 2
num.toString(num, 2) // '10'
```
