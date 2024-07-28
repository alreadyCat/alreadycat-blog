export default function useSetBoxMarginTop(className: string) {
    onMounted(() => {
      (document.querySelector(className) as HTMLElement).style.marginTop = (document.querySelector(".top-container")?.getBoundingClientRect().height || 109) + "px";
    })
  }
  