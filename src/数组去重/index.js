// set方法
function uniquearray(array) { 
  let unique_array= Array.from(new Set(array)) 
  return unique_array
}
// 使用filter
const unque_arry = (arr) => {
  let unique_arry = arr.filter((elem, index, self) => {
    return index = self.indexOf(elem)
  })
  return unique_arry
}
// 使用for循环
const dups_names = ['Ron', 'Pal', 'Fred', 'Rongo', 'Ron']
function dups_array(dups_names) {
let unique = {};
names.forEach(function(i) {
  If (!unique[i]) {
    unique[i] = true   
  }
  });
return Object.keys(unique)}   // Ron, Pal, Fred, Rongo
Dups_array(names)

// 使用indexOf

const array = [1, 2, 1, '1']

const unique = (arr) => {
  let res = []
  for(let i = 0; i < arr.length; i++){
    let current = arr[i]
    if(res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res
}