---
title: 笔记
---

### 一、邂逅 Vuejs

#### 1.1 认识 Vuejs

- Vue 的渐进式：可以将 Vue 作为应用的一部分嵌入其中
- Vue 的特点：1.解耦视图和数据 2.可复用的组件 3.前端路由技术 4.状态管理 5.虚拟 DOM

#### 1.2 安装 Vue

- CDN 引入（开发环境使用开发版本，有命令行警告。生产环境使用部署版本，优化了尺寸和速度）
- 下载引入
- npm 安装（npm install vue）

注意：Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

#### 1.3 Vue 的初体验

- Hello Vue
  - Mustache 语法 -> 体验 Vue 响应式（当数据发送改变的时候，显示的界面会跟着改）
- 代码做了什么事情？ 创建了一个 Vue 对象，并且传入了一个对象参数
- Vue 的列表展示
  - v-for
  - 后面给数据追加元素的时候，新的元素也可以在界面中渲染出来
- Vue 计数器
  - 事件监听：click -> methods

#### 1.4 Vue 中的 MVVM

- 什么是 MVVM？ Model（JS） View（DOM） ViewModel（通信桥梁，Vue）
- ViewModel：数据绑定、Dom 监听

#### 1.5 创建 Vue 时,options 可以放哪些东西

- el
- data
- methods
- 生命周期函数（生命周期：从诞生到消亡的整个过程）
- beforeCreate()
- created()
- beforeMounted()
- mounted()
- beforeUpdate()
- updated()
- activated()
- deactivated()
- beforeDestroy()
- destroyed()
- errorCaptured() 2.5.0+新增

### 二、插值语法

- Mustache 语法
- v-once：只渲染一次，数据更改后不会改变显示的内容
- v-html：会解析 html 代码
- v-text：不会解析，直接显示字符串
- v-pre：mustache 语法失效
- v-cloak：斗篷，通过设置样式：[v-cloak] {display: none;}在还未取得数据时不显示

### 三、v-bind

#### 3.1 v-bind 绑定基本属性

- Mustache 语法只能用在元素的内容中
- v-bind:src
- :href

#### 3.2 v-bind 动态绑定 class

- 对象语法:作业:class='{类名:boolean}'
- 数组语法

#### 3.3 v-bind 动态绑定 style

- 对象语法
- 数组语法

### 四、计算属性

- 案例一: firstname+lastName
- 案例二: books -> price
- 计算属性是有缓存的

#### 4.1 计算属性的本质

- fullname: {set(), get()}

#### 4.2 计算属性和 methods 对比

- 计算属性在多次使用时，只会调用一次
- 它是有缓存的

### 五、事件监听

#### 5.1 事件监听基本使用

事件监听且不需要传参数的时候，可以省略'()',但是在 mustache 语法中，不能省略'()'

#### 5.2 参数问题

- bntClick
- btnClick(event)
- btnClick(abc, event) -> $event

#### 5.3 修饰符

- .stop 阻止冒泡
- .prevent 阻止默认行为
- . 监听某个键盘的键帽
- .once 点击回调只会触发一次
- .native 组件相关

### 六、条件判断

#### 6.1 v-if/v-else-if/v-else

#### 6.2 登录小案例

#### 6.3 v-show

- v-show 和 v-if 区别
  v-if="false"时 不会渲染
  v-show="false"时 只是给元素加上了行内样式：display: none;
- 当切换频率高的时候，使用 v-show，只有一次切换时，使用 v-if

### 七、循环遍历

#### 7.1 遍历数组

- value
- value, index

#### 7.2 遍历对象

- value
- value, key
- Value, key, index

在数组中插入值时，加上 key 可以高效地更新虚拟 DOM

#### 7.3 数组哪些方法是响应式的

- pop()
- push()
- shift()
- unshift()
- splice()
- sort()
- reverse()

直接根据索引修改数据不是响应式的
Vue.set(数组, 索引, 修改后的值)

#### 7.4 作业完成

### 八、书籍案例

- 过滤器的使用

### 九、v-model 的使用

#### 9.1 v-model 的基本使用

- v-model => v-bind:value v-on:input

#### 9.2 v-model 和 radio/checkbox/select

#### 9.3 修饰符

- lazy
- number
- trim

### 十、组件化开发

#### 10.1 认识组件化

#### 10.2 组件的基本使用

#### 10.3 全局组件和局部组件

- 全局组件：

1. Vue.extend() 创建组件构造器
2. Vue.componnent() 注册组件
3. 在 Vue 实例的作用范围使用组件

- 局部组件

在 components 对象中注册

#### 10.4 父组件和子组件

#### 10.5 注册的语法糖

#### 10.6 模版的分类写法

- script
- template

#### 10.7 数据的存放

- 组件不能直接访问实例的数据
- 子组件不能直接访问父组件
- 子组件中有自己的 data，而且必须是一个函数
- 为什么必须是一个函数

#### 10.8 父子组件的通信

- 父传子: props
- 子传父: $emit

v-bind 不支持驼峰，请用中划线
避免直接在子组件改变 props 中的值

#### 10.9 父子访问

- 父访问子：\$children、$refs(推荐)
- 子访问父：$parent(不推荐，使组件的复用性降低)
- 根组件：$root(Vue 实例)

### 十一、组件化高级

#### slot 的使用

- 基本使用、默认值、插槽中有多个内容时全部替换
- 具名插槽
- 编译的作用域
- 作用域插槽：父组件替换插槽的标签，但是内容由子组件提供

### 十二、前端模块化

#### 12.1 为什么要使用模块化

