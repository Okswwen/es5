/** 
 * 实现call/apply方法
 * 利用this 的上下文特性
 * 
*/

Function.prototype.myCall = function(context = window, ...args) {
  let func = this
  let fn = Symbol('fn')
  context[fn] = func
  let res = context[fn](...args)
  delete context[fn]
  return res
}


Function.prototype.myApply = function(context = window, ...arg) {
  let func = this
  let fn = Symbol('fn')
  context[fn] = func
  let res = context[fn](...arg)
  delete context[fn]
  return res
}