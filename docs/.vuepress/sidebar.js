const interviewChildren = require('./interviewChildren')
const jsChildren = require('./jsChildren')
const tsChildren = require('./tsChildren')
const vueChildren = require('./vueChildren')
const reactChildren = require('./reactChildren')
const algoChildren = require('./algoChildren')
const otherChildren = require('./otherChildren')
const nodeChildren = require('./nodeChildren')

module.exports = {
  '/算法/': [
    {
      title: '算法',
      collapsable: false,
      children: algoChildren
    }
  ],
  '/面试题/': [
    {
      title: '面试题',
      collapsable: false,
      children: interviewChildren
    }
  ],
  '/HTML/': [
    {
      title: 'HTML',
      collapsable: false,
      children: [
        '',
        '基本结构',
        '元素',
        '属性',
        '字符实体',
        '元素的语意化',
        '元素的类型',
        '高级元素'
      ]
    }
  ],
  '/CSS/': [
    {
      title: 'CSS',
      collapsable: false,
      children: [
        '',
        '文本',
        '字体',
        '选择器',
        '属性的特性',
        'display',
        '元素隐藏方法',
        '样式不生效的原因',
        '盒子模型',
        'background'
      ]
    }
  ],
  '/JavaScript/': [
    {
      title: 'JavaScript',
      collapsable: false,
      children: jsChildren
    }
  ],
  '/Webpack/': [
    {
      title: 'Webpack',
      collapsable: false,
      children: [
        '',
        'css相关loader',
        'postcss',
        'img相关loader',
        'webpack5资源模块类型',
        'clean-webpack-plugin',
        'html-webpack-plugin',
        'define-plugin',
        'mode与devtool',
        'babel',
        '打包vue代码',
        'watch',
        'webpack-dev-server',
        'browserslist'
      ]
    }
  ],
  '/TypeScript/': [
    {
      title: 'TypeScript',
      collapsable: false,
      children: tsChildren
    }
  ],
  '/Node/': [
    {
      title: 'Node',
      collapsable: false,
      children: nodeChildren
    }
  ],
  '/Vue/': [
    {
      title: 'Vue',
      collapsable: false,
      children: vueChildren
    }
  ],
  '/React/': [
    {
      title: 'React',
      collapsable: false,
      children: reactChildren
    }
  ],
  '/SVG/': [
    {
      title: 'SVG',
      collapsable: false,
      children: ['', '基本形状', '路径', '填充和边框', '渐变', '文本']
    }
  ],
  '/其它/': [
    {
      title: '其它',
      collapsable: false,
      children: otherChildren
    }
  ]
}
