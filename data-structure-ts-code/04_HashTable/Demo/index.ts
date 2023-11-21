import HashTable from '../HashTable'

const hashTable = new HashTable()

// hashTable.put('aaa', 100)
// hashTable.put('bbb', 200)
// hashTable.put('ccc', 300)
// hashTable.put('ddd', 400)

// console.log(hashTable.get('ddd'))
// hashTable.put('ddd', 666) // 更新数据
// console.log(hashTable.get('ddd'))
// console.log(hashTable.delete('ccc')) // 删除数据
// console.log(hashTable.get('ccc'))

// 扩容/缩容验证
hashTable.put('abc', 100)
hashTable.put('cde', 200)
hashTable.put('efg', 300)
hashTable.put('klm', 400)
hashTable.put('ijk', 500) // 5 / 7 = 0.71…

// 扩容：6 / 7 = 0.85… > 0.75
hashTable.put('ggk', 600) // length 变为了 17

// 缩容：4 / 17 = 0.23… < 0.25
hashTable.delete('ggk')
hashTable.delete('ijk')
hashTable.delete('klm') // length 变为了 11
