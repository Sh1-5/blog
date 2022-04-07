---
title: 手写jquery
categories:
  - 面试题
---

```javascript
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
  }
  get(index) {
    return this[index]
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const el = this[i]
      fn(el)
    }
  }
  on(type, fn) {
    return this.each((el) => {
      el.addEventListener(type, fn, false)
    })
  }
}
```
