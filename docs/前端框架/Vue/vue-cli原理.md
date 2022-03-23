---
title: vue-cli原理
---

## 查看运行情况

通过 package.json 可以到到，是通过`vue-cli-service serve`启动的，进入 node_modules 下面的.bin 文件夹，可以看到 vue-cli-service，里面从`../lib/Service`导入了一个 Service，但是上一级目录下没有 lib 文件夹

vue-cli-service 是一个软连接，真实执行的路径在 node_modules/@vue/cli-service 下
