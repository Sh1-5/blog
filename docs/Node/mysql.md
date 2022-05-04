---
title: mysql
categories:
  - 前端进阶
tags:
  - Node
---

## MySQL

MySQL 是一种常用的关系型数据库

## 下载

[MySQL](https://dev.mysql.com/downloads/mysql/)

## 终端操作

### Mac 添加环境变量

```bash
export PATH=$PATH:/usr/local/mysql/bin
```

### 连接数据库

```bash
mysql -uroot -p
```

## SQL（结构化查询语言）

### DDL（数据定义语言）

对数据库或者表进行创建、修改、删除等操作

#### 数据库操作

```bash
# 查看所有数据库
SHOW DATABASES;

# 创建一个新的数据库
CREATE DATABASE `school`;
CREATE DATABASE IF NOT EXISTS `school`;
CREATE DATABASE IF NOT EXISTS `school` DEFAULT CHARACTER utf8mb4 COLLATE utf8mb4_0900_ai_ci;

# 选择某一个数据库
USE `school`;

# 查看当前正在使用的数据库
SELECT DATABASE();

# 修改数据库的字符编码和排序规则
ALTER DATABASE `school` CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;

# 删除数据库
DROP DATABASE `school`;
DROP DATABASE IF EXISTS `school`;
```

#### 表操作

```bash
# 查看所有表
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `student` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `age` INT DEFAULT 0,
  `phoneNum` VARCHAR(20) UNIQUE DEFAULT '',
  `createAt` DATETIME DEFAULT CURRENT_TIME
);

# 修改表
# 1.修改表的名字
ALTER TABLE `student` RENAME TO `user`;
# 2.添加列
ALTER TABLE `user` ADD `updateAt` DATETIME DEFAULT CURRENT_TIME ON UPDATE CURRENT_TIME;
# 3.修改字段名称
ALTER TABLE `user` CHANGE `phoneNum` `telNum` VARCHAR(20);
# 4.修改字段类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);
# 5.删除某一个字段
ALTER TABLE `user` DROP `age`;

# 根据一个表结构去创建另外一张表
CREATE TABLE `user1` LIKE `user`;
# 根据一个表中的所有内容创建另一张表（复制内容）
CREATE TABLE `user2` (SELECT * FROM `user`);

# 删除表
DROP TABLE IF EXISTS `student`;

# 查看表的结构
DESC `student`;
```

#### 数据类型

数字类型：INT、BIGINT、FLOAT、DOUBLE、DECIMAL、NUMERIC

日期类型：YEAR、DATE、DATETIME、TIMESTAMP

字符串类型：CHAR、VARCHAR、BINARY、BLOB、TEXT

#### 表约束

- 主键：PRIMARY KEY

  主键是表中唯一的索引，并且必须是 NOT NULL，如果没有设置 NOT NULL，MySQL 会隐式的设置为 NOT NULL

  建议：主键字段应该是和业务无关的，尽量不要使用业务字段来作为主键

- 唯一：UNIQUE
- 不能为空：NOT NULL
- 默认值：DEFAULT
- 自动递增：AUTO_INCREMENT

### DML（数据操作语言）

添加、修改、删除等操作

```bash
# 插入数据
INSERT INTO `user` (<value1>, <value2>...);
INSERT INTO `user` (<key1>, <key2>...) VALUES (<value1>, <value2>...);

# 修改数据
# 1.修改所有数据
UPDATE `user` SET <key1> = <value1>, <key2> = <value2>...;
# 2.修改符合条件的数据
UPDATE `user` SET <key1> = <value1>, <key2> = <value2>... WHERE <key1> = <value1> AND/OR <key2> = <value2>...;

# 删除数据
# 1.删除所有数据
DELETE FROM `user`;
# 2.删除符合条件的数据
DELETE FROM `user` WHERE <key1> = <value1> AND/OR <key2> = <value2>...;
```

### DQL（数据查询语言）

查询记录

```bash
# 基本查询
# 1.查询所有字段以及所有数据
SELECT * FROM `user`;
# 2.查询指定字段
SELECT `id`, `name` FROM `user`;
# 3.对字段结果起别名
SELECT `id` as `uId`, `name` as `uName` FROM `user`;

# where条件
# 1.条件判断语句
SELECT * FROM `user` WHERE 条件;

# 2.逻辑运算语句
SELECT * FROM `user` WHERE 条件1 AND/OR 条件2;
# 模糊查询
SELECT * FROM `user` WHERE `name` LIKE '%黄%'; # 包含'黄'，%表示匹配任意个的任意字符
SELECT * FROM `user` WHERE `name` LIKE '_黄%'; # 第二个字符为'黄'，_表示匹配一个任意字符
# IN表示取多个值中的一个
SELECT * FROM `user` WHERE `age` IN (18, 19, 20, 21);

# 3.对结果进行排序
SELECT * FROM `user` WHERE `age` IN (18, 19, 20, 21) ORDER BY `age` ASC; # 升序（默认），降序：DESC

# 4.分页查询
SELECT * FROM `user` LIMIT 20 OFFSET 0;
SELECT * FROM `user` LIMIT 0 20; # 第一个值为OFFSET，第二个值为LIMIT
```

### DCL（数据控制语言）

对数据库或者表的权限进行相关访问控制操作
