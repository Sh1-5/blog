// projects
export const projectHeadLine = "What I've done and what I'm doing."
// export const projectIntro =
//   "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."
export const projectIntro =
  "I've worked on a variety of projects, from simple websites to complex web applications."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: 'ai.f2e.dev',
    description:
      '汇聚高质量 AI 应用，分类清晰，轻松获取所需工具；获取最新的 AI 相关资讯，助您把握行业动态；按量收费，持续接入最新的 AI 模型',
    link: {
      href: 'ai.f2e.dev',
      label: 'ai.f2e.dev'
    },
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['AI', 'Tools Directory'],
    logo: '/images/icon/ai-f2e-dev.png'
  },
  {
    name: '奇绘馆 AI视频',
    description:
      '将文本转换为高质量AI视频，适用于多种场景，如抖音短视频、小说推文、AI短片、AI电影等创作',
    link: {
      href: 'qihuiguan.cn',
      label: '奇绘馆 AI视频'
    },
    category: ['Website'],
    techStack: ['Vue3', 'Element Plus'],
    tags: ['AI', 'Video'],
    logo: '/images/icon/qihuiguan.png'
  },
  {
    name: '爱彼迎',
    description: '爱彼迎',
    link: {
      href: 'airbnb.sh1-5-projects.vercel.app',
      label: '模仿爱彼迎的练习项目'
    },
    category: ['Website'],
    techStack: ['React', 'Ant Design'],
    tags: ['Airbnb', 'Website'],
    logo: '/images/icon/airbnb.png'
  }
  // {
  //   name: '轻息',
  //   description: '一款呼吸训练、缓解压力、提升专注力的“小而美”app',
  //   link: {
  //     href: 'apps.apple.com/us/app/%E8%BD%BB%E6%81%AF/id6742171445',
  //     label: '轻息'
  //   },
  //   category: ['App'],
  //   techStack: ['SwiftUI'],
  //   tags: ['App', 'iOS'],
  //   logo: '/images/icon/breathe-app-icon.png'
  // },
  // {
  //   name: 'SEO Explore',
  //   description: 'Explore all the best SEO tools in one place.',
  //   link: { href: 'seoexplore.com', label: 'SEO Explore' },
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['SEO']
  // },
  // {
  //   name: 'GitHub Cards',
  //   description:
  //     'Showcase your GitHub contributions into stunning visual cards.',
  //   link: { href: 'github.cards', label: 'GitHub Cards' },
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Visual Cards', 'GitHub Contribution Cards']
  // },
  // {
  //   name: 'AI Best Tools',
  //   description: 'Find the best AI tools in AIBest.tools',
  //   link: { href: 'aibest.tools', label: 'AI Best Tools' },
  //   logo: 'images/icon/aibesttools.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['AI', 'Tools Directory']
  // },
  // {
  //   name: 'Best Directories',
  //   description: 'Your ultimate directory of directories.',
  //   link: { href: 'bestdirectories.org', label: 'Best Directories' },
  //   logo: '/images/icon/bestdirectories.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Directory of Directories']
  // },
  // {
  //   name: 'User Growth',
  //   description: 'Boost Your business growth with UserGrowth.link',
  //   link: { href: 'usergrowth.link', label: 'User Growth' },
  //   logo: '/images/icon/usergrowth.ico',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['User Growth', 'Marketing', 'SEO']
  // },
  // {
  //   name: 'Dev Toolset',
  //   description: 'Open-source database-free tools directory.',
  //   link: { href: 'devtoolset.net', label: 'Dev Toolset' },
  //   logo: '/images/icon/devtoolset.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Open Source', 'Database-Free', 'Tools Directory']
  // },
  // {
  //   name: 'Domain Score',
  //   description: 'Ultimate AI-Powered tool for domain scoring and evaluation',
  //   link: { href: 'domainscore.ai', label: 'Domain Score' },
  //   logo: '/images/icon/domainscore.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Domain', 'AI', 'SEO']
  // },
  // {
  //   name: 'MagicBox Tools',
  //   description: 'Find the best AI tools in MagicBox.tools',
  //   link: { href: 'magicbox.tools', label: 'MagicBox Tools' },
  //   logo: '/images/icon/magicbox.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['AI', 'Tools Directory']
  // }
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'Devtoolset',
    description:
      'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
    link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
    gitStars: 203,
    gitForks: 67
  },
  {
    name: 'Corey Chiu Portfolio Template',
    description: 'portfolio template by corey chiu',
    link: {
      href: 'github.com/iAmCorey/coreychiu-portfolio-template',
      label: 'Corey Chiu Portfolio Template'
    },
    gitStars: 229,
    gitForks: 30
  },
  {
    name: 'Chrome Extension Plasmo Template',
    description:
      'A chrome extension template using plasmo, tailwind css, shadcn/ui',
    link: {
      href: 'github.com/iAmCorey/chrome-extension-plasmo-template',
      label: 'Chrome Extension Plasmo Template'
    },
    gitStars: 54,
    gitForks: 10
  },
  {
    name: 'Awesome Indie Hacker Tools',
    description:
      '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
    link: {
      href: 'github.com/iAmCorey/awesome-indie-hacker-tools',
      label: 'Awesome Indie Hacker Tools'
    },
    gitStars: 815,
    gitForks: 69
  },
  {
    name: 'Awesome AI Directory',
    description: 'AI资源工具导航站收录 / Find all the best AI directories',
    link: {
      href: 'github.com/iAmCorey/awesome-ai-directory',
      label: 'Awesome AI Directory'
    },
    gitStars: 40,
    gitForks: 7
  },
  {
    name: 'Producthunt Daily Bot',
    description: 'A bot getting product hunt daily top products',
    link: {
      href: 'github.com/iAmCorey/producthunt-daily-bot',
      label: 'Producthunt Daily Bot'
    },
    gitStars: 3,
    gitForks: 3
  },
  {
    name: 'Cantonese Echoes',
    description: 'Cantonese Echoes / 粵語殘片',
    link: {
      href: 'github.com/iAmCorey/Cantonese-Echoes',
      label: 'Cantonese Echoes'
    },
    gitStars: 1
  }
]
