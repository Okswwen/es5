// 保留用户的登录态
import Login from './user'
Vue.use(vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token')? true: false
  },
  mutations: {
    setloginState(state, b){
      state.isLogin = b
    }
  },
  actions: {
    // 处理异步的交互
    /**
     * 此方法将用于在登录页面调用
     * login()
     * this.$store.dispatch('login', this.model)
     * 
     */
    async login({commit}, user) {
      // 具体的请求方法
      const loginMessage = await Login.login(user)
      const {code, token} = loginMessage.data
      if(code) {
        commit('setLoginState', true) // 更新状态
        localStorage.setItem('token', token) // 缓存本地token
      }
      return code
    },
    logout({commit}) {
      // 清楚本地token
      localStorage.removeItem('token')
      // 重置登录状态
      commit('setLoginState', false)
    }
  }
})

// controller 层面