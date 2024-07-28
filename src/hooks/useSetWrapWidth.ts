import { useGlobalStore } from "@/store"

export default function useSetWrapWidth(className: string) {

    const store = useGlobalStore()
    onMounted(() => {
        const el = (document.querySelector(className) as HTMLElement)
        if (!el) return
        el.style.setProperty("--wrap-width", store.wrapWidth + 'px');
        el.style.setProperty("max-width", store.wrapWidth + 'px')
        el.style.setProperty("width", "100%")
        el.style.setProperty("margin", "0 auto")
        el.style.setProperty("box-sizing", "border-box")
        el.style.setProperty("padding", "0 1.5rem")
    })

}