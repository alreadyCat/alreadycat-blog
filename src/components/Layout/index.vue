<template>
  <div class="layout-container">
    <div class="layout-left">
      <div class="layout-left-top">
        <img src="@/assets/svg/logo.svg" alt=""/>
      </div>
      <div class="layout-left-menu">
        <div class="layout-left-menu-item layout-left-menu-item-active"><span>Home</span></div>
        <div class="layout-left-menu-item"><span>Profile</span></div>
        <div class="layout-left-menu-item layout-left-menu-item-hasChildren">
          <img class="drop-icon" src="@/assets/svg/drop.svg" alt=""/>
          <span>
              Category
          </span>
        </div>
        <div class="layout-left-menu-item"><span>Anime</span></div>
        <div class="layout-left-menu-item"><span>Movies</span></div>
        <div class="layout-left-menu-item"><span>Kpop</span></div>
        <div class="layout-left-menu-item"><span>Games</span></div>
        <div class="layout-left-menu-item"><span>Apps</span></div>
        <div class="layout-left-menu-item"><span>Course</span></div>
        <div class="layout-left-menu-item"><span>Product</span></div>
        <div class="layout-left-menu-item"><span>Business</span></div>
        <div class="layout-left-menu-item"><span>About</span></div>
      </div>
    </div>
    <div class="layout-right">
      <Top/>
      <Category :items="data || []"/>
      <div class="main-content">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Top from './components/Top/index.vue'
import Category from '@/components/Category/index.vue'
import {useRequest} from "vue-hooks-plus";
import {getCategoryList} from "@/service";

const {data} = useRequest(() => getCategoryList());
</script>

<style scoped lang="scss">
.layout-container {
  z-index: 0;
  background-image: url("@/assets/images/bg.png");
  background-size: cover;
  display: flex;

  .layout-left {
    width: 296px;
    max-width: 296px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.53); /* 半透明背景色 */
    backdrop-filter: blur(5px); /* 模糊效果，数值越大模糊程度越高 */
    box-shadow: 4px 0 50px 0 rgba(172, 211, 241, 0.44);
    position: sticky;
    top: 0;

    .layout-left-top {
      margin-top: 16px;

      img {
        display: block;
        margin: 0 auto;
        width: 165px;
        height: 93px;
      }
    }

    .layout-left-menu {
      box-sizing: border-box;
      margin-top: 62px;
      padding: 0 20px;

      .layout-left-menu-item {
        padding: 7px 0 0 33px;
        cursor: pointer;
        display: flex;

        span {
          font-family: "Roboto", sans-serif;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0;
        }

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        &.layout-left-menu-item-active, &:hover {
          span {
            font-family: "Roboto Bold", sans-serif;
            font-weight: 800;
          }

          background: rgba(227, 227, 227, 0.5);
          border-radius: 35px;
        }
      }


      .layout-left-menu-item-hasChildren {
        .drop-icon {
          vertical-align: top;
          width: 13px;
          height: 13px;
          margin-right: 8px;
        }
      }
    }
  }

  .layout-right {
    flex: 1;

    .main-content {
      padding: 45px;
    }
  }
}
</style>