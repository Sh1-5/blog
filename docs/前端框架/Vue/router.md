---
title: router
---

## 认识路由

### 前端路由和后端路由

后端路由：url -> 页面

前端路由：路径 -> 组件

### URL 的 hash

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

### html5 的

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

## v4.x

## v3.x
