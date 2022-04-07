---
title: React项目基本配置
categories:
  - 前端框架
tags:
  - React
---

## editorconfig

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

## eslint

安装依赖

```bash
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks -D
```

生成配置文件

```bash
npx eslint --init
```

## prettier

安装

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

新建.prettierrc

```
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

新建.prettierignore

```
node_modules
public
dist
```

配置 package.json

```json
"scripts": {
  "prettier": "prettier --write ."
}
```

修改.eslintrc.js

```javascript
"extends": [
  "airbnb",
  "plugin:prettier/recommended"
],
rules: {
  semi: 0,
  'comma-dangle': 0,
  'arrow-body-style': 0,
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
}
```

## husky & lint-staged

安装

```bash
npm install husky lint-staged -D
```

配置 package.json

```json
"scripts": {
  "prepare": "husky install"
}
```

生成 husky 文件夹

```bash
npm run prepare
```

添加钩子

```bash
npx husky add .husky/pre-commit "npm run lint"
```

配置 package.json

```json
"scripts": {
  "lint": "lint-staged"
},
"lint-staged": {
  "src/*.{js,jsx,mjs,ts,tsx}": [
    "node_modules/.bin/prettier --write",
    "node_modules/.bin/eslint --fix"
  ],
  "src/*.{css,scss,less,json,html,md,markdown}": [
    "node_modules/.bin/prettier --write"
  ]
}
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
