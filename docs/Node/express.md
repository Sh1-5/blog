---
title: express
categories:
  - 前端进阶
tags:
  - Node
---

## express

express 是一个主要由路由和中间件构成的 Web 框架，它本身的功能功能非常少

## 安装

全局安装

```bash
npm install express-generator -g
```

创建项目

```bash
express demo
```

局部安装

```bash
npm install express
```

## 创建服务器

```javascript
const express = require('express')

// express其实是一个函数：createApplication()
const app = express()

// 监听默认请求
app.get('/', (req, res, next) => {
  res.end('Hello Express')
})

app.post('/', (req, res, next) => {
  res.end('Hello Express')
})

app.post('/login', (req, res, next) => {
  res.end('Welcome Back')
})

app.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

## 中间件

中间件的本质是传递给 express 的一个回调函数

中间件中可以执行哪些任务：

- 执行任何代码
- 更改请求（request）和响应（response）对象
- 结束请求-响应周期（返回数据）
- 调用栈中的下一个中间件

如果当前中间件功能没有结束请求-响应周期，则必须调用 next()将控制权传递给下一个中间件，否则，请求将被挂起

应用中间件：app.use/router.use

按顺序匹配中间件，若调用了 next()，则执行下一个中间件

### 普通中间件

```javascript
const express = require('express')

const app = express()

// 普通中间件
app.use((req, res, next) => {
  console.log('注册了第一个普通中间件')
  res.end('Middleware')
  next()
})

app.use((req, res, next) => {
  console.log('注册了第二个普通中间件')
  next()
})

app.use((req, res, next) => {
  console.log('注册了第三个普通中间件')
})

app.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

### 路径匹配中间件

```javascript
const express = require('express')

const app = express()

// 路径匹配中间件
app.use('/home', (req, res, next) => {
  console.log('注册了第一个路径匹配中间件')
  res.end('Home Middleware')
  next()
})

app.use('/home', (req, res, next) => {
  console.log('注册了第二个路径匹配中间件')
  next()
})

app.use('/home', (req, res, next) => {
  console.log('注册了第三个路径匹配中间件')
})

app.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

### 路径方法匹配中间件

```javascript
const express = require('express')

const app = express()

// 路径和方法匹配中间件
app.get('/home', (req, res, next) => {
  console.log('注册了一个路径方法匹配中间件')
  res.end('Home Get Middleware')
})

app.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

### 连续注册中间件

```javascript
const express = require('express')

const app = express()

app.get(
  '/home',
  (req, res, next) => {
    console.log('注册了一个路径方法匹配中间件')
    res.end('Home Get Middleware')
    next()
  },
  (req, res, next) => {
    console.log('连续注册中间件')
    next()
  },
  (req, res, next) => {
    console.log('连续注册中间件')
  }
)

app.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

### 解析 body 中间件

```javascript
const express = require('express')

const app = express()

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const body = JSON.parse(data.toString())
//       req.body = body
//     })
//     req.on('end', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

app.use(express.json())

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('Welcome Back')
})

app.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

也可以使用 express 自带的中间件：

- express.json()：解析 application/json 格式
- express.urlencoded({extended: true})：解析 application/x-www-form-urlencoded 格式
