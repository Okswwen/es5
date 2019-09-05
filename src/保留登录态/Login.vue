<template>
  <div class="container"></div>
</template>

<script>
export default {
  name:'login',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  computed:{},
  watch:{},
  created(){},
  mounted(){},
  methods:{
    async handleLOgin(e) {
      // 阻止浏览器的默认行为
      e.preventDefault();
      const res = await this.$store.dispatch('login', '提交的数据')
      if(res.code) {
        // 登录成功,将重定向到先前登录的页面，或者首页(没有设置重定向的话)
        const path = this.$router.query.redirect || '/'
        this.$router.push(path)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.container{}
</style>