
// 拦截器 用于拦截请求与响应
// 用于main.js中导入
// 随后页面main.js中 执行 interceptor()

import axios from 'axios'


export default function(vm) {
  // 请求作出拦截
  axios.interceptors.request.use(config => {
    // 获取token
    const token = localStorage.getItem('token')
    if(token) {
      config.headers.token = token
    }
    return config
  })

  // 响应拦截器
  // null 表示响应成功
  // vm vue的实例
  axios.interceptors.response.use(null, err => {
    if(err.response.status === 401) {
      // 清楚本地缓存以及状态
      vm.$store.dispatch('logout')
      // 条状
      vm.$router.push('/login')
    }
    return Promise.reject(err)
  })
}