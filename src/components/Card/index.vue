<template>
  <div class="card-container" :class="{ 'has-border': props.border }" ref="card">
    <div class="inner" ref="inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const inner = ref<HTMLElement>()
const card = ref<HTMLElement>()
const props = defineProps<{
  border?: boolean
}>()



function handleBorder() {
  if (!props.border) return

  // setContainerHeight()
  const body = document.querySelector("body") as HTMLElement
  const cards = document.querySelectorAll(".card-container") as NodeListOf<HTMLElement>
  body.onmousemove = (e) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      card.style.setProperty("--x", x + "px")
      card.style.setProperty("--y", y + "px")
    }
  }

}
onMounted(() => {
  // handleHeightCollapse()
  handleBorder()
})


watch(() => inner.value?.children[0].getBoundingClientRect().height, () => {
  handleHeightCollapse()
})

function handleHeightCollapse() {
  if (props.border) {
    nextTick(() => {
      card.value!.style.height = inner.value!.children[0].getBoundingClientRect().height + 'px'
    })
  }
}
</script>

<style scoped lang="scss">
.card-container {
  border-radius: 12px;
  background: rgba(242, 246, 249, 0.8);
  animation: fadeInRight;
  animation-duration: 0.5s;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #e3e8f7;

  &:hover {
    box-shadow: 0 4px 18px 0 rgba(147, 195, 232, 0.7);
    border-color: var(--pink-color);
  }

  &.has-border {
    &:hover {
      transform: scale(1.01);
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(closest-side circle, #D074D8, transparent);
      transform: translate(var(--x, -1000px), var(--y, -1000px));
    }

    .inner {
      position: absolute;
      inset: 5px;
      background: rgba(242, 246, 249, 1);
      border-radius: inherit;
      overflow: hidden;
    }
  }

  @keyframes fadeInRight {
    0% {
      transform: translate3d(0, 30%, 0);
    }
  }
}
</style>