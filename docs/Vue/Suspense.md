---
title: Suspense
categories:
  - 前端
tags:
  - Vue
---

## Suspense 是什么

`<Suspense>`是一个内置组件，用来在组件树中编排异步依赖

它可以在等待组件树下的多个嵌套异步依赖项解析完成时，呈现加载状态

目前`Suspense`是一个实验性的特性

## 使用

组件有两个插槽，`default`和`callback`

如果`default`可以显示，那么显示`default`，否则显示`callback`

```html
<template>
  <div class="app">
    <Suspense>
      <template #default>
        <AsyncAbout />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>
```
