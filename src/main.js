import {
    createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { VuelidatePlugin } from '@vuelidate/core'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'

createApp(App).use(store).use(router).use(VuelidatePlugin).mount('#app')