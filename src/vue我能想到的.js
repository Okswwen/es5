/** 
 * props emit
 * eventBus
 * provide inject
 * $parent $children
 * $attr inheritAttrs
 * vuex
 * 
 * 事件插槽
 * slot 匿名插槽
 * slot name="content" 具名插槽
 * 
 * v-model与asyc的区别
 * 
 * v-model仅仅是语法糖
 * input v-model="val" 双向数据绑定
 * input v-bind="$attrs" :value="value" @input="$emit('input',$event.target.value)" 
 * v-bind="$attrs" 将除props传递的以外属性，复制到子组件中
 * 
 * .asyc 定义为是父组件确定要更换的，约定好的
 * 使用下面的update来更新
 * input :foo.asyc="foo" type="text"
 * input v-bind="$attrs" @update.foo="foo=$event" :foo="foo"
 * 
 * 
*/