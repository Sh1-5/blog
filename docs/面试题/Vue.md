---
title: Vue
categories:
  - 面试题
---

## 组件通信

父子组件：`props`/`($)emit`/`$parent`/`ref`/`$attrs`

兄弟组件：`$parent`/`$root`/`eventbus`/`vuex`

跨层级组件：`eventbus`/`provide+inject`/`vuex`/

## v-for 和 v-if 优先级

不应该把 v-for 和 v-if 放在一起

Vue2：v-for > v-if

Vue3：v-if > v-for

## 生命周期

## 双向绑定

Vue 中双向绑定是一个指令`v-model`，可以将一个响应式数据绑定到视图，同时视图中变化能改变该值

`v-model`是语法糖，默认情况下相当于`:value`和`@input`，使用`v-model`可以减少大量繁琐的事件处理代码，提高开发效率

通常在标单项上使用`v-model`，也可以在自定义组件上使用，表示某个值的输入和输出控制
