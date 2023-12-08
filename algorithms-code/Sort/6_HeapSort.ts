import { heapify_down } from './utils/buildMaxHeap'

export function heapSort(arr: number[]): number[] {
  //
  // 1、初始化 最大堆
  const n = arr.length
  const start = Math.floor(n / 2 - 1) // 最底部的第一个非叶子节点

  for (let i = start; i >= 0; i--) {
    heapify_down(i, arr, n)
  }

  // 2、最大值 收集
  for (let i = n - 1; i > 0; i--) {
    // 最大值 交换至 尾部
    const temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp

    // root元素 下滤
    heapify_down(0, arr, i)
  }

  return arr
}
