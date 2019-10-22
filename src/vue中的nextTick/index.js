
/** 
 * 页面渲染完毕，获取焦点
*/

mounted(){ //因为 mounted 阶段 dom 并未渲染完毕,所以需要$nextTick
  this.$nextTick(() => {
    this.$refs.inputs.focus() //通过 $refs 获取dom 并绑定 focus 方法
  })
}
