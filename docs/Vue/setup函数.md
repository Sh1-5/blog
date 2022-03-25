---
title: setup函数
categories:
  - 前端
tags:
  - Vue
---

## setup 函数

```javascript
export default {
  setup(props, context) {
    return {}
  }
}
```

1.参数

- props
- context

`context`里面包含三个属性，`attrs`（所有非 `prop` 的 attribute），`slots`（父组件传递过来的插槽），`emit`（发出事件用到的 `emit`）

2.返回值

返回值可以在 `template` 中使用

## data 函数和 setup 函数

如果能在 setup 函数的返回值里拿到数据，就不会去 data 函数的返回值里找
