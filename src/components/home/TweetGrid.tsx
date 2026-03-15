'use client'

import { tweetIds } from '@/config/infoConfig'
import { ClientTweetCard } from '@/components/home/ClientTweetCard'

export const TweetGrid = () => {
  return (
    <div className="grid columns-1 gap-4 sm:columns-2 lg:hidden lg:columns-3">
      {tweetIds.map((id) => (
        <ClientTweetCard
          key={id}
          id={id}
          className="mb-4 break-inside-avoid shadow-xl"
        />
      ))}
    </div>
  )
}
