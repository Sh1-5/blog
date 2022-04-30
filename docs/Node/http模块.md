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

### url

```javascript
const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  // 最基本的使用方式
  // if (req.url === '/login') {
  //   res.end('欢迎回来')
  // } else if (req.url === '/users') {
  //   res.end('用户列表')
  // } else {
  //   res.end('错误请求')
  // }

  // /login?username=kobe&password=123
  const { pathname, query } = url.parse(req.url)
  if (pathname === '/login') {
    console.log(query)
    console.log(qs.parse(query))
    const { username, password } = qs.parse(query)
    console.log(username, password)
    res.end('请求成功')
  }
})

server.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

通过 url 模块解析 req.url，通过 qs 模块解析 query

### method

```javascript
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/login') {
    if (req.method === 'POST') {
      console.log(req.body) // undefined
      // 拿到body中的数据
      req.setEncoding('utf-8') // 不设置的话data是Buffer
      req.on('data', (data) => {
        console.log(data, typeof data)
        console.log(JSON.parse(data), typeof JSON.parse(data))
      })
      res.end('请求成功')
    }
  }
})

server.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

使用 req.on 获取 body 中的数据（先设置字符编码）

### headers

content-type：表示这次请求携带的数据的类型

- application/json：json 类型
- text/plain：文本类型
- application/xml：xml 类型
- multipart/form-data：上传文件

content-length：文件的大小和长度

connection：http1.1 中，所有连接默认是 connection: 'keep-alive'，默认是 5s

accept-encoding：告知服务器客户端支持的文件压缩格式

accept：告知服务区客户端可接受文件的格式类型

user-agent：客户端相关信息

## response 对象

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Hello Node Server')
  res.end()
})

server.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

write 方法直接写出数据，但是没有关闭流

end 方法写出最好的数据，并且关闭流

res.end(data)：先 res.write(data)，然后 res.end()

### statusCode

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
  // 1.直接给属性赋值
  // res.statusCode = 400
  // 2.和head一起设置
  res.writeHead(400)
  res.write('Hello Node Server')
  res.end()
})

server.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

### headers

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
  // 设置方式一
  // res.setHeader('content-type', 'text/plain;charset=utf8')
  // 设置方式二
  res.writeHead(200, {
    'content-type': 'text/plain;charset=utf8'
  })
  res.end('Hello Node Server')
})

server.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```

## 发送网络请求

```javascript
const http = require('http')

// 发送get请求
http.get('http://localhost:8888', (res) => {
  res.setEncoding('utf-8')
  res.on('data', (data) => {
    console.log(data)
  })
  res.on('end', () => {
    console.log('获取到了所有结果')
  })
})

// 发送post请求
const req = http.request(
  {
    method: 'post',
    hostname: 'localhost',
    port: 8888
  },
  (res) => {
    res.setEncoding('utf-8')
    res.on('data', (data) => {
      console.log(data)
    })
    res.on('end', () => {
      console.log('获取到了所有结果')
    })
  }
)
req.end()
```

## 上传文件（手动解析）

注意，不能直接将 data 数据写入到文件中，需要先进行处理

```javascript
const http = require('http')
const qs = require('querystring')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      req.setEncoding('binary')
      let body = ''
      req.on('data', (data) => {
        body += data
      })
      req.on('end', () => {
        // 处理body
        // 1.获取content-type
        const payload = qs.parse(body, '\r\n', ': ')
        const info = qs.parse(payload['Content-Disposition'], '; ', '=')
        const key = info.name.substring(1, info.name.length - 1) // key
        console.log(key)
        const filename = info.filename.substring(1, info.filename.length - 1) // 文件名
        console.log(filename)
        const type = payload['Content-Type']
        // 2.在content-type位置进行截取
        const typeIndex = body.indexOf(type)
        const typeLength = type.length
        let fileData = body.substring(typeIndex + typeLength)
        // 3.去除数据中开头的两个\r\n
        fileData = fileData.replace('\r\n\r\n', '')
        // 4.去除最后的boundary和前后的分隔符
        const boundary = req.headers['content-type']
          .split(';')[1]
          .replace(' boundary=', '')
        fileData = fileData.replace(`--${boundary}--`, '')
        fs.writeFileSync(`./${filename}`, fileData, 'binary')
        res.end('文件上传成功')
      })
    }
  }
})

server.listen(8888, () => {
  console.log('服务器在8888端口启动成功')
})
```
