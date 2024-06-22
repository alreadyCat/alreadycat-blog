import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from 'unplugin-vue-components/vite'

import postcsspxtoviewport from 'postcss-px-to-viewport'

import * as fs from "fs";

// https://vitejs.dev/config/

// unplugin-vue-components https://juejin.cn/post/7159483798155952135#/

const px2vw = postcsspxtoviewport({
    unitToConvert: "px", // 要转化的单位
    viewportWidth: 1440, // UI设计稿的宽度
    unitPrecision: 6, // 转换后的精度，即小数点位数
    propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
    selectorBlackList: [], // 指定不转换为视窗单位的类名，
    minPixelValue: 12, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    landscape: false // 是否处理横屏情况
})
export default defineConfig({
    plugins: [
        vue(),
        Components({
            // 指定组件所在文件夹的位置，默认是src/components
            dirs: ["src/components"],
            //文件扩展,
            extensions: ['vue'],
            // 配置type文件生成位置
            // 生成`components.d.ts`的全局声明,
            // 也接受自定义文件名的路径
            // 如果安装了typescript包default: true
            dts: 'src/components.d.ts',
            // 搜索子目录
            deep: true
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    css: {
        postcss: {
            plugins: [px2vw]
        }
    }
});
