---
title: ts-node运行失败
---

出现如下错误

```bash
(node:31783) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
```

在 package.json 中添加

```json
"type": "module"
```

又出现错误

```bash
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /Applications/Front-End/program/vue-vite-cms/src/network/axios-demo.ts
```

解决

```bash
node --loader ts-node/esm axios-demo.ts
```
