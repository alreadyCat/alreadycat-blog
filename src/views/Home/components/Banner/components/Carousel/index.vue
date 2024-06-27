<template>
  <div class="swiper-container">
    <Swiper :navigation="{
      nextEl: '#swiper-next-button',
      prevEl: '#swiper-prev-button'
    }" :grabCursor="true" :effect="'creative'" :creativeEffect="{
      prev: {
        translate: ['-120%', 0, -450],
      },
      next: {
        translate: ['120%', 0, -450],
      },
    }" :modules="modules" loop :autoplay="{
      delay: 3500,
      disableOnInteraction: true,
      reverseDirection: true
    }">
      <SwiperSlide v-for="(item, index) in data" :key="index">
        <SwiperItem v-bind="item" />
      </SwiperSlide>
    </Swiper>

    <div id="swiper-prev-button">
      <SvgIcon name="drop" width="24" height="24" color="#fff"></SvgIcon>
    </div>
    <div id="swiper-next-button">
      <SvgIcon name="drop" width="24" height="24" color="#fff"></SvgIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { EffectCreative, Navigation, Autoplay, } from 'swiper/modules';
import SwiperItem from './components/SwiperItem/index.vue'
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation'
import { useRequest } from 'vue-hooks-plus';
import { getArticleList, } from '@/service';

const modules = [EffectCreative, Navigation, Autoplay];

const { data } = useRequest(() => getArticleList())

</script>

<style scoped lang="scss">
.swiper-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 19px 25px 25px 25px;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  #swiper-prev-button {
    --tx: -130%;
    --angle: 90deg;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-130%, -50%) rotate(90deg);
    cursor: pointer;
    animation: breathingEffect 2s ease-in-out infinite;
  }

  #swiper-next-button {
    --tx: 130%;
    --angle: -90deg;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(130%, -50%) rotate(-90deg);
    cursor: pointer;
    animation: breathingEffect 2s ease-in-out infinite;
  }

  @keyframes breathingEffect {

    0%,
    100% {
      /* 在动画开始和结束时，按钮位于原始位置 */
      transform: translate(var(--tx), -50%) rotate(var(--angle)) scale(1);
    }

    50% {
      /* 动画中间，按钮向下移动一定距离，模拟"呼出" */
      transform: translate(var(--tx), -50%) rotate(var(--angle)) scale(0.7);
    }
  }

}
</style>