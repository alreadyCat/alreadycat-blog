<template>
  <div class="task-list-contaienr">
    <div class="title">任务清单</div>

    <Swiper class="task-list" :modules="modules" :direction="'vertical'" :slides-per-view="6" :grabCursor="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }">
      <SwiperSlide v-for="(item, index) in sortData" :key="index" :title="item.taskName">
        <div class="checkbox-wrapper-15">
          <input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none" :checked="item.complete" />
          <label class="cbx" for="cbx-15">
            <span>
              <svg width="12px" height="9px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            <span class="text">{{ item.taskName }}</span>
          </label>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css/effect-creative";
import "swiper/css";
import { useRequest } from "vue-hooks-plus";
import "./todolist.scss";
import { getTodoList } from "@/service";

const modules = [EffectCreative, Autoplay];
const { data } = useRequest(getTodoList);

const sortData = computed(() =>
  data.value?.sort((a, b) => Number(b.complete) - Number(a.complete))
);
</script>

<style scoped lang="scss">
.task-list-contaienr {
  pointer-events: none;
  user-select: none;
  padding: 19px 22px;
  height: 300px;
  box-sizing: border-box;
  overflow: hidden;

  .title {
    font-family: "PingFang";
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0px;
    color: #000000;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .task-list {
    height: 230px;
    overflow: hidden;

    .task-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-top: 12px;

      .cbx {
        width: 100%;
        overflow: hidden;

        span {
          font-family: "Roboto Regular";
          font-weight: 500;
        }
      }
    }
  }
}
</style>
