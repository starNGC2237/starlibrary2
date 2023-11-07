import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'remixicon/fonts/remixicon.css'
import './assets/css/styles.css'
import mitt from 'mitt'
import { createI18n } from 'vue-i18n'
import { register } from 'swiper/element/bundle'
import App from './App.vue'
import router from './router'
import messages from '@/i18n'
import 'swiper/css'

// register Swiper custom elements
register()
const i18n = createI18n({
  messages,
  locale: 'en'
})
const app = createApp(App)
app.config.globalProperties.$mitt = mitt()
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
