// 第 16 节测试：数组求和
function sum(numbers) {
  let total = 0
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

module.exports = { sum }
