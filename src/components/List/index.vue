<template>
  <Card>
    <template #default>
      <div class="card-list-content">
        <div class="card-list-title">{{ props.tagName || "Article" }}</div>
        <Swiper
          :modules="modules"
          :direction="'vertical'"
          :slides-per-view="3"
          :space-between="15"
          :grabCursor="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: true,
            reverseDirection: true,
          }"
        >
          <SwiperSlide v-for="(item, index) in props.list" :key="index">
            <ListItem v-bind="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative, Autoplay } from "swiper/modules";
import ListItem from "./components/ListItem/index.vue";
import "swiper/css/effect-creative";
import "swiper/css";
import { ArticleList } from "./typings";

const modules = [EffectCreative, Autoplay];

const props = defineProps<ArticleList.ArticleListItem>();
</script>

<style scoped lang="scss">
.swiper {
  height: 234px;
  width: 100%;

  .swiper-slide {
    width: 100%;
    height: 100%;
  }
}

.card-list-content {
  width: 410px;
  height: 300px;
  box-sizing: border-box;
  padding: 18px 16px 18px 20px;
  overflow: hidden;

  .card-list-title {
    font-family: "Roboto Bold";
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 5px;
  }
}
</style>
