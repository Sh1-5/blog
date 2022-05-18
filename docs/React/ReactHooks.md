---
title: ReactHooks
categories:
  - 框架
tags:
  - React
---

## 为什么需要 Hook

类组件的优势：

- 可以定义 state，用来保存自己内部的状态
- 有生命周期
- 状态改变时重新执行 render 函数，选择执行生命周期函数 componentDidUpdate 等

类组件存在的问题：

- 复制逻辑难以理解
- 难以理解的类
- 组件复用状态很难

Hook 的出现，可以在不使用类的情况下使用 state 及其它的 React 特性

## 计数器案例

```javascript
import React, { useState } from 'react'

export default function CounterHook() {
  /**
   * Hook: useState
   * > 本身是一个函数，来自react包
   * > 参数和返回值
   *   1.参数：作用是给场景出来的状态一个初始值（可以是一个函数，返回一个初始值）
   *   2.返回值：数组
   *      元素1：当前state值
   *      元素2：设置新值时使用的一个函数
   */
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
```

## 使用原则

- 在函数最外层调用 Hook，不要爱循环、条件判断和子函数中使用
- 只能在 React 的函数组件中调用 Hook，不要在其它函数中调用

## useState

接受唯一一个参数，如果没有传递参数，那么初始值为 undefined

useState 是一个数组，我们可以通过数组的解构来完成赋值
