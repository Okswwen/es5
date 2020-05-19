// 数组过滤后，再次选取自己的值
```py
假设有个数组：
const wizards = [
  {
    name: 'Harry Potter',
    house: 'Gryfindor'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff'
  },
  {
    name: 'Tonks',
    house: 'Hufflepuff'
  },
  {
    name: 'Ronald Weasley',
    house: 'Gryfindor'
  },
  {
    name: 'Hermione Granger',
    house: 'Gryfindor'
  }
]

需求: 创建一个仅包含住在 Hufflepuff 的"巫师名字"的新数组

通常我们的做法是，将数据进行过滤Array.filter(),获取house属性为'Hufflepuff'的wizards数组，随后Array.map()遍历，创建出我们想要的仅仅包含name的数组


const hufflepuff = wizards.filter(item => {
  return item.house === 'Hufflepuff'
}).map(e => {
  return e.name
})

reducer 函数接收4个参数:

Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)
您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

使用Array.reduce()，可以减少很多步骤，

const onlyName = wizards.reduce((arr, currentItem) => {
  if(currentItem.house === 'Hufflepuff') {
    arr.push(currentItem.name)
  }
  return arr
}, [])
console.log(JSON.stringify(onlyName))


即可，过滤读取到自己想要的数组


如果有一份数据，想要添加到数组中，
var points = {
  HarryPotter: 500,
  CedricDiggory: 750,
  RonaldWeasley: 100,
  HermioneGranger: 1270
};

const wizardWithPoint = wizards.reduce((arr, currentItem) => {
  let key = currentItem.name.replace(' ', '') // 移除空格
  if(points[key]) {
    currentItem.point = points[key]
  } else {
    currentItem.point = 0
  }
  // 删除name属性
  delete currentItem.name
   
  arr.push(currentItem)
  return arr
}, [])

```