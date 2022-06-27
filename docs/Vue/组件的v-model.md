---
title: 组件的v-model
categories:
  - 框架
tags:
  - Vue
---

## v-model 在 input 元素的使用

是一种语法糖

```html
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

## 在组件中的使用

```html
<!-- App组件 -->
<template>
  <div class="app">
    <MyInput v-model="value" />
    <MyInput :modelValue="value" @update:modelValue="updateValue" />
    <button @click="handleClick">查看value</button>
  </div>
</template>

<script>
  import MyInput from './components/MyInput.vue'

  export default {
    data() {
      return {
        value: ''
      }
    },
    components: {
      MyInput
    },
    methods: {
      handleClick() {
        console.log(this.value)
      },
      updateValue(value) {
        this.value = value
      }
    }
  }
</script>

<!-- Home组件 -->
<template>
  <div class="my-input">
    <input type="text" :value="modelValue" @input="inputChange" />
    <input type="text" v-model="value" />
  </div>
</template>

<script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
      inputChange(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    },
    computed: {
      value: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
  }
</script>
```

可以一次性将所有属性传递给子组件
