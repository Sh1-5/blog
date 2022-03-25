---
title: utilities
categories:
  - 前端
tags:
  - Vue
---

## isProxy

返回一个 Boolean

检测对象是否是由`reactive`/`readonly`/`shallowReactive`/`shallowReadonly`创建出来的`proxy`

## isReactive

返回一个 Boolean

检测对象是否是由`reactive`/`shallowReactive`创建出来的`proxy`

如果`proxy`是`readonly`创建的，但包裹了`reactive`创建出来的`proxy`，那么也会返回 true

## isReadonly

返回一个 Boolean

检测对象是否是由`readonly`创建出来的`proxy`

## toRaw

返回`reactive`/`readonly`创建的`proxy`的原始对象

谨慎使用

## toRefs

将响应式对象转换为普通对象，对象中的每个属性都是一个`ref`对象

## toRef

从响应式对象中创建一个`ref`对象

## isRef

判断是否是`ref`对象

## unref

如果是一个`ref`对象，那么返回`ref.value`，否则直接返回

## triggerRef

手动触发响应式

## customRef

创建一个自定义的`ref`对象，并对其进行依赖跟踪和更新触发进行显示控制

需要一个工厂函数，该函数接受 track 和 trigger 函数作为参数

并且应该返回一个带有`get`和`set`的对象

自定义一个 1s 后进行更新的`ref`

```javascript
export default function (value, delay = 1000) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
```
