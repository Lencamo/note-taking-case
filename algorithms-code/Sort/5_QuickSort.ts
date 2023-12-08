// 末尾元素作为 pivot
export function quickSort(arr: number[]): number[] {
  //

  // 区域划分函数
  function partition(leftIndex: number, rightIndex: number) {
    // 递归结束条件：数组长度小于等于0
    if (leftIndex >= rightIndex) return

    // 1、定义 pivot (选择最后一个元素)
    const pivot = arr[rightIndex]

    // 2、定义双指针 i、j
    let i = leftIndex
    let j = rightIndex - 1

    // 3、划分数组
    while (i <= j) {
      // 左侧找大于 pivot 的元素停下
      while (arr[i] < pivot) {
        i++
      }

      // 右侧找小于 pivot 的元素停下
      while (arr[j] > pivot) {
        j--
      }

      // 数据交换（为上述while循环找到的两个元素添加限制条件）
      if (i <= j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        i++
        j--
      }
    }

    // 4、Pivot 居中
    const temp = arr[i]
    arr[i] = arr[rightIndex]
    arr[rightIndex] = temp

    // 继续递归划分
    partition(leftIndex, j) // 左侧数组
    partition(i + 1, rightIndex) // 右侧数组
  }

  // 执行划分
  partition(0, arr.length - 1)

  return arr
}
