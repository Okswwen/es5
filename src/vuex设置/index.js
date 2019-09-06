
import goods from './server'
export default {
  state: {
    slider: [],
    keys: [],
    goodsInfo: {}, // 多个对象，值为数组
  },
  mutations: {
    setGoodsInfo(state, {slider, keys, goodsInfo}) {
      state.slider = slider
      state.keys = keys
      state.goodsInfo = goodsInfo
    }
  },
  // getters 类似于vue中的computed计算属性，可以处理一些值
  getters: {
    goods: state => {
      return state.keys.map(key => {state.goodsInfo[key]})
            .reduce((prev, next) => prev.contact(next), []) // 数组的合并 prev.push.apply(prev, next) 性能不佳
    }
  },
  // 异步请求，发送的方式
  actions: {
    // api请求地址，后台地址
    async getGoods({state, commit}){
      if(!state.keys.length) {
        // 数据为空时，请求数据
        const {slider, keys, goodsInfo} = await goods.getGoodsInfo()
        commit('setGoodsInfo', keys)
        commit('setGoodsInfo', slider)
        commit('setGoodsInfo', goodsInfo)
        console.log(goods.keys);
      }
    }
  },
}
/** 
 * state中 进行结构赋值操作，使用时：
 * creatd(){
 *  this.getGoods()
 * },
 * computed: {
 *  ...mapState({slider: state => state.goods.slider}) // slider() {return this.$store.goods.slider}
 *  ...mapGetters(['goods])
 *  }
 * methods: {
 *  ...mapActions(['getGoods'])
 * }
*/