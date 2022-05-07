---
title: JSX绑定事件
categories:
  - 框架
tags:
  - React
---

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
            message: 'Hello React'
          }
        }
        render() {
          return (
            <h1>
              {/* 通过bind绑定this */}
              <button onClick={this.handleClickOne.bind(this)}>按钮1</button>
              {/* 定义方法时使用箭头函数 */
              <button onClick={this.handleClickTwo}>按钮2</button>
              {/* 定义箭头函数返回方法的执行 */
              <button
                onClick={() => {
                  this.handleClickThree()
                }}
              >
                按钮3
              </button>
            </h1>
          )
        }
        handleClickOne() {
          console.log(this.state.message)
        }
        handleClickTwo = () => {
          console.log(this.state.message)
        }
        handleClickThree() {
          console.log(this.state.message)
        }
      }

      ReactDOM.createRoot(document.getElementById('app')).render(<App />)
    </script>
  </body>
</html>
```
