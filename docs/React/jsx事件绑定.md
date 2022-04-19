---
title: jsx绑定事件
categories:
  - 前端框架
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

    <script src="../js/react.js"></script>
    <script src="../js/react-dom.js"></script>
    <script src="../js/babel.js"></script>

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
              <button onClick={this.handleClickOne.bind(this)}>按钮1</button>
              <button onClick={this.handleClickTwo}>按钮2</button>
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

      ReactDOM.render(<App />, document.getElementById('app'))
    </script>
  </body>
</html>
```
