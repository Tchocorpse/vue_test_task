import App from './App.vue'
import { createApp } from 'vue'
import router from './router'


const App1 = createApp(App).use(router).mount('#app')

App1.config.productionTip = false
