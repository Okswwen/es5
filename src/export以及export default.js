// export
// 默认可以设定多个导出

// 多用户按需导出的方式
// 配合：
// import test from 'xx.js'

/**
 * export default
 * 一般的使用方式，是对于整体的导出，
 * 仅仅可以导出一个
 * 一个对象里面可以包含多个属性key
 * 配合：
 * import {num, age} from 'xx.js'
 */

// 完全导入
import * as obj from 'xx.js'
// 将所有的都导出，obj作为别名来使用
