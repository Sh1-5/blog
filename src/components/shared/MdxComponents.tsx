import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

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

// 代码块由 rehype-prism 在编译时高亮，无需运行时 JS 高亮库
const CustomCode = (props: any) => {
  const { children, className } = props
  const isLanguageCode = /language-(\w+)/.test(className || '')

  // 行内代码（不在 pre 内且没有语言标记）
  if (!isLanguageCode) {
    return (
      <code
        className="mx-1 rounded-sm bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-background dark:text-zinc-200"
        {...props}
      />
    )
  }

  // 带语言标记的代码块，rehype-prism 已处理高亮
  return <code className={className}>{children}</code>
}

const CustomPre = (props: any) => {
  const { children } = props

  return (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-[#282c34] p-4 font-mono text-sm leading-relaxed tracking-tight shadow-lg"
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