- 简单写 js 代码带来的问题
- 闭包引起代码不可复用
- 自己实现了简单的模块化
- 模块化规范：AMD/CMD/CommonJS(node)/ES6

#### 12.2 CommonJS 需要 node 环境

导出：
module.exports = {

}

导入：
let { } = require('')

#### 12.3 ES6 中模块的使用

script 标签中添加属性 type="module"

导出：
export {

}
或
export var num {

}
或
export default xxx(只能一个) 对应：import xxx from ''

导入：
import { } from ''
或
import \* as xxx from ''(导入所有)

### 十三、webpack

#### 13.1 什么是 webpack

静态的模块化打包工具

- webpack 和 gulp(核心是 task，强调自动化) 对比
- webpack 依赖 node 环境，node 环境依赖各种包
- 安装 webpack：npm install webpack@3.6.0 -g 因为 vue-cli2 依赖该版本

#### 13.2 webpack 起步

- webpack 命令
  webpack ./src/main.js ./dist/bundle.js
- webpack 配置：webpack.config.js/package.json(scripts，写在里面优先在本地找命令)
- webpck 为什么需要本地安装和全局安装

1. 开发时依赖(--save-dev)和运行时依赖
2. 在终端中输入命令，使用的都是全局的 webpack
3. 如果需要使用本地的，先要进入 node_modules 文件夹中

#### 13.3 webpack 的 loader

- css-loader(只负责加载)/style-loader(将样式添加到 DOM 中)，使用多个 loader 时，从右向左读，所以顺序很重要
- less-loader/less
- url-loader/file-loader
- babel-loader(ES6 转 ES5)

#### 13.4 webpack 中配置 Vue

- vue-loader
- template 替换 el

#### 13.5 webpack 的 plugin

#### 13.6 搭建本地服务器

#### 13.7 配置文件的分离

开发时依赖和生产时依赖的不同

npm insatll webpack-merge

### 十四、Vue CLI

#### 14.1 什么是 CLI

- 脚手架是什么东西

#### 14.2 runtime-compiler 和 runtime-only 的区别

- ESLint 到底是什么
- runtime-compiler：template -(解析)> ast -(编译)> render -> vdom -> 真实 dom
- runtime-only：render:(h) => h, -> createElement

#### 14.3 Vue CLI4

- 如何通过 CLI4 创建项目
  vue create my-project
- CLI4 的目录结构
- 配置文件：1.Vue UI 2.隐藏的配置文件 3.自定义 vue.config.js

删除配置文件 rm-f ~/.vuerc
修改配置文件 vi ~/.vuerc

### 十五、Vue-Router

#### 15.1 什么是前端路由

路由：通过互联的网络把信息从源地址传输到目的递增的活动
后端渲染：后端已经将页面渲染后返回，SEO 上有优势
后端路由：后端处理 URL 和页面之间的映射关系
前端渲染：浏览器中显示的大部分内容都是由前端写的 js 代码在浏览器执行，最终渲染出来
SPA（单页面富应用）：整个网页只有一个 html 文件
前端路由：按需渲染后显示，一个 url 对应一个组件

- 后端渲染/后端路由
- 前后端分离
- SPA/前端路由

#### 15.2 路由的基本配置

- 安装 vue-router
  npm install vue-router --save
- 导入 vue-router、vue -> Vue.use -> 创建 VueRouter 对象 -> 挂载到 Vue 实例上
- 配置映射关系：1.创建组件 2.配置映射关系 3.使用 router-link/router-view
- router-link 和 router-view 实际上是两个全局组件
- $route和$router 是在 Vue 的原型上

#### 15.3 细节处理

- 默认路由：redirect
- mode:history
- router-link -> tag/replace/active-class

#### 15.4 动态路由

- /user/:id
- this.$route.params.id
- $router(new出来的对象)和$route(谁处于活跃状态的路由对象)
- 路由懒加载
  () => import('')

#### 15.5 路由的参数传递

- params
- query -> URL
- URL 的组成
  协议://主机:端口/路径?查询
  scheme:://host:port/path?query#fragment

#### 15.6 路由嵌套

- children: []

#### 15.7 导航守卫

监听路由跳转

- 全局导航守卫
- 路由独享守卫
- 组件类守卫

#### 15.8 keep-alive

- Vue 内置的一个组件
- 将组件的状态保存下来
- 正常情况下组件和频繁的创建和销毁
- activated 和 deactivated 只有该组件被保存了状态使用了 keep-alive 时，才是有效的
- 属性 include 和 exclude,包含或排除多个时，不能有空格

#### 15.9 TabBar 的封装过程

- 文件路径的引用问题
- 路径别名

1. vue cli2
   在 build 文件夹下的 webpack.base.conf.js 中 resolve -> alias
2. vue cli>2
   创建 vue.config.js

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    }
  }
}
```

### 十六、Promise

- Promis 是异步编程的一种解决方案
- 同步 sync
- 异步 async
- 回调地狱，不容易维护
- Promise.all()

### 十七、Vuex

状态管理模式
需要在多个组件间共享的状态（比如登录状态）
![Vuex](https://vuex.vuejs.org/vuex.png)

- 安装
  npm install vuex --save
  Vue.use
- state 单一状态树
  修改 state
  ```js
  this.$state.commit('')
  ```
- mutations 初始化的所有属性是响应式的
  Vue.set()
  Vue.delete()
  为了使用 devtools，只能使用同步操作
- actions
  异步操作
- getters function(state, getters?)
  如果需要传参

  ```js
  function(state, getters?) {
    return function(query) {

    }
  }
  ```

- modules
- 异步操作在 Actions 进行

### 十八、网络请求的封装
