import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global",{
    state(){
        return {
            isDark: false,
            articleDetailColumnLayout:"two",
            scrollPercent:0
        }
    },
    actions:{
        toggleDark(){
            this.isDark = !this.isDark
            if(this.isDark){
                document.documentElement.classList.add("dark")
            }else{
                document.documentElement.classList.remove("dark")
            }
        },
        toggleArticleDetailColumnLayout(){
            this.articleDetailColumnLayout = this.articleDetailColumnLayout === "one" ? "two" : "one"
        },
        setScrollPercent(percent:number){
            this.scrollPercent = percent
        }
    },
})