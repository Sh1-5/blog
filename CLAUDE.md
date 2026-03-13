# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 命令

```bash
npm run dev        # 启动开发服务器
npm run build      # 生产环境构建
npm run lint       # 运行 ESLint
npm run prettier   # 使用 Prettier 格式化所有文件
```

未配置测试框架。

## 架构

这是一个使用 TypeScript 和 TailwindCSS 的 **Next.js 14 App Router** 个人作品集/博客网站。

### 内容

博客文章是 `src/content/blog/` 中的 MDX 文件。每个文件需要包含 frontmatter：
```
---
title: string
description: string
author: string
date: string  # ISO 格式，用于排序
---
```

博客工具（`src/lib/blogs.ts`）通过 `gray-matter` + `fast-glob` 在运行时读取这些文件。slug 由文件名（不含 `.mdx`）派生。

### 配置

所有网站数据由 `src/config/` 中的配置文件驱动：
- `infoConfig.ts` — 个人信息、简介、社交链接、技术图标（重新导出所有其他配置）
- `siteConfig.ts` — 导航项、网站 URL、UTM 来源
- `projects.ts`、`career.ts`、`education.ts`、`friends.ts`、`changelog.ts`、`activity.ts` — 页面特定数据

要添加/更新内容（项目、朋友、职业历史等），请编辑相关配置文件而不是页面组件。

### 页面

路由直接映射到 `src/app/` 目录，使用 Next.js App Router 约定：
- `/` → 首页，包含 GitHub 活动和技术跑马灯
- `/about` → 简介和职业/教育时间线
- `/blogs` → 来自 `getAllBlogs()` 的列表；`/blogs/[slug]` → MDX 渲染的文章
- `/projects`、`/friends`、`/changelog` — 来自配置文件的数据

### UI 组件

- Shadcn/ui 组件位于 `src/components/ui/`（New York 风格，兼容 RSC）
- 布局组件位于 `src/components/layout/`，页面特定组件位于 `src/components/home/`、`src/components/project/` 等
- 深色模式通过 `next-themes` 使用 Tailwind 的 `class` 策略

### 环境变量

- `NEXT_PUBLIC_SITE_URL` — 规范网站 URL
- `NEXT_PUBLIC_UTM_SOURCE` — 分析 UTM 来源
- OpenPanel 分析客户端 ID 在 providers 中配置
