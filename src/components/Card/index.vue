<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// const props = defineProps<{
//   title?: string
// }>()
</script>

<style scoped lang="scss">
.card-container {
  border-radius: 20px;
  background: rgba(242, 246, 249, 0.8);
  box-shadow: 0 4px 33px 0 rgba(147, 195, 232, 0.7);
  animation: slideInDown;
  animation-duration: 0.5s;
  transition: all;
  //.card-title {
  //  font-family: "Roboto", sans-serif;
  //  font-size: 18px;
  //  font-weight: 600;
  //  line-height: 25px;
  //  color: #000000;
  //}

  @keyframes slideInDown {
    0% {
      transform: translate3d(0, -30%, 0);
    }
  }
}
</style>