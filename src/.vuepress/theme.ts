import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";
import { commentPlugin } from "vuepress-plugin-comment2";

export default hopeTheme({
  hostname: "https://blog.fengwin.top",

  author: {
    name: "feng",
    url: "#",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://fe-sz30.oss-cn-hangzhou.aliyuncs.com/pressImg/32123toux.jpg",

  repo: "lfghaoshuai/blog",
  docsBranch:'master',
  docsDir: "src",

  // 导航栏
  navbar,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  // 侧边栏
  sidebar,

  // 页脚
  // footer: "页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个前端开发者",
    intro: "/aboutMe",
    medias: {
      BiliBili: "https://example.com",
      Email: "ljf571429122@gmail.com",
      Gitee: "https://example.com",
      GitHub: "https://github.com/lfghaoshuai",
      Gitlab: "http://gitlab.code-nav.cn/Coldeyes",
      Steam: "https://steamcommunity.com/",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/study/project/UserCenter/1.html":['1234'],//纯测试用
      "/study/project/UserCenter/2.html":['1234'],
      "/study/project/UserCenter/3.html":['1234'],
      "/study/project/UserCenter/4.html":['1234']
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    //评论功能
    comment: {
      provider: "Giscus", 
      repo: "lfghaoshuai/blogtalk", 
      repoId: "R_kgDOLZpE5w",  
      category: "Announcements",
      categoryId: "DIC_kwDOLZpE584CdnEJ"
    },
    // searchPro: true,

    //代码模块复制
    copyCode: {},
    
    autoCatalog:{
      index:true
    },
    
    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },
    
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      // 启用 GFM 警告
      alert: true,

      
      
        
     
      
      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
