import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllBlogs, getBlogBySlug } from '@/lib/blogs'
import { getMDXContent } from '@/lib/mdx'
import { BlogLayout } from '@/components/layout/BlogLayout'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug
  }))
}

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  if (!blog) {
    return {
      title: 'Blog not found'
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

  return {
    title: blog.title,
    description: blog.description,
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description
    }
  }
}

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  const content = await getMDXContent(params.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    author: {
      '@type': 'Person',
      name: blog.author
    },
    datePublished: blog.date
  }

  return (
    <BlogLayout blog={blog}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="prose mt-8 max-w-none dark:prose-invert">{content}</div>
    </BlogLayout>
  )
}
