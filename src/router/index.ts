import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/components/Layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
      },
      {
        path: "/aboutme",
        component: () => import("@/views/AboutMe/index.vue"),
      },
      {
        path: "/careers",
        component: () => import("@/views/Careers/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
