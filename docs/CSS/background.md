---
title: background
categories:
  - 前端基础
tags:
  - CSS
---

## background-image

```css
background-image: url();
```

设置背景图片，在 background-color 上面

可以设置多张，第一张在最上面，其它图片按顺序层叠在下面

注意：如果设置了背景图片后，元素没有具体的宽高，背景图片是不会显示出来的

## background-repeat

```css
background-repeat: no-repeat;
```

- repeat：平铺
- no-repeat：不要平铺
- repeat-x：水平平铺
- repeat-y：垂直平铺

## background-size

```css
background-size: cover;
```

设置背景尺寸

- auto：默认值，以背景图片本身大小显示
- contain：缩放背景图，宽度或高度铺满元素，保持图片宽高比
- cover：缩放背景图，以完全覆盖铺满元素，可能导致背景图片部分看不见
- 具体的值

## background-position

```css
background-position: 100px 100px;
```

设置背景位置

- 水平值：left、center、right、具体的值
- 垂直值：top、center、bottom、具体的值

如果只设置了一个方向，另一个方向默认是 center

## background-attachment

```css
background-attachment: scroll;
```

设置背景附加

- scroll：默认值，背景相对于元素本身固定
- local：背景相对于内容固定（如果有滚动条，背景会随着内容滚动）
- fixed：背景相对于视口固定

## background

一系列背景相关属性的简写属性

不建议使用

## background-image 和 img 对比

1.性质：CSS/HTML

2.是否占用空间：否/是

3.右键查是否可以看地址：否/是

3.是否支持精灵图：是/否

4.被搜索引擎搜录：否/是（结合 alt 属性）
