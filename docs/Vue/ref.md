---
title: ref
categories:
  - 前端
tags:
  - Vue
---

## ref

通过 ref 函数，可以得到一个响应式对象

```html
<template>
  <div class="app">
    <h1>当前计数：{{ counter }}</h1>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      const increment = () => {
        counter.value++
      }
      return {
        counter,
        increment
      }
    }
  }
</script>
```

若要修改`ref`生成的对象，必须修改对象下的`value`

`template`上会自动解包，所以不需要写`.value`（是一个浅层解包，如果外层包裹了非响应式对象，那么不会自动解包）

## 获取元素/组件

```html
<template>
  <div class="app">
    <h1 ref="title">Hello Vue</h1>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const title = ref(null)
      return {
        title
      }
    }
  }
</script>
```

注意 ⚠️：挂载之后才能获取到