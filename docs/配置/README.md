---
title: VSCode
---

## 插件

- any-rule
- Auto Close Tag
- Auto Rename Tag
- Bracket Pair Colorizer
- carbon-now-sh
- Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code
- Code Runner
- Code Spell Checker
- Document This
- EditorConfig for VS Code
- element-ui-helper
- ES7+ React/Redux/React-Native snippets
- ESLint
- Git Graph
- GitLens
- Highlight Matching Tag
- JavaScript (ES6) code snippets
- JSON5 syntax
- Live Server
- Markdown Preview Enhanced
- One Dark Pro
- Prettier - Code formatter
- Remote - SSH
- Remote - SSH: Editing Configuration Files
- TODO Highlight
- TSLint
- Version Lens
- VSCode Great Icons
- vscode-styled-components
- Vue Language Features (Volar)

## settings.json

> Mac(Command + Shift + P) / Win(Ctrl + Shift + P)

```json
{
  "files.autoSave": "off", // 自动保存

  "editor.formatOnSave": true, // 保存格式化
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化程序
  "editor.fontSize": 16, // 字号
  "editor.tabSize": 2, // 一个tab强制转换为2个空格
  "editor.fontFamily": "Input Mono, Fira Code, monospace", // 字体
  "editor.smoothScrolling": true, // 滚动时启用动画
  "editor.renderWhitespace": "all", // 空白字符显示方式
  "editor.quickSuggestions": {
    "strings": true // 在键入字符串时启用建议
  },
  "editor.wordWrap": "on", // 在视区宽度处换行

  "explorer.confirmDragAndDrop": true, // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认

  "workbench.colorTheme": "One Dark Pro", // 主题
  "workbench.iconTheme": "vscode-great-icons", // 文件主题
  "workbench.tree.indent": 16, // 树缩进

  "terminal.integrated.defaultProfile.windows": "PowerShell", // 默认终端
  "terminal.integrated.defaultProfile.osx": "zsh", // 默认终端
  "terminal.integrated.copyOnSelection": true, // 终端选中复制
  // "terminal.integrated.fontSize": 16, // 终端字号

  "breadcrumbs.enabled": true, // 开启 vscode 文件路径导航

  "security.workspace.trust.untrustedFiles": "prompt", // 不显示信任引入提示

  // prettier 设置
  "prettier.semi": false, // 设置分号
  "prettier.singleQuote": true, // 强制单引号
  "prettier.trailingComma": "none", // 禁止随时添加逗号
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",

  // updated 2022-03-14 00:43
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": {
    "*.js": "$(capture).js.map, $(capture).min.js, $(capture).d.ts",
    "*.jsx": "$(capture).js",
    "*.module.ts": "$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts",
    "*.ts": "$(capture).js, $(capture).*.ts",
    "*.tsx": "$(capture).ts",
    "*.vue": "$(capture).*.ts, $(capture).*.js",
    ".env": "*.env, .env.*, env.d.ts",
    ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
    "index.d.ts": "*.d.ts",
    "package.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, api-extractor.json, apollo.config.*, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
    "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
  }
}
```
