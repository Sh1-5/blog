---
title: mixins和extends
categories:
  - 前端
tags:
  - Vue
---

## mixins

### mixins 是什么

Options API 的一个选项，用于抽取相同逻辑

### 基本使用

```vue
<!-- App组件 -->
<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <button @click="foo">foo</button>
  </div>
</template>

<script>
import mixin from './mixins/demo-mixin'

export default {
  mixins: [mixin]
}
</script>
```

```javascript
// demo-mixin.js
export default {
  data() {
    return {
      message: 'Hello Mixin'
    }
  },
  methods: {
    foo() {
      console.log('foo')
    }
  }
}
```

也可以全局混入，app.mixin()

### mixins 合并规则

1.生命周期都调用

2.其他选项合并时 key 相同保留自身数据

## extends

### extends 是什么

类似继承

### 基本使用

```vue
<!-- Home组件 -->
<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import HomeContent from './HomeContent.vue'

export default {
  extends: HomeContent
}
</script>

<!-- HomeContent组件 -->
<template>
  <div class="home-content"></div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Home Content'
    }
  }
}
</script>
```
