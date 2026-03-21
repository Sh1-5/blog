'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export default function TypingAnimation({
  text,
  duration = 200,
  className
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('')
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setDisplayedText('')

    const typingEffect = setInterval(() => {
      if (indexRef.current < text.length) {
        indexRef.current += 1
        setDisplayedText(text.substring(0, indexRef.current))
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [text, duration])

  return (
    <h1
      className={cn(
        'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className
      )}
    >
      {displayedText || text}
    </h1>
  )
}
