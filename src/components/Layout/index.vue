<template>
  <div class="main-container">
    <Header/>
    <div class="router-container">
      <RouterView/>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<style scoped lang="scss">
.main-container {
  width: 1440px;
  .router-container{
    padding: 0 135px;
  }
}
</style>