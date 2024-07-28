import { defineStore } from "pinia";
export const useGlobalStore = defineStore("global", {
    state() {
        return {
            title: "",
            isDark: false,
            columnLayout: "two",
            wrapWidth: import.meta.env.VITE_WRAP_WIDTH || 1440,
            userName: import.meta.env.VITE_USERNAME,
            motto: ["——学无止境，知行合一。"],
            scrollPercent: 0,
            scrollToHomePer: 0,
            currentScrollTop: 0
        }
    },
    actions: {
        toggleDark() {
            // this.isDark = !this.isDark
            // if (this.isDark) {
            //     document.documentElement.classList.add("dark")
            // } else {
            //     document.documentElement.classList.remove("dark")
            // }
        },
        toggleColumnLayout() {
            this.columnLayout = this.columnLayout === "one" ? "two" : "one"
        },
        scrollToTop() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },

    },
})