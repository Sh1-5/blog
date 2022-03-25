---
title: postcss
categories:
  - 前端
tags:
  - Webpack
---

## postcss

```bash
npm install postcss postcss-cli -D
```

postcss 是一个工具，我们需要使用插件，比如 autoprefixer、postcss-preset-env

## autoprefixer 插件

添加浏览器前缀

```bash
npm install autoprefixer -D
```

### 独立使用

```css
/* test.css */
.title {
  user-select: none;
}
```

```bash
npx postcss --use autoprefixer -o test-demo.css test.css
```

```css
/* test-demo.css */
.title {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InRlc3QtZGVtby5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiJdfQ== */
```

### 在项目中使用

安装 postcss-loader

```bash
npm install postcss-loader
```

再对 webpack 进行配置

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('autoprefixer')]
            }
          }
        }
      ]
    }
  ]
}
```

或者在项目目录下新建 postcss.config.js

```javascript
module.exports = {
  plugins: ['autoprefixer']
}
```

webpack.config.js 只需添加 postcss-loader

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }
  ]
}
```

## postcss-preset-env 插件

内置 autoprefixer 插件，可以使用 css 新特性，比如`color: #12345678;`，8 位颜色

```bash
npm install postcss-preset-env -D
```

使用

```javascript
module.exports = {
  // plugins: ['autoprefixer']
  plugins: ['postcss-preset-env']
}
```
