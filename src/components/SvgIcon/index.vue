<template>
  <svg aria-hidden="true" :width="size" :height="size" :fill="color">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  name?: string;
  size?: number;
  color?: string;
}>();
</script>
