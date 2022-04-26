const studyChildren = require('./studyChildren')
const interviewChildren = require('./interviewChildren')
const vueChildren = require('./vueChildren')

module.exports = {
  '/今天不学习/': [
    {
      title: '今天不学习',
      collapsable: false,
      children: studyChildren
    }
  ],
  '/算法/': [
    {
      title: '算法',
      collapsable: false,
      children: [
        '',
        '1-两数之和',
        '141-环形链表',
        '203-移除链表元素',
        '396-旋转函数',
        '824-山羊拉丁文'
      ]
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
      children: [
        '',
        'String和toString',
        '字符串方法',
        '数组方法',
        '类的定义',
        '浅拷贝与深拷贝',
        'storage',
        'Set',
        'Fullscreen'
      ]
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
      children: ['', '变量的声明', '基础类型']
    }
  ],
  '/Node/': [
    {
      title: 'Node',
      collapsable: false,
      children: [
        '',
        'console',
        '特殊的全局对象',
        '常见的全局对象',
        '模块化',
        '常见的内置模块',
        'npm'
      ]
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
      children: [
        '',
        'jsx事件绑定',
        'createElement',
        '组件化开发',
        '插件使用',
        'redux',
        'React项目基本配置'
      ]
    }
  ],
  '/Express/': [
    {
      title: 'Express',
      collapsable: false,
      children: ['']
    }
  ],
  '/Koa/': [
    {
      title: 'Koa',
      collapsable: false,
      children: ['']
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
      children: [
        '',
        'Git',
        'SSH克隆失败',
        '安装依赖失败',
        'ts-node运行失败',
        'HTTP',
        'cookie',
        'CDN',
        'npm-command-not-found',
        'URL与URI',
        'SEO',
        '浏览器的渲染流程'
      ]
    }
  ]
}
