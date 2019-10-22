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