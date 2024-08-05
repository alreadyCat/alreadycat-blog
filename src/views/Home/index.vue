<template>
  <div class="home-bg-box"
    :style="{ '--bg-size': `${100 + scrollToHomePer * 5}%`, '--bg-opacity': `${0.25 * scrollToHomePer}` }">
    <div class="inner" :style="{ '--bg-blur': scrollToHomePer * 25 + 'px' }">

    </div>
  </div>
  <div class="welcome">
    <div class="username">{{ store.userName }}</div>
    <div class="motto"></div>
    <div class="drop" @click="handleScroll">
      <SvgIcon name="arrow-down-filled" :size="35" color="#fff"></SvgIcon>
    </div>
  </div>
  <div class="home" ref="homeRef">
    <div class="left">
      <ArticleCardList :data="data?.records" />
      <Pagination :total="data?.total" @change="handleChangePage" />
    </div>
    <div class="right" v-if="store.columnLayout === 'two'">
      <Card class="content">
        <Introduce class="function-card" />
        <Weather class="function-card" />
        <Statistic class="function-card" />
        <TodoList class="function-card" />
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import Statistic from '@/components/StatisticCard/index.vue'
import useSetBackGround from "@/hooks/useBackGround";
import useSetWrapWidth from "@/hooks/useSetWrapWidth";
import useTyped from "@/hooks/useTyped";
import { getArticleList } from "@/service";
import { useGlobalStore } from "@/store";
import ArticleCardList from './components/ArticleCardList/index.vue'
const pageNo = ref(1)
const { data } = useRequest(() => getArticleList(pageNo.value), { refreshDeps: [pageNo] });

const store = useGlobalStore()
useSetWrapWidth(".home")
useTyped(store.motto, ".welcome .motto")
useSetBackGround('.home-bg-box')

function handleChangePage(p: number) {
  pageNo.value = p
}

const homeRef = ref<HTMLElement>()
const scrollToHomePer = computed(() => {
  if (!homeRef.value) return 1
  const per = store.currentScrollTop / homeRef.value.offsetTop
  return per > 1 ? 1 : per
})


function handleScroll() {
  document.documentElement.scrollTo({
    top: (document.querySelector(".welcome") as HTMLElement).clientHeight - 80,
    behavior: "smooth"
  })
}


</script>

<style scoped lang="scss">
.home-bg-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-size: var(--bg-size, 100%) var(--bg-size, 100%) !important;

  &::-webkit-scrollbar {
    display: none;
  }

  .inner {
    height: 100%;
    background: rgba(255, 255, 255, var(--bg-opacity, 0));
    backdrop-filter: blur(var(--bg-blur, 0));
  }
}

.welcome {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;

  .username {
    font-size: 56px;
  }

  .motto {
    font-size: 26px;
  }

  .username,
  .motto {
    font-family: "AliPuHui";
    font-weight: 600;
    color: #fff;
    left: 12%;

  }

  .drop {
    position: absolute;
    bottom: 20px;
    animation: breathingEffect 1.5s ease-in-out infinite;
    cursor: pointer;
  }
}

.home {
  width: var(--wrap-width);
  padding: 45px 0;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  .left {
    flex: 1;
    position: relative;

    :deep(.pagination-container) {
      width: 100%;
      display: flex;
      align-items: center;

    }
  }

  .right {
    display: block;
    width: 20%;

    @media screen and (max-width: 1200px) {
      display: none;
    }

    .content {
      :deep(.card-container) {
        background: none !important;
        border: none;
        border-radius: 0;
      }

      .function-card:not(:last-child) {
        position: relative;

        &::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          content: "";
          border: 1px dashed rgba(66, 90, 239, 0.1);
          width: 90%;
        }
      }
    }
  }

  .post-item:not(:last-child),
  .function-card:not(:last-child) {
    margin-bottom: 20px;
  }


}
</style>
