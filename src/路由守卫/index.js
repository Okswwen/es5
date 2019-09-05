
const router = [{
  path: 'login',
  component: Login,
  name: 'login'
}, {
  path: 'us',
  component: Us,
  name: 'us',
  meta: {
    auth: true, // 需要登录
  } 
}]


// 路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem('token')
    if(token) {
      next()
    } else {
      next({
        path: 'login',
        /** 
         * redirect
         * 登录成功后，再次回到上次要登录的地址
        */
        query: { redirect: to.path} // 从定向到想去往的页面
      })
    }
  } else {
    // 不需要登录，即可以查看
    next()
  }
})

export default router