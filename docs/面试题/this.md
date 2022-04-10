---
title: this
categories:
  - 面试题
---

## 常用场景

- 作为普通函数
- 使用 call、apply、bind
- 作为对象方法被调用
- 箭头函数
- 在 class 方法中被调用

> this 取什么值是在函数执行时决定的，不是在函数定义的时候决定的

## 普通函数

```javascript
function foo() {
  console.log(this)
}
foo() // window
```

## call

call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数

- thisArg
- arg1, agr2, ...

```javascript
function foo() {
  console.log(this)
}
foo.call({ x: 100 }) // { x: 100 }
```

## apply

apply 方法调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供的参数

- thisArg
- argsArray

## bind

bind 方法创建一个新的函数，在 bind 方法被调用时，这个新函数的 this 被指定为 bind 方法的第一个参数，而其余参数将作为新函数的参数，供调用时使用

```javascript
function foo() {
  console.log(this)
}
const fn = foo.bind({ x: 200 })
fn() // { x: 200 }
```

## 对象方法

```javascript
const people1 = {
  name: 'kobe',
  sayHi() {
    console.log(this)
  }
  wait() {
    setTimeout(function() {
      console.log(this)
    })
  }
}
people1.sayHi() // people1对象
people1.wait() // window
```

## 箭头函数

```javascript
const people2 = {
name: 'james',
sayHi() {
console.log(this)
}
wait() {
setTimeout(() => {
console.log(this)
})
}
}
people2.sayHi() // people2对象
people2.wait() // people2对象
```

箭头函数的 this 为上级作用域的 this

## class

```javascript
class People {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(this)
  }
}
const p = new People('kobe')
p.sayHi() // p对象
```
