import axios from 'axios'


// 不断优化,最后形态,axios本身就是Promise
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 拦截器 请求
  instance.interceptors.request.use(config => {
    // 如果config中的信息不符合服务器的要,可以在这里修改
    // 或者每次发送网络请求时,想在界面中显示一个转圈圈,等有了响应再去掉
    // 或者没有登录的用户跳转到登录
    console.log('拦截器 请求', config)
    // 不返回,就真的被拦截住了
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    console.log('拦截器 响应', res)
    // 不返回,就真的被拦截住了
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
