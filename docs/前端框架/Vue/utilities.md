---
title: utilities
---

## isProxy

返回一个 Boolean

检测对象是否是由`reactive`/`readonly`/`shallowReactive`/`shallowReadonly`创建出来的`proxy`

## isReactive

返回一个 Boolean

检测对象是否是由`reactive`/`shallowReactive`创建出来的`proxy`

如果`proxy`是`readonly`创建的，但包裹了`reactive`创建出来的`proxy`，那么也会返回 true

## isReadonly

返回一个 Boolean

检测对象是否是由`readonly`创建出来的`proxy`

## toRaw

返回`reactive`/`readonly`创建的`proxy`的原始对象

谨慎使用
