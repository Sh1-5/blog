export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'

// personal info
export const name = 'Sh1-5'
export const headline =
  'Software engineer, Full-Stack web developer, and indie hacker.'
export const introduction =
  'Hello, I’m Sh1-5, a software engineer based in Shenzhen, China. Coding is my profession and passion. In my free time, I love to capture moments through photography. I’m also an avid gamer, with Valorant and League of Legends being my favorites.'
export const email = 'i.huangqihong@gmail.com'
export const githubUsername = 'Sh1-5'

// about page
export const aboutMeHeadline =
  "I'm Sh1-5, a software engineer based in Shenzhen, China."
export const aboutParagraphs = [
  'I love coding. I learned programming when I in college.',
  'I have a lot of hobbies, such as photography, watching movies, playing games and so on.',
  "I'm working as a software develop engineer in Shenzhen, China now. And I'm building a lot of side projects in my spare time."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/qihong_fsd',
    external: true
  },
  // {
  //   name: 'Bsky',
  //   icon: 'bsky',
  //   href: 'https://bsky.app/profile/coreychiu.com',
  //   external: true
  // },
  // {
  //   name: 'Jike',
  //   icon: 'pill',
  //   href: 'https://okjk.co/P7c1zU',
  //   external: true
  // },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Sh1-5',
    external: true
  }
  // {
  //   name: 'Wechat',
  //   icon: 'wechat',
  //   href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ',
  //   external: true
  // },
  // {
  //   name: 'Discord',
  //   icon: 'discord',
  //   href: 'https://discord.gg/xTxRg3Ej',
  //   external: true
  // },
  // {
  //   name: 'Ko-fi',
  //   icon: 'coffee',
  //   href: 'https://ko-fi.com/coreychiu',
  //   external: true
  // }
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat'
]
