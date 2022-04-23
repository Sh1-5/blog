---
title: HTTP
categories:
  - 面试题
---

## 状态码

- 1xx：请求中
- 2xx：请求成功
- 3xx：重定向
- 4xx：客户端错误
- 5xx：服务端错误

## methods

之前的 methods：GET（获取数据）、POST（提交数据）

现在的 methods：GET（获取数据）、POST（新建数据）、PUT/PATCH（更新数据）、DELETE（删除数据）

## RestfulAPI

把每一个 url 当作一个唯一的资源

1.尽量不使用 url 参数

传统 API 设计：/api/list?pageIndex=2

Restful API 设计：/api/list/2

2.用 method 表示操作类型

## HTTP Headers

常见的 Request Headers：

- accept：浏览器可以接受的数据格式
- accept-encoding： 浏览器可接受的压缩算法，如 gzip
- accept-language：浏览器可接受的语言，如 zh-CN
- cookie
- host：请求域名
- user-agent：浏览器信息
- content-type：发送数据的格式

常见的 Response Headers：

- content-type：返回数据的格式
- content-length：返回数据的大小，多少字节
- content-encoding：返回数据的压缩算法，如 gzip
- set-cookie
- cache-control：缓存

## 缓存

没有必要重新获取的资源存储下来

通过缓存减少网络请求

哪些资源可以被缓存？静态资源（js、css、img）

## 强制缓存

cache-control:max-age=3153600

单位是 s

## 协商缓存

服务端缓存策略

服务端判断客户端资源是否和服务端一样

一致就返回 304，否则返回 200 和最新的资源

通过资源标识判断：

Response Headers

1.last-modified：资源的最后修改时间

2.etag：资源的唯一标识

## 刷新

- 正常操作：强制缓存、协商缓存均有效
- 手动刷新：强制缓存失效，协商缓存有效
- 强制刷新：强制缓存、协商缓存均失效
