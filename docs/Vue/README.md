---
title: 基础
categories:
  - 框架
tags:
  - Vue
---

## Vue 是什么？

渐进式 JavaScript 框架

## 计数器

### 原生实现

```html
<h2 class="counter">0</h2>
<button class="increment">+</button>
<button class="decrement">-</button>

<script>
  const counterEl = document.querySelector('.counter')
  const incrementEl = document.querySelector('.increment')
  const decrementEl = document.querySelector('.decrement')

  let counter = 0
  counterEl.innerHTML = counter

  incrementEl.addEventListener('click', () => {
    counter += 1
    counterEl.innerHTML = counter
  })
  decrementEl.addEventListener('click', () => {
    counter -= 1
    counterEl.innerHTML = counter
  })
</script>
```

### Vue 实现

```html
<div id="app"></div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: `
          <div>
            <h2>{{counter}}</h2>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
          </div>
        `,
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter += 1
      },
      decrement() {
        this.counter -= 1
      }
    }
  }).mount('#app')
</script>
```

## 基本指令

### mustache 语法

```html
<div id="app"></div>
<template id="my-app">
  <h2>{{message}}</h2>
  <h2>{{message.split(' ').reverse().join(' ')}}</h2>
  <h2>{{isShow ? '哈哈哈' : '呵呵呵'}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        isShow: false
      }
    }
  }).mount('#app')
</script>
```

### v-once

仅渲染元素和组件一次，并跳过之后的更新

```html
<div id="app"></div>
<template id="my-app">
  <h2>{{counter}}</h2>
  <h2 v-once>{{counter}}</h2>
  <button @click="increment">+</button>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter += 1
      }
    }
  }).mount('#app')
</script>
```

### v-text

更新元素的文本内容

```html
<div id="app"></div>
<template id="my-app">
  <h2 v-text="message"></h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue'
      }
    }
  }).mount('#app')
</script>
```

### v-html

更新元素的 innerHTML

```html
<div id="app"></div>
<template id="my-app">
  <h2 v-html="message"></h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: '<span style="color: red">Hello Vue<span>'
      }
    }
  }).mount('#app')
</script>
```

### v-pre

跳过该元素及其所有子元素的编译

```html
<div id="app"></div>
<template id="my-app">
  <h2 v-pre>{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue'
      }
    }
  }).mount('#app')
</script>
```

### v-cloak

用于隐藏未编译的模板，直到完成

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>

<div id="app"></div>
<template id="my-app">
  <h2 v-cloak>{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue'
      }
    }
  }).mount('#app')
</script>
```

## v-bind 和 v-on

### v-bind 基本使用

```html
<div id="app"></div>
<template id="my-app">
  <a v-bind:href="message">百度</a>
  <a :href="message">百度</a>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'https://www.baidu.com'
      }
    }
  }).mount('#app')
</script>
```

### v-bind 绑定 class 对象写法

```html
<style>
  .active {
    color: red;
  }
  .big {
    font-size: 50px;
  }
</style>

<div id="app"></div>
<template id="my-app">
  <h2 :class="{active: true, big: true}">{{message}}</h2>
  <h2 :class="classObj">{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        classObj: { active: true, big: true }
      }
    }
  }).mount('#app')
</script>
```

### v-bind 绑定 class 数组写法

```html
<style>
  .active {
    color: red;
  }
  .big {
    font-size: 50px;
  }
</style>

<div id="app"></div>
<template id="my-app">
  <h2 :class="['active', 'big']">{{message}}</h2>
  <h2 :class="classArr">{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        classArr: ['active', 'big']
      }
    }
  }).mount('#app')
</script>
```

### v-bind 绑定 style 对象语法

```html
<div id="app"></div>
<template id="my-app">
  <h2 :style="{color: 'red', fontSize: '50px'}">{{message}}</h2>
  <h2 :style="{color: 'red', 'font-size': '50px'}">{{message}}</h2>
  <h2 :style="styleObj">{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        styleObj: { color: 'red', fontSize: '50px' }
      }
    }
  }).mount('#app')
</script>
```

### v-bind 绑定 style 数组语法

```html
<div id="app"></div>
<template id="my-app">
  <h2 :style="[{color: 'red'}, {fontSize: '50px'}]">{{message}}</h2>
  <h2 :style="styleArr">{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        styleArr: [{ color: 'red' }, { fontSize: '50px' }]
      }
    }
  }).mount('#app')
</script>
```

### v-bind 绑定属性名称

```html
<div id="app"></div>
<template id="my-app">
  <h2 :[name]="value">{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        name: 'age',
        value: 18
      }
    }
  }).mount('#app')
</script>
```

### v-bind 绑定一个对象

```html
<div id="app"></div>
<template id="my-app">
  <h2 v-bind="info">{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {
        message: 'Hello Vue',
        info: {
          name: 'Sh1-5',
          age: 18
        }
      }
    }
  }).mount('#app')
</script>
```

### v-on 基本使用

```html
<div id="app"></div>
<template id="my-app">
  <button v-on:click="handleClick">按钮</button>
  <button @click="handleClick">按钮</button>
  <h2 v-on="{click: h2Click, mousemove: mouseMove}">绑定一个对象</h2>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {}
    },
    methods: {
      handleClick() {
        console.log('click')
      },
      h2Click() {
        console.log('h2 click')
      },
      mouseMove() {
        console.log('mouse move')
      }
    }
  }).mount('#app')
</script>
```

### v-on 参数传递

```html
<div id="app"></div>
<template id="my-app">
  <button @click="btn1Click">按钮1</button>
  <button @click="btn2Click($event, 'Sh1-5')">按钮2</button>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    template: '#my-app',
    data() {
      return {}
    },
    methods: {
      btn1Click(event) {
        console.log(event)
      },
      btn2Click(event, name) {
        console.log(event, name)
      }
    }
  }).mount('#app')
</script>
```

### v-on 的修饰符

```vue
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击

## v-model 修饰符

```vue
<!-- 失去焦点后再更新 -->
<input type="text" v-model.lazy="message" />
<h1>{{message}}</h1>
<!-- 将输入的纯数字string转为number -->
<input type="text" v-model.number="number" />
<button @click="showType">查看类型</button>
<h1>{{number}}</h1>
<!-- 去除多余空格-->
<input type="text" v-model.trim="trim" />
```
