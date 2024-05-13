import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "pen-to-square",
    prefix: "/note/",
    children: [
      {
        text: "学习笔记",
        prefix: "javascript/",
        children:[
          {text: "《JavaScript教程》笔记",
          icon: "pen-to-square",
          link: "1",}
        ]
        
      },
     
    ],
  },
  {
    text:"学习",
    prefix:"/study/",
    children:[
      {
        text: "项目",
        icon: "pen-to-square",
        link: "project",
      },
      {
        text: "软考",
        icon: "pen-to-square",
        link: "Software",
      },
    ]
  },
  {
    text:"技术",
    prefix:"/tech/",
    children:[
      {
        text: "技术文档",
        icon: "pen-to-square",
        link: "1",
      },
      
    ]
  },
  {
    text:'关于我',
    link:'/aboutMe/'
  },
  {
    text:'索引',
    children: [
      {
        text:'归档',
        link:'/timeline/'
      },
      {
        text:'标签',
        link:'/tag/'
      },
      {
        text:'分类',
        link:'/category/'
      },
    ]
  }
]);
