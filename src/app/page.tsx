export const revalidate = 60

import dynamic from 'next/dynamic'
import { Container } from '@/components/layout/Container'
import Feed from '@/components/home/Feed'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import {
  projectHeadLine,
  projectIntro,
  projects,
  blogHeadLine,
  blogIntro,
  techIcons,
  activityHeadLine,
  activityIntro
} from '@/config/infoConfig'
import GitHubSnake from '@/components/home/GitHubSnake'
import Link from 'next/link'

const IconCloud = dynamic(
  () => import('@/components/ui/icon-cloud'),
  { ssr: false }
)

const TweetGrid = dynamic(
  () => import('@/components/home/TweetGrid').then((mod) => ({ default: mod.TweetGrid })),
  { ssr: false }
)

const MarqueeVertical = dynamic(
  () => import('@/components/home/MarqueeVertical').then((mod) => ({ default: mod.MarqueeVertical })),
  {
    ssr: false,
    loading: () => (
      <div className="hidden h-[1000px] animate-pulse items-center justify-center rounded-lg bg-muted/30 lg:flex">
        <span className="text-sm text-muted-foreground">Loading tweets...</span>
      </div>
    )
  }
)

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight opacity-80 sm:text-3xl">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction}
            </p>
            <SocialLinks className="md:mt-24" />
          </div>
          <div className="relative ml-auto flex size-full w-full items-center justify-center overflow-hidden px-20 md:mr-8 md:w-2/3 md:px-0">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          <GitHubSnake />
        </div>
        {/* projects */}
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {projectHeadLine}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {projectIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs="h3" />
            ))}
          </ul>
        </div>
        <div className="mx-auto my-8 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {blogHeadLine}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {blogIntro}
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 pb-4 lg:max-w-none lg:grid-cols-2">
          {/* left column */}
          {/* blog */}
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs="h3" />
            ))}
            <Link
              href="/blogs"
              className="flex flex-row items-center text-sm font-semibold capitalize text-primary hover:underline"
            >
              Read more blogs
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ml-1 h-4 w-4 fill-current"><path d="M181.66 133.66l-80 80a8 8 0 01-11.32-11.32L164.69 128 90.34 53.66a8 8 0 0111.32-11.32l80 80a8 8 0 010 11.32z" /></svg>
            </Link>
          </div>

          {/* right column */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />

            {/* <Newsletter /> */}
            <Feed />
          </div>
        </div>
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {activityHeadLine}
          </h2>
          <p className="mb-2 max-w-2xl text-base text-muted-foreground">
            {activityIntro}
          </p>
          <TweetGrid />
          <MarqueeVertical />
        </div>
      </Container>
    </>
  )
}
