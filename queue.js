console.log("用传统方法创建队列：")
function Queue() {
let items = []
this.enqueue = function (element) { //添加元素
  items.push(element) 
}
this.dequeue = function () {  //移除元素
  return items.shift()
}
this.front = function () {  //返回队头元素
  return items[0]
}
this.isEmpty = function () { //检查是否为空
  return items.length === 0
}

this.print = function() {
  console.log(items.toString())
}
}
let queue = new Queue()
stack.enqueue(5)
stack.enqueue(8)
console.log(stack.front())
console.log(stack.isEmpty())
stack.enqueue(15)
stack.print()
stack.dequeue()
stack.dequeue()
stack.print()

console.log("ES6定义queue：")
//用weakmap实现类
let Stack = (function(){
  const items = new WeakMap()
  class Stack {
    constructor () {
      items.set(this, [])
    }
  }
  return Stack
})()

