<template>
  <div class="category-item-container" :style="{ animationDuration: props.delay + 's' }">
    <div class="category-item-image" :style="{ backgroundImage: `url(${props.categoryImageUrl})` }">
      <div class="category-item-text">{{ props.categoryName }}</div>
    </div>
    <div class="category-item-name">{{ props.categoryName }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  delay: number
  categoryName: string
  categoryImageUrl: string
}>()
</script>

<style lang="scss" scoped>
.category-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  animation: slideInRight;


  .category-item-image {
    width: 105px;
    height: 105px;
    background-size: cover;
    border-radius: 50%;
    border: 7px solid #fff;
    box-shadow: 0 2px 14px 0 #C0DBF0;

    .category-item-text {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      line-height: 105px;
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
      user-select: none;
    }
  }

  .category-item-name {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0;
    color: #2B2B2B;
    width: 95px;
    height: 30px;
    border-radius: 15px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
    user-select: none;
  }
}
</style>