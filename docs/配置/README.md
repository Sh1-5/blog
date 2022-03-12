---
title: VSCode
---

## 插件

- Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code
- One Dark Pro：VSCode
- VSCode Great Icons
- JavaScript (ES6) code snippets
- any-rule
- Auto Close Tag
- Auto Rename Tag
- Bracket Pair Colorizer
- Code Runner
- element-ui-helper
- carbon-now-sh
- Code Spell Checker
- Document This
- EditorConfig for VS Code
- ES7+ React/Redux/React-Native snippets
- ESLint
- Git Graph
- GitLens
- Highlight Matching Tag
- JSON5 syntax
- Live Server
- Markdown Preview Enhanced
- Prettier - Code formatter
- Remote - SSH
- Remote - SSH: Editing Configuration Files
- TODO Highlight
- Version Lens
- Vetur
- Vue 3 Snippets
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
  "editor.fontFamily": "Source Code Pro, 'Courier New', monospace", // 字体
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

  "security.workspace.trust.untrustedFiles": "open", // 不显示信任引入提示

  "vetur.format.options.tabSize": 2, // 每个缩进级别的空格数，由所有格式化程序继承
  "vetur.completion.autoImport": false, // 模块导出和自动导入的完成
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false, // 设置分号
      "singleQuote": true, // 强制单引号
      "trailingComma": "none" // 禁止随时添加逗号
    }
  },

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
  "editor.inlineSuggest.enabled": true
}
```
