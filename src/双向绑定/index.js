/** 
 * 双向绑定原理
 * input id="input" type="text"
 * div id="text"
*/

let input = document.getElementById('input')
let text = document.getElementById('text')
let data = {value: ''}

Object.defineProperty(data, 'value', {
  get() {
    return input.value
  },
  set(val) {
    text.innerHTML = val
    input.value = val
  }
})

input.onkeyup = (e) => {
  data.value = e.target.value
}