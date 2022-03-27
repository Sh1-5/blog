---
title: component
categories:
  - 前端
tags:
  - Vue
---

### component 是什么

`<component></component>`是一个内置组件，用于动态显示不同组件的组件

### 基本使用

属性

- is

  被注册的组件名或者导入的组件对象

```vue
<component :is="MyComponent"></component>
```
