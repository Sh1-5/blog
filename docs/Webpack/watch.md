---
title: watch
categories:
  - 前端进阶
tags:
  - Webpack
---

## webpack watch 模式

在该模式下，只要有一个文件（在模块依赖里面）发生了更新，那么代码将被重新编译

不需要手动去运行 npm run build 了

## 开启 watch

- 方式一：在配置中添加 watch: true

- 方式二：在启动 webpack 的命令中。添加 --watch 标识（会通过 webpack-cli 转为 webpack 配置，本质还是方式一）
