---
title: CSS选型
categories:
  - 框架
tags:
  - React
---

## 内联

```javascript
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    return <div style={{ color: 'red' }}>App</div>
  }
}
```

## 直接引入

```javascript
import React, { PureComponent } from 'react'

import './style.css'

export default class App extends PureComponent {
  render() {
    return <div>App</div>
  }
}
```

## css modules

React 的脚手架内置了 css modules 的配置

将.css/.less/.scss 文件修改为.module.css/.module.less/.module.scss

```javascript
import React, { PureComponent } from 'react'

import appStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return <div className={appStyle.title}>App</div>
  }
}
```

```css
/* style.module.css */
.appTitle {
  color: red;
}
```

类名不能使用连接符（.app-title）

不方便动态修改样式

## css in js

CSS 由 JavaScript 生成

流行的库：styled-components

### 基本使用

安装 styled-components

```bash
npm install styled-components
```

```javascript
import React, { PureComponent } from 'react'

import { AppWrapper } from './style'

export default class App extends PureComponent {
  render() {
    return <AppWrapper>App</AppWrapper>
  }
}
```

```javascript
// style.js
import styled from 'styled-components'

export const AppWrapper = styled.div`
  color: red;
`
```
