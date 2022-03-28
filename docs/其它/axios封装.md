---
title: axios封装
categories:
  - 其它
tags:
  - axios
---

## axios 封装

为了降低项目与 axios 这个第三方库的耦合度，一般选择对其封装后使用

```javascript
const axios = require('axios')

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // vue-cli
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default service
```

简单小巧，但有一定的局限性，比如：这种方式的封装只适合 baseURL 只有一个的情况下
