export function selectionSort(arr: number[]): number[] {
  const length = arr.length

  // 经历n-1轮
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i // 设置默认值

    // 更新最小值索引
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // 数据交换
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

export function selectionSort_Pro(arr: number[]): number[] {
  const n = arr.length

  // 经历n-1轮
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i // 设置默认值

    // 更新最小值索引
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // 数据交换
    if (i !== minIndex) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}
