
// arguments 是类数组 转数组

// 方法一
Array.prototype.slice.call(arguments)

// 方法二
Array.from() // es6

// 方法三,常用于对象转换
// [...arguments]