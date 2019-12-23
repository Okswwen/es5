/** 
 * sleep函数 延迟到指定时间，再执行
*/

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time * 1000)
  })
}