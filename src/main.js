import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Toasts
import VueNotificationList from '@dafcoe/vue-notification'
import '@dafcoe/vue-notification/dist/vue-notification.css'

createApp(App).use(router).use(store).use(VueNotificationList).mount('#app')
