---
title: vuex
---

### 安装

```bash
npm install vuex@next
```

### 创建 store

vuex 推荐使用 SSOT（single source of truth）

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {}
  },
  getters: {}
  actions: {},
  mutations: {},
  modules: {}
})

export default store
```

### 在 main.js 中安装

```javascript
import store from './store'
app.use(store)
```

### 核心一：state

```javascript
const store = createStore({
  state() {
    return {
      name: 'Sh1-5',
      age: 18
    }
  }
})
```

#### 基本使用

```html
<h1>{{ $store.state.name }}-{{ $store.state.age }}</h1>
```

#### 使用计算属性

```html
<h1>{{ name }}-{{ age }}</h1>
```

1.optionsAPI

```javascript
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

### 核心二：getters
