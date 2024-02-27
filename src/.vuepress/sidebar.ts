import { sidebar } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

// export default defineUserConfig({
//   theme: hopeTheme({
//     sidebar: {
//       "/demo/":[
//         "",
//         "disable"
//       ]
//     }}),
// });

export default sidebar({
  // "/": [
    
  //     {
  //       text: "如何使用",
  //       icon: "laptop-code",
  //       prefix: "demo/",
  //       children: ["disable/","encrypt/","layout/","markdown/","page/"],
  //       collapsible: true,
  //     },
      
  //   ],
    "/tech/":[
      {
        text:"技术文档",
        prefix: "/tech",
        children:["1.md","2.md","3.md"],
        collapsible: true,
      },
    ],
    "/study/":[
      {
        text:"项目汇总",
        prefix:"/study/project",
        children:[
          {
            text:"用户中心项目",
            prefix:"/study/project/UserCenter",
            children:["1.md","2.md"],
            collapsible: true,
          }
        ],
        
      },
    ],
});
