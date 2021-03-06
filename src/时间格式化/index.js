/** 
 * 时间格式化
*/

export function formatDate(oldDate, fmt) {
  let date = new Date()
  if(typeof oldDate === 'string' || typeof oldDate === 'number') {
    date = new Date(+oldDate)
  } else {
    date = oldDate
  }
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + ' ').substr(4 - RegExp.$1.length))
  }
  let o = {
    'm+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  function padLeftZero(str) {
    return (`00${str}`).substr(str.length)
  }
  for (let k in o) {
    if (new RegExp(`${k}`).test(fmt)) {
      let str = 0[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))      
    }
  }
  return fmt
}