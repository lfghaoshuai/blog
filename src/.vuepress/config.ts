import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Feng's 小屋",
  description: "博客",

  theme

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
