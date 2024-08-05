<template>
  <div class="header-container">
    <div class="header-top">
      <div class="header-left">
        <div class="header-logo">
          AlreadyCat
        </div>
      </div>
      <div class="header-right">
        <div class="header-nav">
          <div class="header-nav-item">{{ t("common.home") }}</div>
          <div class="header-nav-item">{{ t("common.aboutMe") }}</div>
          <div class="header-nav-item">{{ t("common.careers") }}</div>
          <div class="iconfont icon-zhongwen header-nav-item" @click="handleChangeLanguage"></div>
          <div class="header-nav-item">
            <img class="header-nav-item-github" src="@/assets/svg/github-fill.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div class="header-introduce">
      <div class="header-flower">
        <img src="@/assets/svg/flower.svg" alt="">
      </div>
      <div class="header-title">{{ t("common.title") }}</div>
      <div class="header-introduce-txt">{{ t("common.description") }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const {t, locale} = useI18n()


const handleChangeLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<style scoped lang="scss">
.header-container {
  padding: 22px 135px 0 135px;

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      .header-logo {
        font-family: "Nunito";
        font-size: 24px;
        color: #000000;
        line-height: 36px;
        font-weight: 600;
        letter-spacing: 0.15px;
      }
    }

    .header-right {
      .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 32px;
        font-family: "Nunito";
        line-height: 36px;
        color: #435565;
        font-size: 16px;

        .header-nav-item {
          .header-nav-item-github {
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            img {
              display: block;
              width: 16px;
              height: 16px;
            }
          }
        }

        & > div {
          cursor: pointer;
        }

      }
    }
  }

  .header-introduce {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin: 26px 0;

    .header-flower {
      width: 100px;
      height: 100px;
      text-align: center;

      img {
        width: 100px;
        height: 100px;
      }
    }

    .header-title {
      font-family: "Nunito";
      font-size: 32px;
      line-height: 36px;
      color: #000;
      font-weight: normal;
    }

    .header-introduce-txt {
      font-family: "Nunito";
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
      text-align: center;
      letter-spacing: 0.15px;
    }
  }
}
</style>