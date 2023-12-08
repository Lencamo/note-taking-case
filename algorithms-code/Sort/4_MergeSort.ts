export function mergeSort(arr: number[]): number[] {
  // 递归结束条件：分解成单个元素为止
  if (arr.length <= 1) return arr

  // 1、分解
  const midIndex = Math.floor(arr.length / 2)

  // - 递归执行
  const leftArr = mergeSort(arr.slice(0, midIndex))
  const rightArr = mergeSort(arr.slice(midIndex))

  // ==========
  // ==========

  // 2、合并
  const newArr: number[] = []

  let leftIndex = 0
  let rightIndex = 0

  // -- 左右数组有序合并
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      newArr.push(leftArr[leftIndex])
      leftIndex++
    } else {
      newArr.push(rightArr[rightIndex])
      rightIndex++
    }
  }

  // -- 剩余元素处理（本身有序，放入即可）
  if (leftIndex < leftArr.length) {
    newArr.push(...leftArr.slice(leftIndex))
  }
  if (rightIndex < rightArr.length) {
    newArr.push(...rightArr.slice(rightIndex))
  }

  return newArr
}

// 注意🎈：下面合并时使用 shift 方法✍看似简洁，效率却降低了

export function mergeSort2(arr: number[]): number[] {
  // 递归结束条件：分解成单个元素为止
  if (arr.length <= 1) return arr

  // 1、分解
  const midIndex = Math.floor(arr.length / 2)

  // - 递归执行
  const leftArr = mergeSort(arr.slice(0, midIndex))
  const rightArr = mergeSort(arr.slice(midIndex))

  // ==========
  // ==========

  // 2、合并
  const newArr: number[] = []

  // -- 左右数组有序合并
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      newArr.push(leftArr.shift()!)
    } else {
      newArr.push(rightArr.shift()!)
    }
  }

  // -- 剩余元素处理（本身有序，放入即可）
  if (leftArr.length) {
    newArr.push(...leftArr)
  }
  if (rightArr.length) {
    newArr.push(...rightArr)
  }

  return newArr
}
