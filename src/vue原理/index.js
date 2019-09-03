class KVue {
  constructor(options) {
    this.$options = options

    // 数据响应化
    this.$data = options.data
    this.observe(this.$data)
  }

  observe(value) {
    // 判断值是否为空，防止错误
    if(!value || typeof value !== 'object') return
  
    // 遍历data中对象
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])
    })
  }

  defineReactive(obj, key, val) {
    this.observe(val) // 递归，解决数据嵌套问题，deep
    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal){
        if(newVal === val) return
        val = newVal
        console.log(`${key}属性更新 ： ${val}`);
      }
    })
  }

}
