import {
  createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {
  VuelidatePlugin
} from '@vuelidate/core'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyASKyRxN3mRHklLAIGx_CDlrTAw-sHfMKU",
  authDomain: "vue-crm-fab63.firebaseapp.com",
  databaseURL: "https://vue-crm-fab63.firebaseio.com",
  projectId: "vue-crm-fab63",
  storageBucket: "vue-crm-fab63.appspot.com",
  messagingSenderId: "498245064294",
  appId: "1:498245064294:web:8656c1a446d71c0d98ffa7"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    .use(store)
    .use(router)
    .use(VuelidatePlugin)
    .mount('#app')
  }
})