import { createRouter, createWebHistory } from "vue-router";
import Home from "../layout/home.vue";

const routes = [
  {
    path: "",
    // name: "Home",
    component: Home,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/layout/index.vue"),
      },
    ],
  },
  {
    path: "/redirect",
    name: "Redirect",
    component: Home,
    children: [
      {
        path: "/letsgo",
        name: "Letsgo",
        component: () => import("@/view/letsgo/index.vue"),
      },
      {
        path: "/content:id",
        name: "Content",
        component: () => import("@/view/letsgo/content.vue"),
      },
      {
        path: "/lovemap",
        name: "LoveMap",
        component: () => import("@/view/letsgo/lovemap.vue"),
      },
      {
        path: "/delicious",
        name: "Delicious",
        component: () => import("@/view/delicious/index.vue"),
      },
      {
        path: "/foodmap",
        name: "FoodMap",
        component: () => import("@/view/delicious/foodMap.vue"),
      },
      {
        path: "/wrong",
        name: "Wrong",
        component: () => import("@/view/iwasWrong/index.vue"),
      },
      {
        path: "/wrongmap",
        name: "WrongMap",
        component: () => import("@/view/iwasWrong/wrongMap.vue"),
      },
      {
        path: "/song",
        name: "Song",
        component: () => import("@/view/loveSong/index.vue"),
      },
      {
        path: "/songmap",
        name: "SongMap",
        component: () => import("@/view/loveSong/songMap.vue"),
      },
      {
        path: "/draw",
        name: "Draw",
        component: () => import("@/view/interestingDraw/index.vue"),
      },
      {
        path: "/drawmap",
        name: "DrawMap",
        component: () => import("@/view/interestingDraw/drawMap.vue"),
      },
      {
        path: "/mine",
        name: "Mine",
        component: () => import("@/view/mine/index.vue"),
      },
      {
        path: "/girl",
        name: "Girl",
        component: () => import("@/view/girl/index.vue"),
      },
    ],
  },
  // 添加其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
