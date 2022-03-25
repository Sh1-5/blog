---
title: storage
categories:
  - 前端
tags:
  - JavaScript
---

## localStorage 与 sessionStorage

相似之处：

1. 都存在浏览器会话中
2. 特定于页面的协议（也就是说二者在 http://example.com 与 https://example.com 的数据是相互隔离的）

不同之处：

1. localStorage 存在硬盘中，sessionStorage 存在内存中
2. localStorage 页面关闭时不会被清除，sessionStorage 页面关闭时会被清除

打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage，关闭对应浏览器窗口（Window）/ tab，会清除对应的 sessionStorage。

## 例子

键值对总是以字符串的形式存储

```javascript
window.localStorage.setItem('age', 18)
const age = window.localStorage.getItem('age')
console.log(typeof age, age) // string 18

window.localStorage.setItem('height', JSON.stringify(180))
const height = JSON.parse(window.localStorage.getItem('height'))
console.log(typeof height, height) // number 180
```

```javascript
window.localStorage.setItem('age', 18)
const age = window.localStorage.getItem('age')
console.log(typeof age, age) // string 18

window.localStorage.setItem('height', JSON.stringify(180))
const height = JSON.parse(window.localStorage.getItem('height'))
console.log(typeof height, height) // number 180
```

## 作为开发中经常使用的工具类

```javascript
class LocalCache {
  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key) {
    const value = window.localStorage.getItem(key)
    if (value) return JSON.parse(value)
  }
  removeCache(key) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
```
