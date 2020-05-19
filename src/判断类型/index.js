
// 判断对象类型最好的方式
// 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用



// 判断是否是数组
if(Object.prototype.toString.call(arr) === '[object array]') {}

Array.isArray(arr)

const isArray = function isArray (target) {
  return Array.isArray ? Array.isArray(target) : Object.prototype.toString.apply(target).slice(8, -1) === 'Array'
}

const isString = function isString (target) {
  return Object.prototype.toString.apply(target).slice(8, -1) === 'String'
}

const isObject = function isObject (target) {
  return Object.prototype.toString.apply(target).slice(8, -1) === 'Object'
}

const isEmptyObject = function isEmptyObject (obj) {
  return Object.keys(obj).length === 0
}

export function isFunction (target) {
  return Object.prototype.toString.apply(target).slice(8, -1) === 'Function'
}

// 解析url地址
const GetQueryString = function GetQueryString (name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}