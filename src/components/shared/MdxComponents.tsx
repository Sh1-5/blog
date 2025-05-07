import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className="mx-1 font-semibold text-primary underline decoration-1 underline-offset-2 transition-all hover:decoration-2"
      />
    )
  }
  if (href?.startsWith('#')) {
    return (
      <a
        {...props}
        className="mx-1 font-semibold text-primary underline decoration-1 underline-offset-2 transition-all hover:decoration-2"
      />
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
      className="mx-1 font-semibold text-primary underline decoration-1 underline-offset-2 transition-all hover:decoration-2"
    />
  )
}

// 自定义代码块组件
const CustomCode = (props: any) => {
  const { children, className } = props
  const match = /language-(\w+)/.exec(className || '')

  // 如果是在pre标签内的code，可能是代码块的一部分
  const isInPre =
    typeof props.node?.parentNode?.tagName === 'string' &&
    props.node.parentNode.tagName.toLowerCase() === 'pre'

  // 对于行内代码（不在pre内且没有语言标记）
  if (!isInPre && !match) {
    return (
      <code
        className="mx-1 rounded-sm bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-background dark:text-zinc-200 "
        {...props}
      />
    )
  }

  // 对于带语言标记的代码块
  if (match) {
    return (
      <SyntaxHighlighter
        style={oneDark as any}
        language={match[1]}
        PreTag="div"
        className="my-6 overflow-hidden rounded-xl shadow-lg"
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          margin: '1.5rem 0',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    )
  }

  // 对于pre内的普通代码（无语言标记的代码块）
  // 返回普通代码，不添加任何样式，让CustomPre处理外层样式
  return <code {...props}>{children}</code>
}

// 自定义预格式化代码块容器
const CustomPre = (props: any) => {
  const { children } = props

  // 检查是否包含SyntaxHighlighter组件
  if (children && children.type === SyntaxHighlighter) {
    return children // 直接返回SyntaxHighlighter，不添加额外样式
  }

  // 检查children是否已经是经过CustomCode处理的元素
  // 通过检查className判断是否已经应用了样式
  if (
    children &&
    children.props &&
    children.props.className &&
    (children.props.className.includes('bg-zinc') ||
      children.props.className.includes('language-'))
  ) {
    // 这种情况下直接返回children，避免重复添加背景色
    return children
  }

  // 对于无语言标记的普通代码块，添加基本样式
  return (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-zinc-100 p-4 font-mono text-sm tracking-tight shadow-md dark:bg-background"
      {...props}
    >
      {children}
    </pre>
  )
}

export const mdxComponents: MDXComponents = {
  Image: (props: ImageProps) => (
    <Image
      {...props}
      className="my-8 rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl"
      alt=""
    />
  ),
  a: CustomLink,
  h1: (props: any) => (
    <h1
      className="mb-6 mt-10 border-b border-zinc-200 pb-2 text-4xl font-bold tracking-tight dark:border-zinc-700 sm:text-5xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mb-6 mt-10 border-b border-zinc-200 pb-1 text-3xl font-bold tracking-tight dark:border-zinc-700 sm:text-4xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mb-4 mt-8 text-2xl font-bold tracking-tight sm:text-3xl"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4 className="mb-4 mt-6 text-xl font-bold tracking-tight" {...props} />
  ),
  p: (props: any) => (
    <p className="my-6 text-base leading-relaxed opacity-85" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="my-6 space-y-2 pl-6"
      style={{ listStyleType: 'disc' }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="my-6 space-y-2 pl-6"
      style={{ listStyleType: 'decimal' }}
      {...props}
    />
  ),
  li: (props: any) => <li className="pl-2 opacity-85" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="my-6 rounded-r-lg border-l-4 border-primary bg-zinc-100 py-3 pl-6 italic text-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-zinc-300 dark:border-zinc-700" {...props} />
  ),
  table: (props: any) => (
    <div className="my-8 overflow-auto rounded-lg shadow-md">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="border-b border-zinc-300 bg-zinc-100 px-4 py-3 font-medium dark:border-zinc-700 dark:bg-zinc-800"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800"
      {...props}
    />
  ),
  code: CustomCode,
  pre: CustomPre
}
