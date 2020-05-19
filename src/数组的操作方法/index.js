// map: 遍历数组，返回回调返回值组成的新数组
// forEach: 无法break，可以用try/catch中throw new Error来停止
// filter: 过滤
// some: 有一项返回true，则整体为true
// every: 有一项返回false，则整体为false
// join: 通过指定连接符生成字符串
// push / pop: 末尾推入和弹出，改变原数组， 返回推入/弹出项【有误】
// unshift / shift: 头部推入和弹出，改变原数组，返回操作项【有误】
// sort(fn) / reverse: 排序与反转，改变原数组
// concat: 连接数组，不影响原数组， 浅拷贝
// slice(start, end): 返回截断后的新数组，不改变原数组
// splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
// indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
// reduce / reduceRight(fn(prev, cur)， defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// 遍历数组的方法有太多，本文只枚举常用的几种
// for 循环
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// for...of
for (let value of arr) {
  console.log(value);
}
// for...in
for (let i in arr) {
  console.log(arr[i]);
}
// forEach 循环
arr.forEach(value => {
  console.log(value);
});
// entries（）
for (let [index, value] of arr.entries()) {
  console.log(value);
}
// keys()
for (let index of arr.keys()) {
  console.log(arr[index]);
}
// values()
for (let value of arr.values()) {
  console.log(value);
}
// reduce()
arr.reduce((pre, cur) => {
  console.log(cur);
}, []);
// map()
arr.map(value => console.log(value));

