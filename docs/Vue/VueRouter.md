---
title: VueRouter
categories:
  - 前端
tags:
  - VueRouter
---

## 前端路由和后端路由

后端路由：url -> 页面

前端路由：路径 -> 组件

## URL 的 hash

url 的 hash 也就是锚点，本质上是通过改变 window.location 的 href 属性，我们可以通过直接赋值 location.hash 来改变 hash，但是页面不发生刷新

```html
<div id="app">
  <a href="#/home">Home</a>
  <a href="#/about">About</a>

  <div class="content"></div>
</div>
<script>
  const contentEl = document.querySelector('.content')

  window.addEventListener('hashchange', () => {
    switch (location.hash) {
      case '#/home':
        contentEl.innerHTML = 'Home'
        break
      case '#/about':
        contentEl.innerHTML = 'About'
        break
      default:
        contentEl.innerHTML = 'Default'
    }
  })
</script>
```

hash 的优势是兼容性好，在老版 IE 中都可以运行，但是缺陷有一个'#'，显得不像一个真实的路径

## html5 的 history

[history](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)

- pushState
- popState
- replaceState
- forward
- back
- go

```html
<div id="app">
  <a href="/home">Home</a>
  <a href="/about">About</a>

  <div class="content"></div>
</div>
<script>
  const contentEl = document.querySelector('.content')

  const changeContent = () => {
    switch (location.pathname) {
      case '/home':
        contentEl.innerHTML = 'Home'
        break
      case '/about':
        contentEl.innerHTML = 'About'
        break
      default:
        contentEl.innerHTML = 'Default'
    }
  }

  const aEls = document.getElementsByTagName('a')
  for (const aEl of aEls) {
    aEl.addEventListener('click', (e) => {
      e.preventDefault()
      const href = aEl.getAttribute('href')
      history.pushState({}, '', href)
      // history.replaceState({}, '', href)
      changeContent()
    })
  }

  window.addEventListener('popstate', changeContent)
</script>
```

## 安装

```bash
npm install vue-router@4
```

## 创建路由组件和配置路由映射关系

先创建路由组件

然后在 src 文件下新建 router 文件夹，在 index.js 中配置

```javascript
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

import Home from '../pages/Home.vue'
import Shops from '../pages/Shops.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'
// 路由懒加载
// component可以是一个函数，返回一个Promise
// 使用魔法注释，设置分包后的文件名
const Message = () =>
  import(/* webpackChunkName: 'message-chunk' */ '../pages/Message.vue')

const routes = [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '', redirect: '/home/shops' },
      { path: 'shops', component: Shops },
      { path: 'news', component: News }
    ]
  },
  { path: '/about/:username', component: About }, // 动态路由匹配，username可以在$route.params中找到
  { path: '/message', component: Message },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
```

## 在 main.js 中安装

```javascript
import router from './router'
app.use(router)
```

## 使用 router-view 占位

路由组件会显示在 router-view 的位置

## router-link 属性

- to：目标 url 的链接，点击后会将 to 的值传到 router.push()中，所以这个值可以是一个字符串或者对象
- replace：router.replace()，导航后不会留下历史记录
- active-class：默认为 router-link-active，可以设置此属性来更改（如果要更改，将所有当前组件下所有 router-link 的 active-class 一并修改）
- ~~tag~~：现在采用插槽的方式，更加灵活

## RouteRecordRow

- path
- name：路由记录独一无二的名称
- redirect
- component
- children
- meta：路由元对象，可以携带一些自定义数据

## 编程式导航

```javascript
import { useRouter } from 'vue-router'
export default {
  // methods: {
  //   handleClick() {
  //     this.$router.push('/about')
  //   }
  // },
  setup() {
    const router = useRouter()
    handleClick = () => {
      // router.push('/about')
      router.push({
        path: '/about',
        query: {
          name: 'Sh1-5',
          age: 18
        }
      })
    }
    return {
      handleClick
    }
  }
}
```

## router-link 的 v-slot

```html
<router-link
  to="/about"
  custom
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <NavLink :active="isActive" :href="href" @click="navigate">
    {{ route.fullPath }}
  </NavLink>
</router-link>
```

- href
- route
- navigate
- isActive
- isExactActive

## router-view 的 v-slot

```html
<router-view v-slot="props">
  <transition name="kobe">
    <component :is="props.Component"></component>
  </transition>
</router-view>
```

```css
.kobe-enter-from,
.kobe-leave-to {
  opacity: 0;
}

.kobe-enter-active,
.kobe-leave-active {
  transition: opacity 1s ease;
}
```

## router 方法

- addRoute
- getRoutes
- removeRoute
- hasRoute

## 导航守卫

### 全局前置守卫

```javascript
// 全局前置守卫
// to：即将跳转到的route对象
// from：从哪一个router对象导航过来的
// 第三个参数next不推荐使用
// 返回值问题：1.false，不进行导航 2.undefined，进行默认导航 3.字符串，跳转到对应的路径
router.beforeEach((to, from) => {
  // 逻辑处理
})
```

## historyApiFallback
