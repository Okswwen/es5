/** 
 * 用es5实现数组的reduce方法
 * 初始值不传，如何处理
 * 回调参数有哪些
 * 返回如何处理
 * 
*/

Array.prototype.myReduce = function(fn, initialVaule) {
  var arr = Array.prototype.slice.call(this)
  var res, startIndex
  res = initialVaule ? initialValue : arr[0]
  startIndex = initialValue ? 0 : 1
  for (var i = startIndex; i < arr.length; i++) {
    res = fn.call(null, res, arr[i], i, this)    
  }
  return res
}