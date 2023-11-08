import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'remixicon/fonts/remixicon.css'
import './assets/css/main.css'
import mitt from 'mitt'
import { register } from 'swiper/element/bundle'
import App from './App.vue'
import router from './router'
import 'swiper/css'
import i18n from '@/i18n/index.ts'

// register Swiper custom elements
register()

const app = createApp(App)
app.config.globalProperties.$mitt = mitt()
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
