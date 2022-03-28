---
title: vue项目基本配置
categories:
  - 前端框架
tags:
  - Vue
---

## 创建项目时选择

Babel

TypeScript

CSS Pre-processors: Sass/Scss (with dart-sass)

Linter / Formatter: ESLint + Prettier

## 集成 editorconfig

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

## prettier

创建 .prettierrc 和 .prettierignore

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

```
public
node_modules
dist
```

在 package.json 中

```json
"scripts": {
  "prettier": "prettier --write ."
}
```

在 .eslintrc.js 中，添加插件

```javascript
module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ]
}
```

## git husky

```bash
npx husky-init && npm install
```

在 .husky/pre-commit 中

```
npm run prettier
npm run lint
```

## commitizen

```bash
npm install commitizen -D
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

在 package.json 中

```
"scripts": {
  "commit": "cz"
}
```

## commitlint

```bash
npm install @commitlint/config-conventional @commitlint/cli -D
```

创建 commitlint.config.js

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

使用 husky 生成 commit-msg 文件，验证提交信息

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

## vue.config.js

```javascript
const path = require('path')

module.exports = {
  publicPath: './',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: '',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
```
