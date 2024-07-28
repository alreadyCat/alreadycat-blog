import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/components/Layout/index.vue"),
        children: [
            {
                path: "/",
                component: () => import("@/views/Home/index.vue"),
                meta: {
                    title: import.meta.env.VITE_USERNAME + " - 粉墨登场"
                }
            },
            {
                path: "/article",
                name: "article",
                component: () => import("@/views/ArticleDetail/index.vue")
            },
            {
                path: "/documentation",
                name: "documentation",
                component: () => import("@/views/Documentaion/index.vue"),
                meta: {
                    title: "文章归档"
                }
            },
            {
                path: "/tags",
                name: "tags",
                component: () => import("@/views/Tag/index.vue"),
                meta: {
                    title: "标签"
                }
            },
            {
                path: "/tag/:id",
                name: "tagInfo",
                component: () => import("@/views/TagInfo/index.vue"),
                meta: {
                    title: "标签详情"
                }
            },
            {
                path: "/category",
                name: "category",
                component: () => import("@/views/Category/index.vue"),
                meta: {
                    title: "分类"
                }
            },
            {
                path: "/photo",
                name: "photo",
                component: () => import("@/views/Photo/index.vue"),
                meta: {
                    title: "相册集"
                }
            },
            {
                path: "/time-machine",
                name: "time-machine",
                component: () => import("@/views/TimeMachine/index.vue"),
                meta: {
                    title: "时光机"
                }
            },
            {
                path: "/talktalk",
                name: "talktalk",
                component: () => import("@/views/Talk/index.vue"),
                meta: {
                    title: "说说"
                }
            },
            {
                path: "/resource-navigation",
                name: "resource-navigation",
                component: () => import("@/views/ResourceNavigation/index.vue"),
                meta: {
                    title: "说说"
                }
            },
            

        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});
export default router;
