<template>
  <Card class="catalog-container">
    <div class="catalog-content">
      <div class="card-title">
        <span class="iconfont icon-mulu-lujing"></span>
        文章目录
      </div>
      <MdCatalog :scrollElement="scrollEl" :editorId="editorId" :offsetTop="80" :scrollElementOffsetTop="60" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { MdCatalog } from "md-editor-v3";

defineProps<{
  editorId: string;
}>();


const scrollEl = document.documentElement
</script>

<style lang="scss" scoped>
.catalog-container {
  padding: 16px;

  .catalog-content {
    .card-title {
      font-family: "PingFang";
      font-weight: 600;
      margin-bottom: 8px;
    }
  }

  :deep(.md-editor-catalog > .md-editor-catalog-link) {
    padding: 5px 0px;
  }
}
</style>
