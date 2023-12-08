export function insertSort(arr: number[]): number[] {
  const n = arr.length

  // 经历n-1轮
  for (let i = 0; i < n - 1; i++) {
    // 暂存抽离的元素
    const pumpElement = arr[i + 1]

    // 获取pumpElement插入的位置
    let endIndex = i
    while (arr[endIndex] > pumpElement && endIndex >= 0) {
      arr[endIndex + 1] = arr[endIndex] // 后移
      endIndex--
    }

    // 插入pumpElement
    arr[endIndex + 1] = pumpElement
  }

  return arr
}
