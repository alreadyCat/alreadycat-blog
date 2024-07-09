<template>
  <div class="home-container">

    <div class="left">
      <ArticleCover class="post-item" v-for="(item, index) in articleList" :key="index" v-bind="item" content=""
        :coverPosition="index % 2 ? 'right' : 'left'" />
    </div>
    <div class="right">
      <Introduce class="function-card" />
      <Weather class="function-card" />
      <TodoList class="function-card" />
    </div>




    <!-- <Carousel></Carousel>
    <List v-for="(item, index) in data?.filter((i) => i.list.length)" :key="index" v-bind="item" />
     -->

    <!-- <Card style="width:300px;height:300px;">
      <Search></Search>
    </Card> -->
  </div>
</template>

<script setup lang="ts">
import { getArticleListGroupByTag, getArticleList } from "@/service";
import Carousel from "./components/Carousel/index.vue";

const { data } = useRequest(getArticleListGroupByTag);

const { data: articleList } = useRequest(getArticleList);


</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  .left {
    flex: 1;
  }

  .right {
    width: 20%;
  }

  .post-item:not(:last-child),
  .function-card:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
