---
title: Redux
categories:
  - 框架
tags:
  - React
---

## 纯函数

1.相同的输入产生相同的输出

2.无副作用

## Redux 三大原则

1.单一数据源

2.state 是只读的

3.使用纯函数来执行修改

## 基本使用

```javascript
const redux = require('redux')

const initialState = {
  counter: 0
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }

    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.num }
    case 'INCREMENT':
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

// store
const store = redux.createStore(reducer)

// actions
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', num: 15 }
const action4 = { type: 'SUB_NUMBER', num: 15 }

// 订阅store的修改
store.subscribe(() => {
  console.log('state发生了改变', store.getState().counter)
})

// 派发actions
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
```

### action

action 是把数据从应用传到 store 的有效载荷

action 本质是 JavaScript 对象

约定 action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作（多数情况下 type 会被定义成字符串常量）

### action 创建函数

action 创建函数就是生成 action 的方法

### reducer

reducers 指定了应用状态的变化如何响应 actions 并发送到 store

### store

store 有以下职责：

1.维持应用的 state

2.提供 getState()方法获取 state

3.提供 dispatch(action)方法更新 state

4.通过 subscribe(listener)注册监听器

5.通过 subscribe(listener)返回的函数注销监听器

注意：Redux 应用只有一个单一的 store

### 数据流

严格的单向数据流是 Redux 架构的设计核心
