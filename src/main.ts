import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/styles.css'
import mitt from 'mitt'
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$mitt = mitt()
app.use(createPinia())
app.use(router)

app.mount('#app')
