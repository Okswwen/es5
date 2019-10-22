/** 
 * 防抖
 * 触发高频事件后，n秒内函数只会执行一次，在n秒内再次触发，需要重新计算时间
*/

const debounce = (fn, wait = 500) => {
  let timeout = null // 放置定时器的返回值
  return function() {
    clearTimeout(timeout) // 清空定时器，防止内存泄漏
    timeout = setTimeout(() => { // 创建新的setTimeout，输入字符在wait的interval（时间间隔）内，不会执行fn
      fn.apply(this, arguments)
    }, wait)
  }
}

// 使用场景input输入框,500后搜索
function getList() {
  console.log('防抖后，接收数据');
}

let ipt = document.getElementById('input')
ipt.addEventListener('input', debounce(getList, 500))



/** 
 * 节流
 * 高频事件触发，n秒内只会执行一次
*/

const throttle = (fn, wait) => {
  let canRuning = true // 设置闭包保存标记
  return function () {
    if(!canRuning) return // 阻止执行
    canRuning = false
    setTimeout(() => { // 将外面函数放在setTimeout执行
      fn.apply(this, arguments)
      canRuning = true // 将标志位设回去，容许下一次的执行
    }, wait)
  }
}

// 使用场景，jd活动，给小树苗浇水，n秒内，只能执行一次
const getClientSize = (e) => {
  console.log(e.target.innerWidth, e.target.innerHeight)
}

window.addEventListener('resize', throttle(getClientSize, 500))