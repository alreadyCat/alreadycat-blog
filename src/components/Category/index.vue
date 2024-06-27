<template>
  <div class="category-container">
    <Item :delay="(index + 1) * 0.3" v-for="(item, index) in props.items" :key="index" v-bind="item" />
  </div>
</template>

<script setup lang="ts">
import Item from "./components/CategoryItem/index.vue"
const props = withDefaults(defineProps<{
  items?: Array<Category.Entity>
}>(), {})
</script>

<style lang="scss" scoped>
.category-container {
  padding: 38px 0 0 45px;
  display: flex;
  align-items: center;
  gap: 32px;
}
</style>