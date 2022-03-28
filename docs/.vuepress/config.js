const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: "Sh1-5's Blog",
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    authorAvatar: '/assets/img/star.png',
    friendLink: [
      {
        title: 'GitHub',
        link: 'https://github.com/Sh1-5'
      },
      {
        title: '掘金',
        link: 'https://juejin.cn/user/3993065308823294'
      }
    ],
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    // 博客配置
    // blogConfig: {
    //   category: {
    //     location: 1,
    //     text: '分类'
    //   },
    //   tag: {
    //     location: 2,
    //     text: '标签'
    //   }
    // },
    nav,
    sidebar,
    author: '拾伍',
    startYear: 2022,
    record: '赣ICP备 2022001184号',
    recordLink: 'https://beian.miit.gov.cn'
  },
  // 移动端优化
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  plugins: [
    'vuepress-plugin-baidu-autopush',
    [
      'vuepress-plugin-code-copy',
      {
        color: '#ffffff',
        successText: '复制成功！'
      }
    ]
  ]
}
