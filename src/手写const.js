

// 手写const函数
/** 
 * 使用es5方法，书写一个const函数
 * const 特性：
 * 全局唯一，不能更换，重新赋值
 * 使用es5中的。Object.defineProperty
 * 
*/

function _const(key, value) {
  var desc = {
    value,
    writable: false
  }
  Object.defineProperty(window, key, desc)
}

_const(b,1)
_const(b, 2)