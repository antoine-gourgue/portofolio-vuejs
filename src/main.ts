import { createApp } from 'vue'
import { createPinia } from 'pinia'
/* SCSS FILES */
import './assets/scss/tailwind.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
