#  配置教程

## 美化主页面

![image-20240223143819103](https://gitee.com/zhaoxuyan1/picture-Bed/raw/master/typora-picture/image-20240223143819103.png)

* 在**index.md**文件的对应关系

  ```js
  name<==>2
  text<==>3
  tagline<==>4
  actions<==>5
  features<==>6
  ```

示例：

![image-20240223144444857](https://gitee.com/zhaoxuyan1/picture-Bed/raw/master/typora-picture/image-20240223144444857.png)

* 在**config.mjs**中对应关系

  ```js
  title<==>1
  nav<==>7
  socialLinks<==>8
  footer<==>9
  search<==>10
  ```

* 背景图设置

  找到的图片放在docs目录下的public目录，在**index.md**文件中添加

  ```js
  image:
    src: /background.svg
    alt: 背景图
  ```

* logo 配置

  在**config.mjs**文件的**themeConfig**添加

  ```js
  logo: "logo.svg", // 配置logo位置，public目录
  ```

  ##  美化文章页

  ![image-20240223153947752](https://gitee.com/zhaoxuyan1/picture-Bed/raw/master/typora-picture/image-20240223153947752.png)

* 左边是**sidebar**，可以是数组，也可以是对象；右边是文章目录（目前使用脚本生成sidebar）

  ```js
  sidebar: [
    {
      text: '算力平台',
      items: [
        { text: '算力平台1', link: '/platform/test' },
        { text: '算力平台2', link: '/platform/test1' }
      ]
    },
    {
      text: '并网计算应用开发',
      items: [
        { text: '并网计算应用开发1', link: '/gridApplication/test' },
        { text: '并网计算应用开发2', link: '/gridApplication/test1' }
      ]
    },
    {
      text: '轻应用开发',
      items: [
        { text: '轻应用开发1', link: '/lightApplication/test' },
        { text: '轻应用开发2', link: '/lightApplication/test1' }
      ]
    },
    {
      text: '硬件开发',
      items: [
        { text: '硬件开发1', link: '/hardwareDev/test' },
        { text: '硬件开发2', link: '/hardwareDev/test1' }
      ]
    },
    {
      text: '政策法律',
      items: [
        { text: '政策法律1', link: '/policy/test' },
        { text: '政策法律2', link: '/policy/test1' }
      ]
    }
  ],
  ```

* 右侧文章导航栏默认索引的是md文件的一二级标题，通过配置**outline**定义展示的标题级别，如下定义2-6级

  ```js
  themeConfig: {
    outlineTitle: "本文导读",
    outline: [2,6], //定义展示的标题级别
  ```

* 脚本生成侧边栏代码

  ```js
  import path from "node:path";
  import fs from "node:fs";
  
  // 文件根目录
  const DIR_PATH = path.resolve();
  // 白名单,过滤不是文章的文件和文件夹
  const WHITE_LIST = [
      "index.md",
      ".vitepress",
      "node_modules",
      ".idea",
      "assets",
  ];
  
  // 判断是否是文件夹
  const isDirectory = (path) => fs.lstatSync(path).isDirectory();
  
  // 取差值
  const intersections = (arr1, arr2) =>
      Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));
  
  // 把方法导出直接使用
  function getList(params, path1, pathname) {
      // 存放结果
      const res = [];
      // 开始遍历params
      for (let file in params) {
          // 拼接目录
          const dir = path.join(path1, params[file]);
          // 判断是否是文件夹
          const isDir = isDirectory(dir);
          if (isDir) {
              // 如果是文件夹,读取之后作为下一次递归参数
              const files = fs.readdirSync(dir);
              res.push({
                  text: params[file],
                  collapsible: true,
                  items: getList(files, dir, `${pathname}/${params[file]}`),
              });
          } else {
              // 获取名字
              const name = path.basename(params[file]);
              // 排除非 md 文件
              const suffix = path.extname(params[file]);
              if (suffix !== ".md") {
                  continue;
              }
              res.push({
                  text: name,
                  link: `${pathname}/${name}`,
              });
          }
      }
      // 对name做一下处理，把后缀删除
      res.map((item) => {
          item.text = item.text.replace(/\.md$/, "");
      });
      return res;
  }
  
  export const set_sidebar = (pathname) => {
      // 获取pathname的路径
      const dirPath = path.join(DIR_PATH + "\\docs", pathname);
      // 读取pathname下的所有文件或者文件夹
      const files = fs.readdirSync(dirPath);
      // 过滤掉
      const items = intersections(files, WHITE_LIST);
      return getList(items, dirPath, pathname);
  };
  ```

使用时，需要导入函数名

```js
import {set_sidebar} from "./utils/auto-sidebar.mjs"
```

使用示例：

```js
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
```

#  使用教程

项目结构

```
.
├─docs
│  ├─.vitepress
│  │  ├─cache
│  │  │  └─deps
│  │  ├─theme
│  │  └─utils
│  ├─gridApplication
│  ├─hardwareDev
│  ├─lightApplication
│  ├─platform
│  └─policy
└─node_modules
```

目前框架内有算力平台、并网计算应用开发、轻应用开发、硬件开发、政策法律五个文件

* 在上传上述相关主题的帮助文档时，只需传入md文件到对应的文件夹，框架会自动生成侧边栏（sidebar）

* 在上传非上述相关主题的帮助文档时，需在docs目录下新建文件夹BBBBB，然后调用set_sidebar脚本，即在**config.mjs**文件的siderbar内添加如下代码

  ```
  {
      text: 'AAAAA',
      items: set_sidebar("/BBBBB"),
  },
  ```

其中，AAAAA为要添加的主题名，BBBBB为新建文件夹名称

* 运行框架命令

  ```
  npx vitepress dev docs
  ```

  