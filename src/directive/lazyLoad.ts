import { App } from "vue";
import defaultIamge from '@/assets/images/defaultImage.gif'
import { useInViewport } from "vue-hooks-plus";
export default {
    install(app: App) {
        app.directive("lazyload", {
            mounted(el: HTMLElement, binding: any) {
                const [inViewport] = useInViewport(el, { threshold: 0.5 })

                const stop = watch(inViewport, () => {
                    if (inViewport.value) {
                        el.setAttribute("src", binding.value)
                        stop()
                    } else {
                        el.setAttribute("src", defaultIamge)
                    }
                })
            }
        })
    }
}