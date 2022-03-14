---
title: vite项目注意事项
---

## 若要在 template 中使用 $store

配置 env.d.ts

```typescript
declare let $store: any
```

## 自定义环境变量

[vite 文档](https://cn.vitejs.dev/guide/env-and-mode.html#intellisense)

vue-cli

```javascript
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // 自定义环境变量以VUE_APP_开头
  timeout: 5000
})
```

vite

```javascript
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // 自定义环境变量以VITE_开头
  timeout: 5000
})
```
