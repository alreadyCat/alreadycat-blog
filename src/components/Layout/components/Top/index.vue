<template>
  <div class="top-container">
    <div id="top-wrap">
      <div class="top-hi">
        <div class="top-hi-text">
          Hi everyone, Welcome to <b>AlreadyCat</b> Blog!
        </div>
        <Search />
      </div>
      <div class="top-title">{{ title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useProvide from "@/hooks/useProvide";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { injectData } = useProvide("title");
const title = injectData();

onMounted(() => {
  registryScrollEvent();
});

function registryScrollEvent() {
  window.addEventListener("scroll", () => {
    if (route.path != "/article") return;
    const parent = document.querySelector(".top-container");
    const el = document.querySelector("#top-wrap");
    const scrollThreshold = el?.clientHeight || 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= scrollThreshold) {
      parent?.classList.remove("title-back");
      parent?.classList.add("title-show");
    } else {
      if (parent?.classList.contains("title-show")) {
        parent?.classList.remove("title-show");
        parent?.classList.add("title-back");
      }
    }
  });
}

watch(
  () => route.path,
  () => {
    if (route.path != "/article") {
      const parent = document.querySelector(".top-container");
      parent?.classList.remove("title-show");
      parent?.classList.add("title-back");
    }
  }
);
</script>

<style scoped lang="scss">
.top-container {
  position: sticky;
  top: 0;
  height: 109px;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.53);
  box-shadow: 4px 4px 33px 0 rgba(26, 50, 96, 0.25);
  backdrop-filter: blur(5px);
  z-index: 10;
  transition: all 0.7s;

  .top-hi {
    box-sizing: border-box;
    height: 100%;
    padding: 32px 43px 27px 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .top-hi-text {
      padding: 11px 14px 8px 18px;
      font-family: "Roboto", sans-serif;
      font-size: 24px;
      line-height: 34px;
      border-radius: 25px;
      opacity: 1;
      background: rgba(255, 255, 255, 0.38);
    }

  }

  .top-title {
    height: 100%;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #top-wrap {
    height: 100%;
  }

  &.title-show {
    //height: 74px;   优化：减少重绘重排
    transform: translateY(-34px);

    .top-title {
      transform: translateY(17px);
    }

    #top-wrap {
      animation: title-show 0.7s forwards;
    }
  }

  &.title-back {
    //height: 109px;
    transform: translateY(0px);

    .top-title {
      transform: translateY(17px);
    }

    #top-wrap {
      animation: title-back 0.7s forwards;
    }
  }

  @keyframes title-show {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  @keyframes title-back {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
}
</style>
