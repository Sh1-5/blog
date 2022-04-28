---
title: http模块
categories:
  - 前端进阶
tags:
  - Node
---

## 创建服务器

```javascript
const http = require('http')

// 本质是new http.Server()
const server1 = http.createServer((req, res) => {
  res.end('Hello Server1')
})

server1.listen(8888, () => {
  console.log('server1在8888端口启动成功')
})

const server2 = new http.Server((req, res) => {
  res.end('Hello Server2')
})

server2.listen(8889, () => {
  console.log('server2在8889端口启动成功')
})
```

通过 listen 来启动服务器

## request 对象

```javascript
const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  res.end('Hello Node Server')
})
```

可以根据不同的 url，作出不同的响应

```javascript
const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/login') {
    res.end('login')
  } else if (url === '/product') {
    res.end('product')
  } else {
    res.end('error')
  }
})
```

## url 的解析

## method 的处理
