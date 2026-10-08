const assert = require('node:assert')
const { sum } = require('./sum')

assert.strictEqual(sum([]), 0, 'sum([]) 应为 0')
assert.strictEqual(sum([5]), 5, 'sum([5]) 应为 5')
assert.strictEqual(sum([1, 2, 3]), 6, 'sum([1, 2, 3]) 应为 6')
console.log('sum 测试通过')
