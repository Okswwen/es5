
// 数组降级

const arr = [1, 2, 3, 4, [1, 2, 3,[1, 2, 3, [1, 2, 3, 4]]], 'stven', {name: 'lucy'}]

const arrFlat = (arr) => {
  let res = []
  arr.forEach(item => {
    // 如果是数组，继续递归，将数组降级
    if(Array.isArray(item)) {
      res = res.concat(arguments.callee(item))
      // res.push(...arguments.callee(item))
    } else {
      arr.push(item)
    }
    return arr
  });
}