import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "帮助文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '自动生成', link: '/platform/test' }
    ],

    sidebar: [
      {
        text: '算力平台',
        items: [
          { text: '算力平台1', link: '/platform/test' },
          { text: '算力平台2', link: '/api-examples' }
        ]
      },
      {
        text: '并网计算应用开发',
        items: [
          { text: '并网计算应用开发1', link: '/markdown-examples' },
          { text: '并网计算应用开发2', link: '/api-examples' }
        ]
      },
      {
        text: '轻应用开发',
        items: [
          { text: '轻应用开发1', link: '/markdown-examples' },
          { text: '轻应用开发2', link: '/api-examples' }
        ]
      },
      {
        text: '硬件开发',
        items: [
          { text: '硬件开发1', link: '/markdown-examples' },
          { text: '硬件开发2', link: '/api-examples' }
        ]
      },
      {
        text: '政策法律',
        items: [
          { text: '政策法律1', link: '/markdown-examples' },
          { text: '政策法律2', link: '/api-examples' }
        ]
      }
    ],
    // sidebar: {
    //   "/platform": set_sidebar("/platform"),
    //   "/gridApplication": set_sidebar("gridApplication"),
    //   "/hardwareDev": set_sidebar("hardwareDev"),
    //   "/lightApplication": set_sidebar("lightApplication"),
    //   "/policy": set_sidebar("policy"),
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright: "Copyright@ 2024 Inspur",
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

  }
})
