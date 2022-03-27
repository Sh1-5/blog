---
title: 组件的v-model
categories:
  - 前端
tags:
  - Vue
---

### v-model 在 input 元素的使用

是一种语法糖

```vue
<template>
  <input v-model="message" />
  <input :value="message" @input="message = $event.target.value" />
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
```

### 在组件中的使用

```vue
<!-- App组件 -->
<template>
  <div class="app">
    <Home v-model="info" />
    <!-- <Home :modelValue="info" @update:model-value="" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: 'kobe',
        age: 18,
        height: 1.8
      }
    }
  }
}
</script>

<!-- Home组件 -->
<template>
  <div class="home">
    <ul>
      <li>{{ modelValue.name }}</li>
      <li>{{ modelValue.age }}</li>
      <li>{{ modelValue.height }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  }
}
</script>
```

可以一次性将所有属性传递给子组件
