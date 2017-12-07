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

this.size = function () {
  return items.length
}

this.print = function() {
  console.log(items.toString())
}
}
let queue = new Queue()
queue.enqueue(5)
queue.enqueue(8)
console.log(queue.front())
console.log(queue.isEmpty())
queue.enqueue(15)
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()

console.log("ES6定义queue：")
//用weakmap实现queue类
let queue2 = (function(){
  const items = new WeakMap()

  class queue2 {
    constructor () {
      items.set(this, [])
    }
    enqueue (element) {
      let q = items.get(this)
      q.push(element)
    }
    dequeue () {
      let q = items.get(this)
      return q.shift()
    }
    front () {
      let q = items.get(this)
      return q[0]
    }
    isEmpty () {
      let q = items.get(this)
      return q.length === 0
    }
    print () {
      let q = items.get(this)
      console.log(q.toString)
    }
  }
  return queue2
})()

console.log("优先队列：")

function PriorityQueue () {
  var items = []
  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority)

    let added = false
    for (let i=0;i<items.length;i++) {
      if (queueElement.priority<items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }

  this.isEmpty = function(){
    return items.length == 0;
  }

  this.print = function () {
    for (let i=0;i<items.length;i++) {
      console.log(`${items[i].element} - ${items[i].priority}`)
    }
  }
}
let priorityQueue = new PriorityQueue()
priorityQueue.enqueue("a", 2)
priorityQueue.enqueue("b", 2)
priorityQueue.enqueue("c", 2)
priorityQueue.print()

console.log("循环队列 击鼓传花：")
function hotPotato (nameList, num) {
  let queue = new Queue()

  for (let i=0;i<nameList.length;i++) {
    queue.enqueue(nameList[i])
  }

  let eliminated = ''
  while (queue.size() > 1) {
    for (let i=0; i<num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '被淘汰')
  }
  
  return queue.dequeue()
}

let names = ['傻吊', '弱智', '畜生', '废物', '碧池']
let winner = hotPotato(names, 8)
console.log(winner + "赢了")
