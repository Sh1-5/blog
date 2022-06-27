---
title: keep-alive
categories:
  - 框架
tags:
  - Vue
---

## keep-alive 是什么

一个内置组件，用于保持组件的状态

## 基本使用

- include

  String ｜ RegExp ｜ Array，需要缓存的组件

- exclude

  String ｜ RegExp ｜ Array，不需要缓存的组件

- max

  Number | String，最多可以缓存多少组件，一旦达到这个数字，最近访问次数最少的实例会被销毁

包含

```html
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view"></component>
</KeepAlive>

<!-- 正则表达式（需使用 `v-bind`） -->
<KeepAlive :include="/a|b/">
  <component :is="view"></component>
</KeepAlive>

<!-- 数组（需使用 `v-bind`）-->
<KeepAlive :include="['a', 'b']">
  <component :is="view"></component>
</KeepAlive>
```

最大缓存实例

```html
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```
