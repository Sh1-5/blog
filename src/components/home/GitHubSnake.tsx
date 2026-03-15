import Image from 'next/image'

export default function GitHubSnake() {
  return (
    <div className="w-full overflow-hidden">
      <div className="dark:hidden">
        <Image
          src="/github-contribution-snake/github-contribution-grid-snake.svg"
          alt="GitHub Contribution Snake"
          width={800}
          height={200}
          className="w-full"
          priority={false}
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src="/github-contribution-snake/github-contribution-grid-snake-dark.svg"
          alt="GitHub Contribution Snake"
          width={800}
          height={200}
          className="w-full"
          priority={false}
        />
      </div>
    </div>
  )
}
