/** 
 * 实现bind方法
 * 对于普通函数，绑定this指向
 * 对于构造函数，原函数上的属性不能丢失
*/

Function.prototype.myBind = function(context, ...args) {
  let self = this // 谁调用表示谁
  let fBound = function() {
    return self.apply(this instanceof fBound ? this: context || window, args)
  }
  fBound.prototype = Object.create(this.prototype)
  return fBound
}