---
title: ReactRedux
categories:
  - 框架
tags:
  - React
---

## 结合使用

在 constructor 中获取 store 的 state，在 componentDidMount 中订阅 store，在 componentWillUnmount 中取消订阅

```javascript
import React, { PureComponent } from 'react'

import store from '../store'
import { increment, addNumber } from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addNumber(15)}>+15</button>
      </div>
    )
  }
  increment() {
    store.dispatch(increment())
  }
  addNumber(num) {
    store.dispatch(addNumber(num))
  }
}
```

存在的问题：代码冗余度高，只能使用类组件

## connect

```javascript
import { PureComponent } from 'react'

import store from '../store'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          storeState: mapDispatchToProps(store.getState())
        }
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapDispatchToProps(store.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        )
      }
    }
  }
}
```

使用增强后的组件

```javascript
import React from 'react'

import { connect } from '../utils/connect'
import { increment, addNumber } from '../store/actionCreators'

function Home2(props) {
  return (
    <div>
      <h2>Home2</h2>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addNumber(15)}>+15</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(increment())
    },
    addNumber: function (num) {
      dispatch(addNumber(num))
    }
  }
}
const EnhanceHome2 = connect(mapStateToProps, mapDispatchToProps)(Home2)

export default EnhanceHome2
```

存在的问题：connect 函数不通用，依赖 store

## 解决 connect 函数不通用问题

connect.js

```javascript
import { PureComponent } from 'react'

// import store from '../store'
import { StoreContext } from './context'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context)
        this.state = {
          storeState: mapDispatchToProps(context.getState())
        }
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapDispatchToProps(this.context.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        )
      }
    }
    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent
  }
}
```

context.js

```javascript
import React from 'react'

const StoreContext = React.createContext()

export { StoreContext }
```

index.js

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'

import { StoreContext } from './utils/context'

import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
)
```

通过 context 共享 store

## react-redux

安装 react-redux

```bash
npm install react-redux
```

使用 react-redux 提供的 Provider 和 connect

index.js

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'

// import { StoreContext } from './utils/context'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>
  <Provider store={store}>
    <App />
  </Provider>
)
```

Home3.js

```javascript
import React from 'react'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'
import { increment, addNumber } from '../store/actionCreators'

function Home3(props) {
  return (
    <div>
      <h2>Home3</h2>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addNumber(15)}>+15</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(increment())
    },
    addNumber: function (num) {
      dispatch(addNumber(num))
    }
  }
}
const EnhanceHome3 = connect(mapStateToProps, mapDispatchToProps)(Home3)

export default EnhanceHome3
```
