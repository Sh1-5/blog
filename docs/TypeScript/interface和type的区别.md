---
title: interface和type的区别
categories:
  - 前端进阶
tags:
  - TypeScript
---

interface 和 type 都可以用来定义对象类型，那么在开发中，到底选择哪一个

如果是定义非对象类型，通常推荐 type，比如 Direction、Alignment、一些 Function

如果是定义对象类型，那么他们是有区别的

```typescript
// interface可以重复的对某个接口来定义属性和方法
interface Person {
  name: string
}

interface Person {
  age: number
}
```

```typescript
// 而type是别名，别名是不能重复的
type Person = {
  name: string
}

// 标识符“Person”重复
type Person = {
  age: number
}
```
