<template>
  <div class="home-container">
    <ArticleCard></ArticleCard>
    <ArticleCard></ArticleCard>
    <ArticleCard></ArticleCard>
    <ArticleCard></ArticleCard>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard/index.vue'
</script>

<style scoped lang="scss">

.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  $gap: calc((1440px - (135px * 2) - (370px * 3)) / 2);
  row-gap: $gap;
}
</style>