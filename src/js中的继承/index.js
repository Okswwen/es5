
// js中的继承

// 第一种 使用call（）
function Parent1(){
  this.name = 'parent1';
}
function Child1(){
  Parent1.call(this);
  this.type = 'child1'
}
console.log(new Child1);
// 复制代码这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承。那么引出下面的方法。

// 第二种 使用原型链


function Parent2() {
  this.name = 'parent2';
  this.play = [1, 2, 3]
}
function Child2() {
  this.type = 'child2';
}
Child2.prototype = new Parent2();

console.log(new Child2());

// 可以实现继承属性以及方法，但是变相的属于调用了一个对象，后续会相互影响

// 第三种 将他们组合

function Parent3 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}
function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}
Child3.prototype = new Parent3();
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);

// 可以坚决问题，但是Child3.prototype = new Parent3(); 多调用了一次

// 第四种 寄生组合
function Parent5 () {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
