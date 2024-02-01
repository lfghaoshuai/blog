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
  "/demo/": [
    
      {
        text: "如何使用",
        icon: "laptop-code",
        prefix: "/demo",
        children: ["disable","encrypt","layout","markdown","page"],
        collapsible: true,
      },
      
    ],
    "/posts/":[
  
      {
        text: "文章",
        icon: "book",
        children: "structure",
      },
      
      {
        text: "幻灯片",
        icon: "person-chalkboard",
        link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
      },
    ]
});

