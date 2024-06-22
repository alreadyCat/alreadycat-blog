<template>
  <div class="footer-container">
    <div class="footer-left">
      <div class="footer-left-logo">
        AlreadyCat
      </div>
    </div>
    <div class="footer-center">
      <div class="footer-center-nav">
        <div class="footer-center-nav-item">{{ t("common.aboutMe") }}</div>
        <div class="footer-center-nav-item">{{ t("common.blog") }}</div>
        <div class="footer-center-nav-item">{{ t("common.careers") }}</div>
        <div class="footer-center-nav-item">{{ t("common.contactMe") }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const {t} = useI18n()


</script>

<style scoped lang="scss">
.footer-container {
  box-sizing: border-box;
  width: 1440px;
  height: 132px;
  margin-top: auto;
  display: flex;
  align-items: flex-start;
  padding: 22px 135px 0 135px;
  background: #FBF8F8;

  .footer-left {
    .footer-left-logo {
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0.15px;
      color: #000;
      font-family: "Nunito", sans-serif;
    }
  }

  .footer-center {
    margin-left: 180px;

    .footer-center-nav {
      display: flex;
      justify-content: space-between;
      gap: 35px;

      .footer-center-nav-item {
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        font-weight: normal;
        line-height: 21px;
        letter-spacing: 0.15px;
        cursor: pointer;
      }
    }
  }
}
</style>