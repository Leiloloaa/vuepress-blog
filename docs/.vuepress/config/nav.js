// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '网络基础',
      //   items: [{ text: '网络基础', link: '/pages/b92089/' }]
      // },
      // {
      //   text: '前端基础',
      //   items: [
      //     { text: 'HTML', link: '/pages/8143cc480faf9a11/' },
      //     { text: 'CSS', link: '/pages/c8f128/' }
      //   ]
      // },
      {
        text: '学习笔记',
        items: [
          { text: '《Base》笔记', link: '/note/base/' },
          { text: '《JavaScript》笔记', link: '/note/javascript/' },
          { text: '《ES6》笔记', link: '/note/es6/' },
          { text: '《TypeScript》笔记', link: '/note/typescript/' },
          { text: '《Vue2.x》笔记', link: '/note/vue2/' },
          { text: '《Vue3.x》笔记', link: '/note/vue3/' },
          { text: '《React》笔记', link: '/note/react/' },
          { text: '《Nodejs》笔记', link: '/note/node/' },
          { text: '《Source》笔记', link: '/note/source/' },
          { text: '《JueJin》文章', link: '/note/juejin/' }
        ]
      }
    ]
  },
  {
    text: '面试',
    link: '/face_interview/',
    items: [
      { text: 'All_Subject', link: '/pages/851d51/' }
      // { text: 'JavaScript', link: '/pages/fe685a/' },
      // { text: 'Vue', link: '/pages/ef8039/' },
      // { text: 'React', link: '/pages/f12baf/' },
      // { text: 'Webpack&Vite', link: '/pages/0dfbb8/' },
      // { text: 'Arithmetic', link: '/pages/4413f6/' },
      // { text: 'WriteCode', link: '/pages/3b7eb4/' },
      // { text: 'SourceCode', link: '/pages/498ec3/' }
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' }
    ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '个人总结', link: '/pages/98ad67/' },
      { text: '随笔录', link: '/pages/2d615df9a36a98ed/' },
      { text: '收藏夹', link: '/pages/f2a556/' },
      { text: '友情链接', link: '/friends/' }
    ]
  }
];
