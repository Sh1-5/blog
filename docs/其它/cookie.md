---
title: cookie
categories:
  - 其它
tags:
  - HTTP
---

## cookie 是什么

cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

## cookie 主要用在以下三个方面

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置）
- 浏览器行为跟踪（如跟踪分析用户行为等）

cookie 曾一度用于客户端的数据存储，但逐渐被淘汰（服务器指定 cookie 后，浏览器的每次请求都会携带 cookie，会带来额外的性能开销，尤其是在移动环境下；大小有限制，大概 4k），现在一般使用 storage 和 indexedDB

## 创建 cookie

服务器收到 http 请求时，可以在响应头里面添加一个 Set-Cookie 选项

- 会话期 cookie：仅会话期间有效，不设置过期时间（Expires）或者有效期（Max-Age）
- 持久性 cookie：取决于过期时间（Expires）或有效期（Max-Age）

## 安全

可通过 javascript 访问 cookie（document.cookie），所以有安全隐患问题，要注意 XSS（跨站脚本攻击）

缓解涉及 Cookie 的攻击的方法：

- 使用 HttpOnly 属性可防止通过 javaScript 访问 cookie 值
- 用于敏感信息（例如指示身份验证）的 cookie 的生存期应较短，并且 SameSite 属性设置为 Strict 或 Lax
