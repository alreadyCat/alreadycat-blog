<template>
  <div ref="commentBoxRef" id="comment-box">

  </div>
</template>

<script setup lang="ts">
const commentBoxRef = ref()

const props = defineProps<{ path: string }>()

onMounted(() => {
  init()
  commentBoxRef.value && commentBoxRef.value.click()
})
function init() {
  //@ts-ignore
  twikoo.init({
    envId: 'https://twikoo-api-pi-gules.vercel.app',
    el: '#comment-box', // 容器元素
    path: props.path,
  })
}

</script>

<style scoped></style>