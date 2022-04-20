---
title: 基础
categories:
  - 可视化
tags:
  - SVG
---

## 简介

SVG，即可缩放矢量图形(Scalable Vector Graphics)，是一种 XML 应用，可以以一种简洁、可移植的形式表示图形信息

## 基本要素

SVG 提供了一些元素，用于定义圆形、矩形、简单或复杂的曲线

一个简单的 SVG 文档由 svg 根元素和基本的形状元素构成

另外还有一个 g 元素，它用来把若干个基本形状编成一个组

## 简单示例

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>
```

如下图所示：

<img :src="$withBase('/assets/img/svgdemo1.png')" alt="svgdemo1">

## 基本属性

- 元素的渲染顺序：SVG 文件全局有效的规则是“后来居上”，越后面的元素越可见
- web 上的 svg 文件可以直接在浏览器上展示

## 网格

<img :src="$withBase('/assets/img/svg-grid.png')" alt="svg-grid">

坐标系统：以页面的左上角为(0,0)坐标点，坐标以像素为单位，x 轴正方向是向右，y 轴正方向是向下

定义一个矩形，即从左上角开始，向右延展 100px，向下延展 100px，形成一个 100\*100 大的矩形

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="0" y="0" width="100" height="100" />
</svg>
```
