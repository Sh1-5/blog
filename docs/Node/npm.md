---
title: npm
categories:
  - 前端进阶
tags:
  - Node
---

## npm 是什么

Node Package Manager，Node 包管理器

## npm 使用

### 安装包

```bash
npm install x -g # 本地安装工具包
npm install x # 项目安装一些库
```

### 创建 package.json

在项目文件夹下

```bash
npm init -y
```

### scripts

有些 npm scripts 可以简写

```
npm run start -> npm start

npm run test -> npm test

npm run restart -> npm restart

npm run stop -> npm stop
```

### dependencies & devDependencies

生产环境依赖和开发环境依赖

```bash
npm install x -D # 安装到开发环境依赖
npm install x # 安装到生产环境依赖
npm install # 安装所有依赖
npm install --production # 安装生产环境依赖
```

### 包的版本号

npm 包一般遵从 semver 版本规范

x.y.z

- x（major）：不兼容的 API 修改（可能不兼容之前的版本）
- y（minor）：向下兼容的功能新增（新功能增加，兼容之前的版本）
- z（patch）：向下兼容的修改（没有新功能，修复之前的 bug）

^x.y.z：x 不变，y 和 z 永远安装最新版本

~x.y.z：x 和 y 不变，z 永远安装最新版本

### npm install 原理图

<img :src="$withBase('/assets/img/npm-install原理.png')" alt="npm-install原理">

### npm 其它命令

```bash
npm config get cache # 查找缓存文件夹

npm rebuild # 强制重新build

npm cache clean # 清除缓存
```
