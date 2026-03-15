import { Feed } from 'feed'
import { name, email } from '@/config/infoConfig'
import { getAllBlogs } from '@/lib/blogs'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: name,
    email: email
  }

  let feed = new Feed({
    title: author.name,
    description: name + "'s blog",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${name} ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed`
    }
  })

  const blogs = await getAllBlogs()

  for (let blog of blogs) {
    feed.addItem({
      title: blog.title,
      id: `${siteUrl}/blogs/${blog.slug}`,
      link: `${siteUrl}/blogs/${blog.slug}`,
      description: blog.description,
      author: [author],
      date: new Date(blog.date)
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'cache-control': 's-maxage=86400' // one day cache
    }
  })
}
