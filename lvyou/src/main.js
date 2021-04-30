import { createApp } from 'vue'
import App from './App.vue'

// css
import 'css/reset.css'


// import SwiperCore, { Autoplay, Pagination, EffectCoverflow,Navigation } from "swiper"
// import { Swiper, SwiperSlide } from "swiper/vue"
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.less"
// import "swiper/components/navigation/navigation.less"
// SwiperCore.use([Autoplay, Pagination, EffectCoverflow,Navigation])

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)

// fonticon
import './assets/css/iconfont.css'

import router from './router'
import store from './store'

createApp(App).use(store).use(store).use(router).use(Swiper).mount('#app')
