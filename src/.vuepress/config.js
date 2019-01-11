module.exports = {
  title: '学习笔记',  // 设置网站标题
  base:'/sweetLearnNote/',
  repo:
 'https://github.com/sweetyangtian/sweetLearnNote', // 添加 github 链接
 dest:'./docs',
  themeConfig: {
    // 添加导航栏  { text: '框架', link: '/' }
    nav: [
      { text: '学习笔记', link: '/learnNote/' },
      { text: 'JavaScript', link: '/jsNote/' },
      { text: 'Vue', link: '/vueNote/' },
      { text: 'others', link: '/others/' }

    ],
    // 每个导航栏对应不同侧边栏
    sidebar:{
      '/others/':[
        ['','others'],
        ['/others/one','导航']
      ],
      '/jsNote/':[
        ['',' JavaScript'],
      ],
      '/vueNote/':[
        ['','主要网站'],
        ['/vueNote/laravel','Laravel'],
        ['/vueNote/ssr','SSR'],
        ['/vueNote/SEO','打包优化'],
        ['/vueNote/Access','用户权限控制'],
        ['/vueNote/cli','vue-cli']
      ],
      '/learnNote/':[
        ['','资源网站'],
        ['/learnNote/css','CSS'],
        ['/learnNote/sass','SASS'],
        ['/learnNote/flex','Flex'],
        ['/learnNote/phone','Phone'],
        ['/learnNote/wechart','Wechart']
      ]
    }

  }
}

