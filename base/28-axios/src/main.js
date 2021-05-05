import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// 使用全局的配置
// 同时发生多个请求
// axios.all([
//   axios('http://123.207.32.32:8000/home/multidata'),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })])
//   // .then(res => {
//   //   console.log(res)
//   // })
//   .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))

// 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1.get({
//   url: '/home/muldata'
// }).then(res => {
//   console.log(res)
// })

// 封装
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// request({
//   baseConfig: {
//   },
//   success: function (res) {
//     console.log(res)
//   },
//   failure: function (err) {
//     console.log(err)
//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
