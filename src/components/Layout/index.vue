<template>
  <div class="layout-container">
    <Top />
    <div class="main-content">
      <RouterView />
    </div>
  </div>
  <Music />
  <Tools />
</template>

<script setup lang="ts">
import Top from "./components/Top/index.vue";
import Category from "@/components/Category/index.vue";
import { useRequest } from "vue-hooks-plus";
import { getCategoryList } from "@/service";
import useProvide from "@/hooks/useProvide";
const { data } = useRequest(() => getCategoryList());

const { data: categoryData } = useRequest(getCategoryList);

const { provideData } = useProvide("title");
provideData("");
</script>

<style scoped lang="scss">
.layout-container {
  z-index: 0;
  background-image: url("@/assets/images/bg.png");
  background-size: cover;


  .main-content {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 45px;
  }
}
</style>
