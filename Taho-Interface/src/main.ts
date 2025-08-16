import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'

import App from './core/views/Dashboard.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
