---
title: 基础
categories:
  - 框架
tags:
  - React
---

## React 是什么？

用于构建用户界面的 JavaScript 库

## 为什么需要 React？

1.原生 JavaScript 操作 DOM 繁琐、效率低（DOM-API 操作 UI）

2.使用 JavaScript 直接操作 DOM，浏览器会进行大量的重绘重排

3.原生 JavaScript 没有组件化编码方案，代码复用率低

## React 的特点

1.采用组件化模式、声明式编码，提高开发效率及组件复用率

2.跨平台，在 React Native 中可以使用 React 语法进行移动端开发，还有 React VR

3.使用虚拟 DOM + 优秀的 Diff 算法，尽量减少与真实 DOM 的交互

## 开发 React 必须依赖三个库

- react：包含 react 所必须的核心代码
- react-dom：react 扩展库
- babel：将 JSX 转为 JavaScript

使用 JSX，必须设置 script 元素的 type 属性为 text/babel

## Hello React

### 原生实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2></h2>
    <button>改变文本</button>
    <script>
      let message = 'Hello World'

      const h2El = document.getElementsByTagName('h2')[0]
      h2El.innerHTML = message

      const buttonEl = document.getElementsByTagName('button')[0]
      buttonEl.addEventListener('click', () => {
        message = 'Hello React'
        h2El.innerHTML = message
      })
    </script>
  </body>
</html>
```

### react 实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- 添加React依赖 -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <script type="text/babel">
      let message = 'Hello World'

      function changeMessage() {
        message = 'Hello React'
        render()
      }

      function render() {
        ReactDOM.createRoot(document.getElementById('app')).render(
          // 只能有一个根元素
          <div>
            <h2>{message}</h2>
            <button onClick={changeMessage}>改变文本</button>
          </div>
        )
      }

      render()
    </script>
  </body>
</html>
```

### 组件化实现

```html
<div id="app"></div>

<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script type="text/babel">
  // 封装App组件
  class App extends React.Component {
    constructor(props) {
      super(props)
      // this.message = 'Hello World'
      this.state = {
        message: 'Hello World'
      }
    }
    render() {
      return (
        <div>
          {/*<h2>{this.message}</h2>*/}
          <h2>{this.state.message}</h2>
          <button onClick={this.changeMessage}>改变文本</button>
        </div>
      )
    }
    changeMessage = () => {
      // this.message = 'Hello React'
      this.setState({
        message: 'Hello React'
      })
    }
  }

  // 渲染组件
  ReactDOM.createRoot(document.getElementById('app')).render(<App />)
</script>
```

## 案例练习

### 列表渲染

```html
<div id="app"></div>

<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script type="text/babel">
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        movies: ['星际穿越', '火星救援', '流浪地球']
      }
    }
    render() {
      return (
        <div>
          <h2>电影列表</h2>
          <ul>
            {this.state.movies.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      )
    }
  }

  ReactDOM.createRoot(document.getElementById('app')).render(<App />)
</script>
```

### 计数器

```html
<div id="app"></div>

<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script type="text/babel">
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        counter: 0
      }
    }
    render() {
      return (
        <div>
          <h2>{this.state.counter}</h2>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      )
    }
    increment = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    decrement = () => {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  ReactDOM.createRoot(document.getElementById('app')).render(<App />)
</script>
```

## JSX 语法

- JavaScript XML，js 扩展语法，本质是语法糖（React.createElement(component, props, ...children)）
- 既不是字符串也不是 HTML
- 最终产生的是一个普通对象

### React 为什么选择 JSX

React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合

### JSX 语法规则

1.定义虚拟 DOM 时，不要写引号

2.标签中混入 JS 表达式时使用{}（何为表达式？一个表达式会产生一个值，可以放在任何一个需要值的地方）

3.样式的类名指定使用 className

4.内联样式需要使用两个大括号

5.JSX 顶层只能有一个根元素 💥

6.JSX 里面的单标签必须闭合 💥

7.标签首字母：小写开头，转为 html 中对应的标签，若无该标签，则报错；大写开头，React 当作组件渲染，若未定义，则报错

8.注释书写：{/\* 我是注释 \*/} 💥

### JSX 嵌入变量

- 当变量是 String、Number、Array 类型时，可以直接显示
- 当变量是 Null、Undefined、Boolean 类型时，内容为空
  如果希望可以显示，那么转成字符串
- 对象类型不能作为子元素

### JSX 本质

是 React.createElement(type, config, children)的语法糖，目的是创建 ReactElement 对象

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<!-- <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> -->

<!-- <script type="text/babel"> -->
<script>
  // const message1 = <h2>Hello React</h2>
  const message2 = React.createElement('h2', null, 'Hello React')

  ReactDOM.createRoot(document.getElementById('app')).render(message2)
</script>
```

> JSX -> createElement 函数 -> ReactElement 对象树 -> ReactDON.render 函数 -> 真实 DOM

## 为什么使用虚拟 DOM

- 很难跟踪状态发生的改变
- 操作真实 DOM 性能低（引起浏览器的回流和重绘）
