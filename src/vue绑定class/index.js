// 绑定class的数组用法

// 对象方法 v-bind:class="{'orange': isRipe, 'green': isNotRipe}"
// 数组方法  v-bind:class="[class1, class2]"
// 行内 v-bind:style="{color: color, fontSize: fontSize+'px' }"
// v-bind:class="[isActive ? activeClass : '', errorClass]"
// v-bind:class="{ active: isActive, 'text-danger': hasError }"
// v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"

{/* <div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
} */}
