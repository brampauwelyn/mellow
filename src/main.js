import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

const config = {
  apiKey: "AIzaSyAxFxApT8TcR7q6npYzOcsQ0d5GABFIFcE",
  authDomain: "mellow-bp.firebaseapp.com",
  databaseURL: "https://mellow-bp.firebaseio.com",
  projectId: "mellow-bp",
  storageBucket: "mellow-bp.appspot.com",
  messagingSenderId: "633910362805",
  timestampsInSnapshots: true
}
firebase.initializeApp(config);

export const db = firebase.firestore()

new Vue({
  render: h => h(App)
}).$mount('#app')
