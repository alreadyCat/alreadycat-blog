<template>
  <Card class="catalog-container">
    <div class="catalog-content">
      <div class="card-title">
        <span class="iconfont icon-mulu-lujing"></span>
        文章目录
      </div>
      <MdCatalog
        :scrollElement="scrollElement"
        :editorId="editorId"
        :offsetTop="offsetTop"
        :scrollElementOffsetTop="offsetTop"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { MdPreview, MdCatalog } from "md-editor-v3";

defineProps<{
  editorId: string;
}>();

const scrollElement = document.documentElement;

const offsetTop = computed(() => {
  return (
    (document.querySelector(".top-hi")?.getBoundingClientRect().height || 109) +
    20
  );
});
</script>

<style lang="scss" scoped>
.catalog-container {
  padding: 16px;
  .catalog-content {
    .card-title {
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  :deep(.md-editor-catalog > .md-editor-catalog-link) {
    padding: 5px 0px;
  }
}
</style>
