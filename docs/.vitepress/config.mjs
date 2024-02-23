import { defineConfig } from 'vitepress'
// import {set_sidebar} from "./utils/auto-sidebar";
import {set_sidebar} from "./utils/auto-sidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo",
  title: "帮助文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "本文导读",
    outline: [2,6], //定义展示的标题级别
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '自动生成', link: '/platform/算力平台1' }
    ],

    sidebar: [
      {
        text: '算力平台',
        items: set_sidebar("/platform"),
      },
      {
        text: '并网计算应用开发',
        items: set_sidebar("/gridApplication"),
      },
      {
        text: '轻应用开发',
        items: set_sidebar("/lightApplication"),
      },
      {
        text: '硬件开发',
        items: set_sidebar("/hardwareDev"),
      },
      {
        text: '政策法律',
        items: set_sidebar("/policy"),
      }
    ],
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
