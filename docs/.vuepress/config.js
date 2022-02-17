const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'Sh1-5',
  themeConfig: {
    logo: '/assets/img/star.png',
    nav,
    sidebar,
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nextLinks: true,
    prevLinks: true
  },
  plugins: [
    'vuepress-plugin-nprogress',
    'vuepress-plugin-baidu-autopush',
    'reading-progress',
    [
      'vuepress-plugin-code-copy',
      {
        color: '#ffffff',
        successText: '复制成功！'
      }
    ]
  ]
}
