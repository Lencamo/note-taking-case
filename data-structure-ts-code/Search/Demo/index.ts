import { sequenceSearch, binarySearch } from '../Search'

// 一个sorted list 排序列表
// const array = [17, 22, 33, 54, 57, 136, 176, 366, 382]
const array = new Array(10000000).fill(0).map((_, index) => index)
const target = 7000000

// 顺序查找
const timeStart = performance.now()
const index_by_sequence = sequenceSearch(array, target)
const timeEnd = performance.now()

console.log(index_by_sequence, '顺序查找-时耗：', timeEnd - timeStart, '毫秒')

// 二分查找
const timeOn = performance.now()
const index_by_binary = binarySearch(array, target)
const timeoff = performance.now()

console.log(index_by_binary, '二分查找-时耗：', timeoff - timeOn, '毫秒')
