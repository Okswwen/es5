

var a = {
  value: 0,
  valueOf: function() {
    this.value++
    return this.value
  }
};
console.log(a == 1 && a == 2)

// 对象转原始类型是根据什么流程运行的？
// 对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

// 如果Symbol.toPrimitive()方法，优先调用再返回
// 调用valueOf()，如果转换为原始类型，则返回
// 调用toString()，如果转换为原始类型，则返回
// 如果都没有返回原始类型，会报错


