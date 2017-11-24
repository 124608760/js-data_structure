console.log("数组迭代器：")
var isEven = function (x) {
  //如果x是2的倍数，就返回true
  console.log(x)
  return (x % 2 === 0) ? true : false
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log("用every方法迭代：")
console.log(numbers.every(isEven))
console.log("用some方法迭代：")
console.log(numbers.some(isEven))
console.log("用foreach方法迭代：")
numbers.forEach(function(x){
  console.log((x%2===0))
})
console.log("用map方法迭代：")
var myMap = numbers.map(isEven)
console.log(myMap)
console.log("用filter方法迭代：")
var evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)
console.log("用reduce方法迭代：")
console.log(numbers.reduce(function(previous, current, index){
  return previous+current
}))
console.log("用for...of方法迭代：")
for(let n of numbers){
  console.log((n%2===0?'even':'odd'))
}

console.log("entries：")
let aEntries = numbers.entries()
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log("keys：")
let aKeys = numbers.keys()
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
/*console.log("values：")
let aValues = numbers.values()
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())*/
console.log("from：")
let numbers2 = Array.from(numbers)
let evens = Array.from(numbers, x => (x%2===0))
console.log(numbers2)
console.log(evens)
console.log("of：")
let numbers3 = Array.of(1,2,3)
let numbers4 = Array.of(...numbers3)
console.log(numbers3)
console.log(numbers4)
console.log("fill：")
let numbers5 = Array.of(1,2,3,4,5,6)
console.log(numbers5.fill(0))
console.log(numbers5.fill(1,3,5))
let ones = Array(6).fill(1)
console.log(ones)
console.log("copyWithin：")
let copyArray = [1,2,3,4,5,6]
console.log(copyArray.copyWithin(0,3))
console.log(copyArray.copyWithin(1,3,5))

//自定义排序
console.log("自定义排序：")
var friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25}
]

function comparePerson(a,b) {
  if (a.age<b.age) {
    return -1
  }
  if (a.age>b.age) {
    return 1
  }
  return 0
}

console.log(friends.sort(comparePerson))

//字符串排序
console.log("字符串排序")
var names = ['Ana',  'john', 'ana','John']
console.log(names.sort(function(a,b){
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1
  }
  return 0
}))

console.log("find findIndex:")
let numbersf = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function multipleOf13(element, index, array) {
  return (element % 13 === 0) ? true : false
}
console.log(numbersf.find(multipleOf13))
console.log(numbersf.findIndex(multipleOf13))
console.log("includes:")
let numbersf2 = [7,6,5,4,3,2,1]
console.log(numbersf2.includes(4))
console.log(numbersf2.includes(4,5))
console.log("toString join")
console.log(numbersf.toString())
var numbersString = numbersf.join('-')
console.log(numbersString0 )