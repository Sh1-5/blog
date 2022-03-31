---
title: Pinia
categories:
  - 前端框架
tags:
  - Pinia
---

## Pinia 是什么

新一代状态管理器

- 完整的 TypeScript 支持
- 轻量
- 去除 mutations，只有 state、getters、actions
- actions 支持同步和异步
- 没有模块嵌套
- 无需手动添加 store

## 安装

```bash
npm install pinia
```

## 创建 store 并使用

```typescript
// index.ts
import { createPinia } from 'pinia'

const store = createPinia()

export default store
```

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

## 例子

1.state 是一个函数，返回一个对象

2.getters 是一个对象，其中的函数具有 state 参数

3.actions 是一个对象

注意：getters 和 actions 里面都有绑定 this（当前 store）

```typescript
// counter.ts
import { defineStore } from 'pinia'

export default defineStore({
  id: 'counter',
  state: () => {
    return {
      counter: 0
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
```

有两种方式去修改 state：

1.store.$patch，类似 React 的 setState

2.store 调用 actions 里面的函数（推荐）

```vue
<!-- App.vue -->
<script setup lang="ts">
import useCounterStore from './store/counter'

const counter = useCounterStore()
const increment = () => {
  // counter.$patch({ counter: counter.counter + 1 })
  counter.increment()
}
</script>

<template>
  <h1>当前计数：{{ counter.counter }}</h1>
  <h1>当前计数两倍：{{ counter.doubleCounter }}</h1>
  <button @click="increment">+1</button>
</template>
```

## 异步操作

Pinia 没有 mutations 如何进行异步操作？

actions 里面的函数支持 async/await 写法
