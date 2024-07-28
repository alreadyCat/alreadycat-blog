<template>
  <div class="layout-container">
    <Nav />
    <div class="main">
      <RouterView />
    </div>
    <Footer />
  </div>
  <Music />
  <Tools />
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store";
const store = useGlobalStore();



function calcScrollPercent() {
  const target = document.documentElement || document.body
  const scrollTop = target.scrollTop
  const scrollheight = target.scrollHeight
  const clientHeight = target.clientHeight
  store.scrollPercent = (scrollTop / (scrollheight - clientHeight) * 100) || 0
  store.currentScrollTop = scrollTop

}
onMounted(() => {
  document.addEventListener('scroll', calcScrollPercent)
})
onUnmounted(() => {
  document.removeEventListener('scroll', calcScrollPercent)
})
</script>

<style scoped lang="scss">
.layout-container {
  .main {
    // height: 100vh; */
    min-height: calc(100vh - 60px - 132px);
    width: 100%;
    // overflow-y: auto;

    // &::-webkit-scrollbar {
    //   display: none;
    // }
  }
}
</style>
