import { defineConfig } from 'vitepress'
import {set_sidebar} from "./utils/auto-sidebar.mjs"
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";

var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};

export default defineConfig({
  search: false,
  lang: "zh-CN",
  base: "/docs-demo",
  title: "帮助文档",
  description: "A VitePress Site",
  lastUpdated: true, //显示文章最新更新时间
  head: [
      ['meta', {name: 'referrer', content: 'no-referrer'}]
  ],
  themeConfig: {
    outlineTitle: "本文导读",
    outline: [1,6], //定义展示的标题级别
    nav: [
      { text: 'Home', link: '/' },
      { text: '繁星智算', link: '/platform/算力平台1.md' },
      { text: '并网计算业务', link: '/'},
      { text: '开发者平台', link: '/'},
      { text: '运营运维平台', link: '/'},
      // { text: '自动生成',
      //   items: [
      //     {text: 'test1',
      //       items:[
      //         {text:'text11',
      //         items:[
      //           {text:'text111', link: '/platform/算力平台1.md'}
      //         ]},
      //         {text:'text12', link: '/'}
      //       ]
      //     },
      //     {text: 'test2',
      //       items:[
      //         {text:'text21', link: '/'},
      //         {text:'text22', link: '/'}
      //       ]},
      //   ]
      // }
    ],

    sidebar: [
      {
        text: '繁星智算',
        collapsed: true,
        items: set_sidebar("/繁星智算"),
      },
      {
        text: '开发者平台',
        collapsed: true,
        items: set_sidebar("/开发者平台"),
      },
      {
        text: '并网计算业务',
        collapsed: true,
        items: set_sidebar("/并网计算业务"),
      },
      {
        text: '运营运维平台',
        collapsed: true,
        items: set_sidebar("/运营运维平台"),
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright: "Copyright@ 2024 Inspur",
    },


    // 设置搜索框的样式
    // search: {
    //   provider: "local",
    //   options: {
    //     locales: {
    //       zh: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换'
    //             }
    //           }
    //         }
    //       }
    //     },
    //   },
    // },
    // search:{
    //   provider: 'algolia',
    //   options: {
    //     appId: 'W1LKPF0Z03',
    //     apiKey: 'fc0c70fd046196c714b49e7793b4b1df',
    //     indexName: 'galgaxy3io',
    //     placeholder: '请输入关键词',
    //     buttonText: '搜索',
    //   }
    // },
    algolia:{
      appId: "WSR1YMJZCS",
      apiKey: "f99424b3f822f6c6767254e63a95d6f7",
      indexName: "docs-demo",
    }
    // search:{
    //   provider: 'algolia',
    //   options: {
    //     appId: 'W1LKPF0Z03',
    //     apiKey: 'fc0c70fd046196c714b49e7793b4b1df',
    //     indexName: 'galgaxy3io',
    //     placeholder: '请输入关键词',
    //     buttonText: '搜索',
    //   }
    // },

  },
  // vite:{
  //   plugins:[pagefindPlugin({
  //     btnPlaceholder: '搜索',
  //     placeholder: '搜索文档',
  //     emptyText: '空空如也',
  //     heading: '共: {{searchResult}} 条结果',
  //     customSearchQuery(input){
  //       // 将搜索的每个中文单字两侧加上空格
  //       return input.replace(/[\u4e00-\u9fa5]/g, ' $& ')
  //           .replace(/\s+/g,' ')
  //           .trim();
  //     },
  //     excludeSelector:['img','a.header-anchor'],
  //     forceLanguage:'zh-cn',
  //     resultOptimization: false,
  //     filter(searchItem, idx, originArray) {
  //       console.log(searchItem);
  //       return !searchItem.route.includes('404')
  //     }
  //   })],
  // },

  // vite:{
  //   plugins: [SearchPlugin(options)],
  // },
})
