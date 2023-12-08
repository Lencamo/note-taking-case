export function bubbleSort(arr: number[]): number[] {
  const length = arr.length

  // 经历n-1轮
  for (let i = 0; i < length - 1; i++) {
    // 当前轮中
    for (let j = 0; j < length - 1 - i; j++) {
      const num1 = arr[j]
      const num2 = arr[j + 1]
      // 是否交换
      if (num1 > num2) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

export function bubbleSort_Pro(arr: number[]): number[] {
  const n = arr.length

  // 经历n-1轮
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false // 设置默认值

    for (let j = 0; j < n; j++) {
      // 是否交换
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        isSwapped = true // 发生了交换
      }
    }

    // 是否启动下一轮
    if (!isSwapped) break
  }

  return arr
}
