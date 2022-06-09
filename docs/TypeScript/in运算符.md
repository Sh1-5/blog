---
title: in运算符
categories:
  - 前端进阶
tags:
  - TypeScript
---

```typescript
// 如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true
var obj = { name: 'kobe' }
if ('name' in obj) {
  console.log(obj.name)
}
```
