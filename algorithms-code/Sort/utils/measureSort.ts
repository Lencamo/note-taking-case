type SortAlgorithm = (arr: number[]) => number[]

// 判断数组是否有序
export function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

// 检测算法效率
export function measureSort(sortAlgorithm: SortAlgorithm, n: number = 100000) {
  const arr = Array.from({ length: n }, () => Math.floor(Math.random() * n))

  const startTime = performance.now()
  sortAlgorithm(arr)
  const endTime = performance.now()

  const timeElapsed = (endTime - startTime).toFixed(2)

  return `使用 ${sortAlgorithm.name} 算法 排序 ${n} 个元素 消耗时间为 ${timeElapsed} 毫秒.`
}

export function compareSort(sortFunctions: SortAlgorithm[], dataCount: number = 10000) {
  console.log(`${dataCount}数据量，${sortFunctions.length}个算法，正在疯狂排序中ing`)

  const data = new Array(dataCount)
  for (let i = 0; i < dataCount; i++) {
    data[i] = Math.floor(Math.random() * dataCount * 10)
  }

  const results: { name: string; time: number }[] = []
  for (const sortFn of sortFunctions) {
    const startTime = Date.now()
    sortFn(data.slice())
    const endTime = Date.now()
    results.push({
      name: sortFn.name,
      time: endTime - startTime
    })
  }

  results.sort((a, b) => a.time - b.time)
  console.log(`Sorting ${dataCount} numbers:`)
  for (const result of results) {
    console.log(`${result.name.padEnd(15)}:${result.time}ms`)
  }
}
