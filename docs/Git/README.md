---
title: 基础
categories:
  - 其它
tags:
  - Git
---

## 查看公钥

cd ~/.ssh

cat id_rsa.pub

## 全局配置用户信息

git config --global user.name "hqh"

git config --global user.email 1101646169@qq.com

## 查看用户配置信息

git config --list

## 在原有基础上，再次添加/删除一个远程仓库

git remote set-url --add origin newUrl
git remote set-url --delete origin url

## commit 注释修改（最后一次提交）

git commit --amend 修改注释

## 版本回退 & 强制上传

git reset --soft 版本号

git push -f
