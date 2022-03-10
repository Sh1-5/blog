---
title: vite
---

## 创建项目

```bash
npm create vite@latest
```

选择 vue + ts

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

## 创建 .prettierrc 和 .prettierignore

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

## 安装 prettier

```bash
npm install prettier -D
```

在 package.json 中

```json
"scripts": {
  "prettier": "prettier --write ."
}
```

## git husky

```bash
git init
npx husky-init && npm install
```

在 .husky/pre-commit 中

```
npm run prettier
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
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

## 安装 vuex@next、vue-router@4、axios 、element-plus、echarts、dayjs、sass

```bash
npm install vuex@next vue-router@4 axios element-plus echarts dayjs
```

```bash
npm install sass -D
```
