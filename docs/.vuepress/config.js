const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'Sh1-5',
  theme: 'vuepress-theme-note',
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
  }
}
