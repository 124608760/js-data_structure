console.log("用传统方法创建栈：")
function Stack() {
let items = []
this.push = function (element) { //添加元素
  items.push(element) 
}
this.pop = function () {  //移除元素
  return items.pop()
}
this.peek = function () {  //返回栈顶元素
  return items[items.length-1]
}
this.isEmpty = function () { //检查是否为空
  return items.length === 0
}
this.clear = function () { //清空栈
  items = []
}
this.print = function() {
  console.log(items.toString())
}
}
let stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack.peek())
console.log(stack.isEmpty())
stack.push(15)
stack.print()
stack.pop()
stack.pop()
stack.print()

console.log("ES6定义stack：")
//用weakmap实现类
let Stack1 = (function(){
  const items = new WeakMap()
  class Stack {
    constructor () {
      items.set(this, [])
    }
    push(element) { //添加元素
      let s = items.get(this)
      s.push(element)
    }
    pop () {  //移除元素
      let s = items.get(this)
      return s.pop()
    }
    peek () {  //返回栈顶元素
      let s = items.get(this)
      return s[s.length-1]
    }
    isEmpty () { //检查是否为空
      let s = items.get(this)
      return s.length === 0
    }
    clear () { //清空栈
      let s = items.get(this)
      s = []
    }
    print () {
      let s = items.get(this)
      console.log(s.toString())
    }
  } 
  return Stack
})()
let stack2 = new Stack1()
stack2.push(5)
stack2.push(8)
console.log(stack2)
console.log(stack2.isEmpty())
stack2.push(15)
stack2.print()
stack2.pop()
stack2.pop()
stack2.print()

console.log("进制转换：")
//十进制转二进制
function divideBy2(decNumber) {
  var remStack = new Stack(),
  rem,
  binaryString = ''

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}
console.log(divideBy2(232))

//十进制转任意进制
function baseConverter(decNumber, base) {
  var remStack = new Stack(),
  rem,
  baseString = '',
  digits = '0123456789ABCDEF'

  while (decNumber>0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  
  return baseString
}
console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))