'use client'

import { Marquee } from '@/components/magicui/marquee'
import { tweetIds } from '@/config/infoConfig'
import { ClientTweetCard } from '@/components/home/ClientTweetCard'

const firstRow = tweetIds.slice(0, tweetIds.length / 3)
const secondRow = tweetIds.slice(tweetIds.length / 3, (tweetIds.length / 3) * 2)
const thirdRow = tweetIds.slice((tweetIds.length / 3) * 2)

export function MarqueeVertical() {
  return (
    <div className="relative hidden h-[1000px] w-full flex-row items-center justify-center overflow-hidden lg:flex">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((id) => (
          <ClientTweetCard
            key={id}
            id={id}
            className="mb-4 break-inside-avoid shadow-xl"
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((id) => (
          <ClientTweetCard
            key={id}
            id={id}
            className="mb-4 break-inside-avoid shadow-xl"
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {thirdRow.map((id) => (
          <ClientTweetCard
            key={id}
            id={id}
            className="mb-4 break-inside-avoid shadow-xl"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  )
}
