---
title: Fullscreen
categories:
  - 前端基础
tags:
  - JavaScript
---

## 进入全屏模式

Element.requestFullscreen() 方法用于发出异步请求使元素进入全屏模式

返回一个 Promise

## 退出全屏模式

Document.exitFullscreen() 方法用于让当前文档退出全屏模式

> 如果一个元素 A 在请求进去全屏模式之前，已经存在其他元素处于全屏状态，当这个元素 A 退出全屏模式之后，之前的元素仍然处于全屏状态（浏览器内部维护了一个全屏元素栈用于实现这个目的）
