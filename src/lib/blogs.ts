import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
}

async function importBlog(blogFilename: string): Promise<BlogType> {
  const source = await fs.readFile(
    path.join(process.cwd(), 'src/content/blog', blogFilename),
    'utf-8'
  )

  const { data } = matter(source)

  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    title: data.title as string,
    description: data.description as string,
    author: data.author as string,
    date: data.date as string
  }
}

let cachedBlogs: BlogType[] | null = null
let cacheTime = 0
const CACHE_TTL = 1000 * 60 * 5 // 5 minutes

export async function getAllBlogs(): Promise<BlogType[]> {
  const now = Date.now()
  if (cachedBlogs && now - cacheTime < CACHE_TTL) {
    return cachedBlogs
  }

  let blogFileNames = await glob('*.mdx', {
    cwd: './src/content/blog'
  })

  let blogs = await Promise.all(blogFileNames.map(importBlog))

  blogs.sort((a, z) => {
    const aDate = a.date ? +new Date(a.date) : 0
    const zDate = z.date ? +new Date(z.date) : 0
    return zDate - aDate
  })

  cachedBlogs = blogs
  cacheTime = now
  return blogs
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlog(`${cleanSlug}.mdx`)
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}
