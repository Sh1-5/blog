---
title: browserslist详解
categories:
  - 前端进阶
tags:
  - Webpack
---

## browserslist 是什么

在不同的前端之间，共享目标浏览器和 Node 版本的配置

## browserslist 配置 编写

- defaults：browserslist 的默认浏览器配置（> 0.5%, last 2 versions, Firefox ESR, not dead）
- 5%：>=，>
- not dead：24 个月内无官方支持或更新的浏览器
- last 2 versions：每个浏览器的最后两个版本

可以直接编辑 package.json 或者新建.browserslistrc

```json
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not dead"
]
```

```
> 1%
last 2 versions
not dead
```

## caniuse-lite

browserslist 使用 caniuse-lite 来查询浏览器的市场占有率

```sh
npm install browserslist -D

npx browserslist '> 1%, last 2 versions, not dead'
```
