import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  
  title: "lxy",
  description:'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "Xiaohan Zou" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Xiaohan Zou" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    navbarTitle : "cd ~",
    docsDir: "blog",
    docsBranch: "master",
    searchText:'搜索',
    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    // personal information
    personalInfo: {
      name: "lxy",
      avatar: "/img/qq.jpeg",
      description: "lxy の blog",
      sns: {
        github: "lxycxy",
        email: "lxy2914344878@163.com",
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],
    // other pages
    pages: {
      tags: {
        title:"标签",
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title:"链接",
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      },

    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://blog.zxh.io",
        copyright: "Renovamen 2018-2022"
      }
    },

    navbar: [
      {
        text: "花园",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "关于",
        link: "https://lxycxy.github.io",
        icon: "fa-paw"
      },
    ],

    footer: `
      &copy; <a href="https://github.com/lxycxy" target="_blank">lxy</a> From 
      <a href="https://www.cqjtu.edu.cn/" target="_blank"> cqjtu </a>
      2023
      <br>
      Powered by <a href="https://github.com/" target="_blank">Github</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false,
      vPre: {
        inline:false
      }
    }
  }
});