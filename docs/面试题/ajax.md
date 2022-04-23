---
title: ajax
categories:
  - 面试题
---

## 什么是 ajax

异步的 JavaScript 和 XML，是一种 Web 数据交互方式

## XMLHttpRequest

```javascript
const xhr = new XMLHttpRequest()
xhr.open('GET', '/api', true) // true，异步
// xhr.open('POST', '/api', true)
xhr.onreadystatechange = function () {
  // 0：代理被创建，没有调用open方法，1：open()方法已经被调用，2：send()方法已经被调用，3：下载中，4：已完成
  if (xhr.readState == 4) {
    if (xhr.status === 200) {
      alert(xhr.responseText)
    } else {
      // 其它情况
    }
  }
}
xhr.send(null)
const postData = {
  username: 'kobe',
  password: 123
}
// xhr.send(JSON.stringify(postData))
```

## 同源策略

ajax 请求时，浏览器要求当前网页和 server 必须同源（浏览器安全机制）

同源：协议、域名、端口必须一致

1.加载图片、CSS、JavaScript 可无视同源策略

2.所有的跨域，必须经过 server 配合

## 跨域

1.JSONP

script 可以绕过跨域限制，服务器可以任意动态拼接数据返回

```html
<!-- http://localhost:5500 -->
<script>
  //
  window.callback = function (data) {
    console.log(data)
  }
</script>
<script src="http://localhost:5501/jsonp.js"></script>
```

```javascript
// jsonp.js
callback({ name: 'kobe' })
```

2.CORS

服务器设置 HTTP Header

```
response.setHeader('Access-Control-Allow-Origin', '*')
response.setHeader('Access-Control-Allow-Headers', 'X-Request-width')
response.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

response.setHeader('Access-Control-Allow-Credentials', 'true')
```

## 手写简易的 ajax

```javascript
function ajax(url, method, data) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else if (xhr.status === 404) {
          reject(new Error('404 not found'))
        } ...
      }
    }
    if (data) {
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send(null)
    }
  })
  return p
}
```

## fetch

返回一个 Promise

## axios

基于 XMLHttpRequest 进行封装
