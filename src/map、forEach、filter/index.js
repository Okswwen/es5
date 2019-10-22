/** 
 * forEach filter map 对比
*/

// forEach 返回值：一个数组

let arr = [1, 2, 3, 4, -2, -5, 8]
let obj = {name: 'steven'}

arr.forEach((val, index, arr) => { // val 数组中的每一项 arr[index] === val
  arr[index] = val*2
})

console.log(arr)

// map() 遍历数组，处理返回之后的新数组

// 具有返回值，会返回一个新的数组，这样处理数组后也不会影响到原有数组
let arr = [1, 2, 3, 4]
let newArr = arr.map(function(item,index,array){
  return {...item, name: index}
});
console.log(newArr)  // [2,-4,6,8,-10]


// filter 筛选数组中满足条件的元素，返回一个筛选后的新数组

let minus = arr.filter(function(item,index,array){
  return item < 0;
});
console.log(minus);   // [-2, -5]