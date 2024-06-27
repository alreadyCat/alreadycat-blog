<template>
  <div class="banner-container">
    <Card style="width: 600px;height: 300px">
      <Carousel #default></Carousel>
    </Card>
    <Card style="width: 410px;height: 300px">
      <template #default>
        <div class="card-list-content">
          <div class="card-list-title">Article</div>
          <List />
        </div>
      </template>
    </Card>
    <TodoList />
    <Weather />
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import Carousel from "./components/Carousel/index.vue";
</script>

<style scoped lang="scss">
.banner-container {
  display: flex;
  gap: 42px;
  flex-wrap: wrap;

  .card-list-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 18px 16px 18px 20px;
    overflow: hidden;

    .card-list-title {
      font-family: 'Roboto Bold', sans-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 5px;
    }
  }
}
</style>