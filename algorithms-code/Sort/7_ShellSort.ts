export function shellSort(arr: number[]): number[] {
  const n = arr.length

  // 设置不同的增量（步长/间隔）
  let gap = Math.floor(n / 2)
  let endGapIndex = Math.floor(n / gap) * gap

  // 不断改变步长
  while (gap > 0) {
    // 当前步长组成的 gap 数列集合
    for (let i = gap; i < n; i++) {
      let j = i
      const temp = arr[i]

      // 当前轮 gap 数列 插入排序
      while (j >= gap - 1 && temp < arr[j - gap]) {
        arr[j] = arr[j - gap]

        j = j - gap
      }

      arr[j] = temp
    }

    // 继续缩小gap
    gap = Math.floor(gap / 2)
  }

  return arr
}

// 使用 2^k - 1的增量序列

export function shellSort2(arr: number[]): number[] {
  const n = arr.length

  // 计算 Hibbard 增量序列
  const increments = [1]
  let k = 1
  while (increments[k - 1] < n) {
    increments.push(2 ** k - 1)
    k++
  }

  // 对每个增量进行希尔排序
  for (let i = increments.length - 1; i >= 0; i--) {
    const increment = increments[i]

    for (let j = increment; j < n; j++) {
      let k = j
      const temp = arr[j]

      // gap 数列排序
      while (k >= increment && temp < arr[k - increment]) {
        arr[k] = arr[k - increment]

        j = j - increment
      }

      arr[k] = temp
    }
  }

  return arr
}
