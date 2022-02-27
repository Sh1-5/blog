---
title: http
---

## http 是什么

超文本传输协议（Hyper Text Transfer Protocol）是一个请求-响应协议，运行在 TCP 之上，为应用层协议

是一种 C/S 协议

http 事务处理过程：建立连接->发出请求->接受请求->关闭连接

默认端口为 80

## http 的特点

- 简单快速：容易看懂；只需要请求方法和路径，即可发送请求
- 可扩展：headers
- 灵活：允许传输任意类型的数据，正在传输的类型由 Content-Type 标记
- 无状态：对于事务处理没有记忆能力
- 无连接：处理完请求就断开

## http 结构

起始行（请求行、响应行） + 头部 + 空行 + 实体

## http 报文

### 起始行

请求报文：方法 + 路径 + http 版本

```
GET /home HTTP/1.1
```

响应报文：http 版本 + 状态码 + 状态信息

```
HTTP/1.1 200 OK
```

## 请求方法

http1.1

- GET: 通常用来获取资源
- HEAD: 获取资源的元信息
- POST: 提交数据，即上传数据
- PUT: 修改数据
- DELETE: 删除资源(几乎用不到)
- CONNECT: 建立连接隧道，用于代理服务器
- OPTIONS: 列出可对资源实行的请求方法，用来跨域请求
- TRACE: 追踪请求-响应的传输路径

## GET 和 POST 区别

- 从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。
- 从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。
- 从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。
- 从幂等性的角度，GET 是幂等的，而 POST 不是。(幂等表示执行相同的操作，结果也是相同的)
- 从 TCP 的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一-个 TCP 包)

## URI

URI（Uniform Resource Identifier），统一资源标识符，区分互联网上不同的资源

由 URL（Uniform Resource Location，统一资源定位符）和 URN（Uniform Resource Name，统一资源名称）构成

scheme://user:password@host:post/path?query#fragment

- scheme：协议名
- user:password：登录主机的用户信息
- host:port：主机名和端口
- path：请求路径
- query：查询参数
- fragment：锚点

## http 状态码

- 1xx：表示目前是协议处理的中间状态，还需要后续操作
- 2xx：成功状态
- 3xx：重定向状态
- 4xx：请求报文有误
- 5xx：服务器发生错误

常见的状态码

- 200：请求成功
- 204：请求成功，响应头没有 body 数据
- 301：重定向，例如从 http 升级到 https
- 401：bad request
- 403：forbidden
- 404：not found
- 405：method not allowed
- 408：request timeout
- 409：conflict
- 503：service unavailable（老子很忙，常见于选课、抢票、查成绩）

## http 缺点

1.明文传输

2.队头阻塞问题

当 http 开启长连接时，共用一个 TCP 连接，同一时刻只能处理一个请求，那么当前请求耗时过长的情况下，其它的请求只能处于阻塞状态

## https

hypertext transfer protocol secure，披了一层 SSL 的 http
