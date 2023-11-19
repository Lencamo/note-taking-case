// 顺序查找
export function sequenceSearch(array: number[], target: number) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (item === target) {
      return i
    }
  }
  return -1
}

// 二分查找
// 参考：https://simple.wikipedia.org/wiki/Binary_search
export function binarySearch(array: number[], target: number) {
  // 索引
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2)

    // 中间item
    const midItem = array[midIndex]

    if (midItem === target) {
      return midIndex
    } else if (midItem < target) {
      leftIndex = midIndex + 1
    } else {
      rightIndex = midIndex - 1
    }
  }

  return -1
}
