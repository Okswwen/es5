/** 
 * slice和splice区别
*/

var arr=[0,1,2,3,4,5,6,7,8,9];//设置一个数组
console.log(arr.slice(2,7));//2,3,4,5,6
console.log(arr.splice(2,7));//2,3,4,5,6,7,8
//由此我们简单推测数量两个函数参数的意义,
// slice(start,end)第一个参数表示开始位置,第二个表示截取到的位置(不包含该位置)
// splice(start,length)第一个参数开始位置,第二个参数截取长度
var x=y=[0,1,2,3,4,5,6,7,8,9]
console.log(x.slice(2,5));//2,3,4
console.log(x);[0,1,2,3,4,5,6,7,8,9] // 原数组并未改变
//接下来用同样方式测试splice
console.log(y.splice(2,5));//2,3,4,5,6
console.log(y);//[0,1,7,8,9]显示原数组中的数值被剔除掉了

```
  slice和splice虽然都是对于数组对象进行截取,但是二者还是存在明显区别,
  函数参数上slice和splice第一个参数都是截取开始位置,
  slice第二个参数是截取的结束位置(不包含),
  而splice第二个参数(表示这个从开始位置截取的长度),
  slice不会对原数组产生变化,
  而splice会直接剔除原数组中的截取数据!
```
