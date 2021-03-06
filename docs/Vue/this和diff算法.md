---
title: this和diff算法
categories:
  - 框架
tags:
  - Vue
---

## methods 中的函数为什么不能是箭头函数

- 箭头函数不绑定 arguments 对象
- 箭头函数只能用于非方法函数
- 箭头函数不能作为构造函数
- 箭头函数没有 property 属性

如果写成箭头函数，bind 没有效果，向上层作用域查找，那么 this 为 window

```typescript
if (methods) {
  for (const key in methods) {
    const methodHandler = (methods as MethodOptions)[key]
    if (isFunction(methodHandler)) {
      // In dev mode, we use the `createRenderContext` function to define
      // methods to the proxy target, and those are read-only but
      // reconfigurable, so it needs to be redefined here
      if (__DEV__) {
        Object.defineProperty(ctx, key, {
          value: methodHandler.bind(publicThis),
          configurable: true,
          enumerable: true,
          writable: true
        })
      } else {
        // 如果使用箭头函数的话，绑定this无效
        ctx[key] = methodHandler.bind(publicThis)
      }
      if (__DEV__) {
        checkDuplicateProperties!(OptionTypes.METHODS, key)
      }
    } else if (__DEV__) {
      warn(
        `Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
          `Did you reference the function correctly?`
      )
    }
  }
}
```

## key 的作用和 diff 算法

key 主要用在 vue 的虚拟 diff 算法，在新旧 node 对比时辨识 virtual nodes

1.无 key，执行 patchUnkeyedChildren 函数

取最短长度，从头部开始比较，不相同则修改
若旧节点数组长度大于新节点长度，移除未进行对比的节点
若新节点数组长度大于旧节点长度，新增未进行对比的节点

```typescript
// 获取旧节点数组的长度
const oldLength = c1.length
// 获取新节点数组的长度
const newLength = c2.length
// 获取新旧数组中最小的长度
const commonLength = Math.min(oldLength, newLength)
let i
// 从头部开始比较
// 类型相同，内容相同，直接复用，否则进行修改
for (i = 0; i < commonLength; i++) {
  const nextChild = (c2[i] = optimized
    ? cloneIfMounted(c2[i] as VNode)
    : normalizeVNode(c2[i]))
  patch(
    c1[i],
    nextChild,
    container,
    null,
    parentComponent,
    parentSuspense,
    isSVG,
    slotScopeIds,
    optimized
  )
}
if (oldLength > newLength) {
  // remove old
  unmountChildren(
    c1,
    parentComponent,
    parentSuspense,
    true,
    false,
    commonLength
  )
} else {
  // mount new
  mountChildren(
    c2,
    container,
    anchor,
    parentComponent,
    parentSuspense,
    isSVG,
    slotScopeIds,
    optimized,
    commonLength
  )
}
```

2.有 key，执行 patchKeyedChildren 函数

从头部开始比较，相同则复用，不相同则跳出循环
从尾部开始比较，相同则复用，不相同则跳出循环
新节点数组长度大于旧节点长度，进行 patch（挂载多出来的新节点）
旧节点数组长度大于新节点长度，进行 patch（卸载多出来的旧节点）
尽可能复用旧节点

```typescript
let i = 0
const l2 = c2.length
let e1 = c1.length - 1 // prev ending index
let e2 = l2 - 1 // next ending index

// 1. sync from start
// (a b) c
// (a b) d e
// 从头部开始比较
// 类型相同，key相同，进行patch（类型相同，内容相同则复用，否则修改）
while (i <= e1 && i <= e2) {
  const n1 = c1[i]
  const n2 = (c2[i] = optimized
    ? cloneIfMounted(c2[i] as VNode)
    : normalizeVNode(c2[i]))
  if (isSameVNodeType(n1, n2)) {
    patch(
      n1,
      n2,
      container,
      null,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
  } else {
    break
  }
  i++
}

// 2. sync from end
// a (b c)
// d e (b c)
// 从尾部开始比较
// 类型相同，key相同，进行patch（类型相同，内容相同则复用，否则修改）
while (i <= e1 && i <= e2) {
  const n1 = c1[e1]
  const n2 = (c2[e2] = optimized
    ? cloneIfMounted(c2[e2] as VNode)
    : normalizeVNode(c2[e2]))
  if (isSameVNodeType(n1, n2)) {
    patch(
      n1,
      n2,
      container,
      null,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
  } else {
    break
  }
  e1--
  e2--
}

// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
// 新节点数组长度大于旧节点长度，进行patch（挂载多出来的新节点）
if (i > e1) {
  if (i <= e2) {
    const nextPos = e2 + 1
    const anchor = nextPos < l2 ? (c2[nextPos] as VNode).el : parentAnchor
    while (i <= e2) {
      patch(
        null,
        (c2[i] = optimized
          ? cloneIfMounted(c2[i] as VNode)
          : normalizeVNode(c2[i])),
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      )
      i++
    }
  }
}

// 4. common sequence + unmount
// (a b) c
// (a b)
// i = 2, e1 = 2, e2 = 1
// a (b c)
// (b c)
// i = 0, e1 = 0, e2 = -1
// 旧节点数组长度大于新节点长度，进行patch（卸载多出来的旧节点）
else if (i > e2) {
  while (i <= e1) {
    unmount(c1[i], parentComponent, parentSuspense, true)
    i++
  }
}
```
