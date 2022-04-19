---
title: DOM
categories:
  - 面试题
---

## DOM 操作

Document Object Model

本质是一棵树

### 获取 DOM 节点

document.getElementById：元素

document.getElementsByTagName：集合

document.getElementsByClassName：集合

document.getSelectorAll：集合

### DOM 节点的 property

例子：

1.设置

元素.style.width = '100px'

元素.className = 'red'

2.获取

元素.style.width

元素.className

元素.nodeName

### DOM 节点的 attribute

例子：

1.设置

元素.setAttribute('data-name', 'name')

元素.setAttribute('style', 'font-size: 50px')

2.获取

元素.getAttribute('data-name')

### property 和 attribute

- property：修改对象属性，不会体现到 HTML 结构中

- attribute：修改 HTML 属性，会改变 HTML 结构

- 两者都可能引起 DOM 重新渲染

## DOM 结构操作

### 新增/插入/移动

新增：document.createElement

插入：元素.appendChild

移动：元素.appendChild

### 获取父元素

元素.getParentNode

### 获取子元素列表（包括文本）

元素.childNodes

### 删除节点

元素.removeChild

## DOM 性能

操作 DOM 十分消耗性能

- 对 DOM 查询做缓存
- 将频繁操作改为一次性操作

```javascript
// 不缓存DOM查询结果
for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
  // 每次循环都会计算length，频繁进行DOM查询
}

// 缓存DOM查询结果
const pList = document.getElementsByTagName('p')
const length = pList.length
for (let i = 0; i < length; i++) {
  // 缓存length，只进行一次DOM查询
}
```

```javascript
// 频繁插入
const list = document.getElementById('list')
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  li.innerHTML = `list item ${x}`
  list.appendChild(li)
}

// 一次性插入
const list = document.getElementById('list')
const frag = document.createDocumentFragment() // 创建文件片段。此时还没有插入到DOM结构中
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  li.innerHTML = `list item ${x}`
  frag.appendChild(li) // 插入到文件片段中
}
list.appendChild(frag) // 都完成后，再统一插入到DOM树中
```
