<template>
  <swiper
      :modules="modules"
      :direction="'vertical'"
      :slides-per-view="3"
      :space-between="15"
      :grabCursor="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: true,
        reverseDirection:true
      }"
  >
    <SwiperSlide v-for="item in 10">
      <ListItem/>
    </SwiperSlide>
  </swiper>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {EffectCreative, Autoplay} from 'swiper/modules';
import ListItem from './components/ListItem/index.vue'
import 'swiper/css/effect-creative';
import 'swiper/css';

const modules = [EffectCreative, Autoplay];

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
</style>