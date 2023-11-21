/**
 *
 * @param key 每一个item项的数据值
 * @param length 设置的哈希表的长度
 * @returns
 */
export function generateHashIndex(key: string, length: number = 7): number {
  let hashCode = 0

  for (let i = 0; i < key.length; i++) {
    // 霍纳法则
    hashCode = 31 * hashCode + key.charCodeAt(i) // 使用的是ASCII码
  }

  const hashIndex = hashCode % length

  return hashIndex
}

// 填充因子loadFactor = 6 / 11 = 0.54...
console.log(generateHashIndex('xxx', 11)) // 8
console.log(generateHashIndex('iii', 11)) // 7
console.log(generateHashIndex('jjj', 11)) // 10
console.log(generateHashIndex('fff', 11)) // 9
console.log(generateHashIndex('www', 11)) // 5
console.log(generateHashIndex('vvv', 11)) // 2
