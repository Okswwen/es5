<template>
  <div class="container">
  Vue.directive(id, [definition])
<div v-loading="isLoading"></div>

  </div>
</template>

<script>
Vue.directive('loading', {
  bind(){}, // 只调用一次
  inserted(){},
  updated(el,binding,vnode) {
    if(binding.value) {
      const div = document.createElement('div')
      div.setAttribute('id', 'loading')
      div.innerHTML = '加载中...'
      div.className = 'loading'
      document.body.appendChild('div')
    } else {
      const div = document.getElementById('loading')
      div && document.body.removeChild(div)
    }
  },
  componentUpdated() {},
  unbind() {} // 解绑时，调用
})

// extend组件
const LoadingComponent = Vue.extend({
  template: '<div id="class_name">{{msg}}</div>',
  props: {
    msg: {
      type: string,
      default: 'loading...'
    }
  }
}, 'LoadingComponent')
function Loading(msg) {
  const div = document.createElement('div')
  div.setAttribute('id','loading-wrapper')
  document.body.appendChild(div)
  new LoadingComponent({
    props: {
      msg: {
        type: string,
        default: msg
      }
    }
  }).$mount('#loading-wrapper')
  return () => {
    const div = document.getElementById('loading-wrapper')
    div && document.removeChild(div)
  }
}
Vue.prototype.$loading = Loading

// Vue.use(plugin)
const loadingPlugin = {
  install(vm) {
    const LoadingComponent = vm.extend({
      template: '<div id="class_name">{{msg}}</div>',
      props: {
        msg: {
          type: string,
          default: 'loading...'
        }
      }
    }, 'LoadingComponent')
    function Loading(msg) {
      const div = document.createElement('div')
      div.setAttribute('id','loading-wrapper')
      document.body.appendChild(div)
      new LoadingComponent({
        props: {
          msg: {
            type: string,
            default: msg
          }
        }
      }).$mount('#loading-wrapper')
      return () => {
        const div = document.getElementById('loading-wrapper')
        div && document.removeChild(div)
      }
    }
    vm.prototype.$loading = Loading
  }
}

Vue.use(loadingPlugin)


export default {
  name:'',
  components:{},
  props:{},
  data(){
    return {
      isLoading: false
    }
  },
  computed:{},
  watch:{},
  created(){},
  mounted(){},
  methods:{},
}
</script>
<style lang="scss" scoped>
.container{}
</style>