---
title: reactive
categories:
  - 前端
tags:
  - Vue
---

## reactive

通过 reactive 函数，可以得到一个响应式对象/数组

```html
<template>
  <div class="app">
    <h1>{{ state.message }}</h1>
  </div>
</template>

<script>
  import { reactive } from 'vue'

  export default {
    setup() {
      const state = reactive({
        message: 'Hello Vue'
      })
      return {
        state
      }
    }
  }
</script>
```

## shallowReactive

浅层`reactive`，深层还是原生对象
