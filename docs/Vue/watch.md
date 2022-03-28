---
title: watch
categories:
  - 前端框架
tags:
  - Vuex
---

## watch

通过 watch 函数可以侦听响应式数据的变化

侦听 ref ，newValue 和 oldValue 是值

侦听 reactive，newValue 和 oldValue 是 proxy，默认是深度侦听

## watchEffect

自动收集响应式的依赖，会立即执行一次，返回一个函数，执行这个函数会停止监听

清除额外的副作用

```javascript
const stop = watchEffect((onInvalidate) => {
  onInvalidate(() => {
    // 清除额外的副作用
  })
})
```

watchEffect 的执行时机，可以通过第二个参数来改变
