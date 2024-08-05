<template>
  <div class="swiper-item-container">
    <div class="swiper-item-left">
      <img v-if="props.coverImage" :src="props.coverImage" alt="" />
      <img v-else src="@/assets/svg/Group_24.svg" alt="" />
    </div>
    <div class="swiper-item-right">
      <div class="swiper-item-cate">{{ props.categoryName }}</div>
      <div class="swiper-item-title">{{ props.title }}</div>
      <div class="swiper-item-date">{{ props.date }}</div>
      <div class="swiper-item-see-more" @click="gotoDetail">See More</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Api } from "@/service/typings";
import { useRouter } from "vue-router";
const props = withDefaults(defineProps<Partial<Api.CarouselCategory>>(), {});

const router = useRouter();
const gotoDetail = () => {
  router.push({
    path: "/article",
    query: {
      id: props.id,
    },
  });
};
</script>

<style scoped lang="scss">
.swiper-item-container {
  display: flex;
  justify-content: space-between;

  .swiper-item-left {
    width: 305px;
    height: 256px;
    overflow: hidden;
    border-radius: 20px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .swiper-item-right {
    flex: 1;
    padding: 12px 23px 8px 23px;

    .swiper-item-cate {
      font-family: "PingFang";
      font-size: 18px;
      line-height: 25px;
      color: #727272;
    }

    .swiper-item-title {
      font-family: "PingFang";
      font-size: 24px;
      line-height: 34px;
      color: #000000;
      margin-top: 11px;

      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-word;
    }

    .swiper-item-date {
      font-family: "PingFang";
      font-size: 12px;
      line-height: 17px;
      color: #848484;
      margin-top: 35px;
    }

    .swiper-item-see-more {
      width: 71px;
      height: 18px;
      border-radius: 25px;
      opacity: 1;
      background: #d074d8;
      margin-left: auto;
      margin-bottom: 0;
      cursor: pointer;

      font-family: "PingFang";
      font-size: 10px;
      font-weight: bold;
      line-height: 18px;
      text-align: center;
    }
  }
}
</style>
