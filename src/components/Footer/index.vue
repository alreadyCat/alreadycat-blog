<template>
  <div class="footer-container">
    <div class="footer-wrap">
      <div class="footer-left">
        <div class="footer-left-logo">
          {{ store.userName }}
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

  </div>
</template>

<script setup lang="ts">
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { useGlobalStore } from '@/store';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const store = useGlobalStore()
useSetWrapWidth('.footer-wrap')
</script>

<style scoped lang="scss">
.footer-container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 132px;
  padding-top: 22px;
  margin-top: 20px;
  background: #FBF8F8;

  .footer-wrap {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    .footer-left {
      .footer-left-logo {
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0.15px;
        color: #000;
        font-family: "Nunito";
      }
    }

    .footer-center {
      margin-left: 180px;

      .footer-center-nav {
        display: flex;
        justify-content: space-between;
        gap: 35px;

        .footer-center-nav-item {
          font-family: "Nunito";
          font-size: 14px;
          font-weight: normal;
          line-height: 21px;
          letter-spacing: 0.15px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>