import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './style/index.scss' // global css
import { DropdownMenu, DropdownItem } from 'vant';
import store from './store/index'
import router from './router/index'
import './permission'

createApp(App).use(router).use(DropdownItem).use(DropdownMenu).use(store).mount('#app')

