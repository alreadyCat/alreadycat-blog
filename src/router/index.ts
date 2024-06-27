import {RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/components/Layout/index.vue"),
        children: [
            {
                path: "/",
                component: () => import("@/views/Home/index.vue"),
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/article",
                component: () => import("@/views/ArticleDetail/index.vue")
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
