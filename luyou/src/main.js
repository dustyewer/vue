import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import 'css/reset.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper )


import FastClick from 'fastclick'
FastClick.attach(document.body)

// fonticon
import './assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



