---
title: Vuex
categories:
  - 前端框架
tags:
  - Vuex
---

## vuex 是什么

状态管理模式 + 库，采用集中式存储管理应用所有的状态，并以相应的规则保证状态以一种可预测的方式发生变化

![单向数据流](https://vuex.vuejs.org/flow.png)

![vuex原理](https://vuex.vuejs.org/vuex.png)

## 安装

```bash
npm install vuex@next
```

## 核心一：state

vuex 使用单一状态树，用一个对象包含了全部的应用层级状态，作为“唯一数据源（SSOT，single source of truth）”

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name: 'Sh1-5',
      age: 18
    }
  }
})
```

### 基本使用

```html
<h1>{{ $store.state.name }}-{{ $store.state.age }}</h1>
```

### 使用计算属性

```html
<h1>{{ name }}-{{ age }}</h1>
```

1.optionsAPI

```javascript
import { mapState } from 'vuex'

export default {
  computed: {
    // 1.分别获取
    // name() {
    //   return this.$store.state.name
    // },
    // age() {
    //   return this.$store.state.age
    // }

    // 2.一次性获取
    ...mapState(['name', 'age'])
  }
}
```

2.compositionAPI

```javascript
import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

export default {
  setup() {
    const store = useStore()
    // 1.分别获取
    // const name = computed(() => store.state.name)
    // const age = computed(() => store.state.age)
    // return {
    //   name,
    //   age
    // }

    // 2.一次性获取
    const storeStateFn = mapState(['name', 'age'])
    const storeState = {}
    Object.keys(storeStateFn).forEach((key) => {
      const fn = storeStateFn[key].bind({ $store: store })
      storeState[key] = computed(fn)
    })
    return {
      ...storeState
    }
  }
}
```

注意：mapState 函数的参数不仅可以是一个数组，也可以是一个对象

```javascript
{
  name: (state) => state.name
  age: (state) => state.age
}
```

## 核心二：getter

store 里的 computed

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      books: [
        { name: 'Vue.js设计与实现', price: 200, count: 3 },
        { name: 'React.js设计与实现', price: 150, count: 2 },
        { name: 'Angular.js设计与实现', price: 100, count: 5 }
      ]
    }
  },
  getters: {
    // 1.通过属性访问
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const item of state.books) {
        totalPrice += item.price * item.count
      }
      return totalPrice
    }
    // 2.通过方法访问，不会缓存
    // totalPrice: (state, getters) => () => {
    //   let totalPrice = 0
    //   for (const item of state.books) {
    //     totalPrice += item.price * item.count
    //   }
    //   return totalPrice
    // }
  }
})
```

### 基本使用

```html
<!-- 1.通过属性访问 -->
<h1>总价格：{{ $store.getters.totalPrice }}</h1>
<!-- 2.通过方法访问，不会缓存 -->
<!-- <h1>总价格：{{ $store.getters.totalPrice() }}</h1> -->
```

### 使用计算属性

类似 state

## 核心三：mutation

mutation 必须是同步函数

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    // payload用于传参
    // 1.载荷风格的提交方式
    increment(state, payload) {
      state.counter += payload.amount
    }
    // 2.对象风格的提交方式
    // increment(state, payload) {
    //   state.counter += payload.amount
    // }
  }
})
```

### 基本使用

```html
<h1>{{ $store.state.counter }}</h1>
<!-- 1.载荷风格的提交方式 -->
<button @click="$store.commit('increment', { amount: 5 })">+</button>
<!-- 2.对象风格的提交方式 -->
<!-- <button @click="$store.commit({ type: 'increment', amount: 5 })">+</button> -->
```

### 使用常量替代 mutation

```javascript
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'
```

```javascript
// store.js
import { createStore } from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = createStore({
  state: { ... },
  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [SOME_MUTATION] (state) {
      // 修改 state
    }
  }
})
```

### mapMutations

```html
<h1>当前计数：{{ $store.state.counter }}</h1>
<button @click="increment({ amount: 5 })">+</button>
```

1.optionsAPI

```javascript
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['increment'])
  }
}
```

2.compositionAPI

```javascript
import { mapMutations } from 'vuex'

export default {
  setup() {
    return {
      ...mapMutations(['increment'])
    }
  }
}
```

## 核心四：action

action 存在的意义是做一些异步操作

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload.amount
    }
  },
  actions: {
    increment(ctx, payload) {
      // 进行异步操作
      setTimeout(() => {
        ctx.commit('increment', payload.amount)
      }, 1000)
    }
  }
})
```

### 基本使用

```html
<h1>{{ $store.state.counter }}</h1>
<!-- 1.载荷风格的分发 -->
<button @click="$store.dispatch('increment', { amount: 5 })">+</button>
<!-- 2.对象风格的分发 -->
<!-- <button @click="$store.dispatch({ type: 'increment', amount: 5 })">+</button> -->
```

### mapActions

```html
<h1>当前计数：{{ $store.state.counter }}</h1>
<button @click="increment({ amount: 5 })">+</button>
```

1.optionsAPI

```javascript
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions['increment']
  }
}
```

2.compositionAPI

```javascript
import { mapActions } from 'vuex'

export default {
  setup() {
    return {
      ...mapActions(['increment'])
    }
  }
}
```

### 组合 action

action 是异步的，那么什么时候结束

store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍然返回 Promise

我们要组合多个 action 时，将处理逻辑用 Promise 包裹后返回

```javascript
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}
```

就可以

```javascript
store.dispatch('actionA').then(() => {
  // ...
})
```

在另外一个 action

```javascript
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
```

利用 ES7 的新特性

```javascript
// 假设 getData() 和 getOtherData() 返回的是 Promise

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```

## 核心五：module

套娃，将 store 分成多个模块，每个模块又有 state、getters、mutations、actions、modules

```javascript
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

### 命名空间：namespaced
