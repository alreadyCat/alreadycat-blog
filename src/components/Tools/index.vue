<template>
    <div class="side-tools-container animate__animated animate__fadeInRight">
        <div class="switch-theme" @click="handleTheme" title="切换浅色或深色主题">
            <span class="iconfont icon-heiyemoshi"></span>
        </div>
        <div class="switch-column" @click="handleColumn" title="切换布局为两栏或一栏">
            <span class="iconfont icon-shushuanglan"></span>
        </div>
        <div class="back-to-top" @click="handleTop" title="回到顶部">
            <span class="iconfont icon-icon_huidaodingbu"></span>
        </div>
        <div class="scroll-percent">
            <span class="text">
                {{ store.scrollPercent.toFixed(0) }}
            </span>
        </div>

        <div v-if="route.path !== '/'" class="back-to-home" @click="handleHome" title="回到首页">
            <span class="iconfont icon-huidaoshouye1"></span>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store';

const route = useRoute()
const router = useRouter()
const store = useGlobalStore()
function handleColumn() {
    const store = useGlobalStore()
    store.toggleColumnLayout()
}
function handleTheme() {
    store.toggleDark()
}
function handleTop() {
    store.scrollToTop()
}
function handleHome() {
    router.push("/")
}


</script>

<style scoped lang="scss">
.side-tools-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    position: fixed;
    right: 0px;
    bottom: 100px;

    &>div {
        border-radius: 5px;
        width: 35px;
        height: 35px;
        background-color: rgba(244, 255, 255, .4);
        text-align: center;
        // box-shadow: 0 2px 0 rgba(42, 46, 54, 0.02);
        cursor: pointer;

        &>span {
            font-size: 18px;
            color: rgba(42, 46, 54, 0.88);
            line-height: 35px;
        }
    }

    .switch-theme {}

    .switch-column {}

    .back-to-top {}

    .back-to-home {}

    .scroll-percent {
        cursor: inherit;

        .text {
            font-size: 16px;
            font-weight: 600;
        }
    }
}
</style>