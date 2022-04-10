---
title: 手写bind
categories:
  - 面试题
---

```javascript
function foo(a, b) {
  console.log('this', this)
  console.log(a, b)
  return 'this is fn'
}
const fn = foo.bind({ x: 100 }, 10, 20)
const res = fn()
console.log(res)

// 手写bind
Function.prototype.myBind = function () {
  // 将参数拆分为数组
  const args = Array.prototype.slice.call(arguments)
  // 获取this（数组第一项）
  const t = args.shift()
  // fn.bind(...)中的fn
  const self = this
  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}

// 简易写法
Function.prototype.myBind = function (t, ...args) {
  // fn.bind(...)中的fn
  const self = this
  // 返回一个函数
  return function () {
    // apply写法
    // return self.apply(t, args)
    // call写法
    return self.apply(t, ...args)
  }
}
```
