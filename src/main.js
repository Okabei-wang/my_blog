import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './style/index.scss' // global css
import store from './store/index'
import router from './router/index'
import './permission'

createApp(App).use(router).use(store).mount('#app')

