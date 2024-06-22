// index.js
import {createI18n} from 'vue-i18n'
import zh from './zh.ts'
import en from './en.ts'

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'zh',
    fallbackLocale: 'zh',
    legacy: false,
    messages: {
        zh,
        en
    }
})

export default i18n
