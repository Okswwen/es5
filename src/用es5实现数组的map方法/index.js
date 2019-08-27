/** 
 * 用es5实现es6中的map方法
 * 回调函数有哪些，返回值如何处理
 * 不修改原数组
 * 
*/

Array.prototype.MyMap = function(fn, context) {
  var arr = Array.prototype.slice.call(this) // 将类数组转为数组
  var mapArr = []
  for (var i = 0; i < mapArr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue
    mapArr.push(fn.call(context, arr[i], i, this))
  }
  return mapArr
}