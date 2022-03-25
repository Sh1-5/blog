---
title: mixin和extends
---

## mixin 基本使用

将 Options API 里相同的逻辑抽取出来，通过`mixins`混入

```html
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

## mixin 合并规则

1.生命周期都调用

2.其他选项合并时 key 相同保留自身数据

## extends

```html
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
