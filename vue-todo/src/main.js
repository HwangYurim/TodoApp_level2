import Vue from 'vue'
import App from './App.vue'
// import 할때 변수로 임포트할 경우 {} 안에 넣어준다
import { store } from './store/store'

var app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
