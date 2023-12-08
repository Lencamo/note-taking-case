import { bubbleSort, bubbleSort_Pro } from '../1_BubbleSort'
import { selectionSort, selectionSort_Pro } from '../2_SelectionSort'
import { insertSort } from '../3_InsertSort'
import { mergeSort, mergeSort2 } from '../4_MergeSort'
import { quickSort } from '../5_QuickSort'
import { heapSort } from '../6_heapSort'
import { shellSort, shellSort2 } from '../7_shellSort'

// 辅助工具
import { isSorted, measureSort } from '../utils/measureSort'
import { printHeap } from '../utils/printTree'

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

// // 冒泡排序
// console.log('\n----冒泡排序-----')
// console.log('--排序是否正确: ', isSorted(bubbleSort(arr)))
// console.log('--算法性能测试：', measureSort(bubbleSort))
// // console.log('冒泡排序: ', isSorted(bubbleSort_Pro(arr)))
// // console.log('--算法性能测试：', measureSort(bubbleSort_Pro))

// // 选择排序
// console.log('\n----选择排序-----')
// console.log('--排序是否正确: ', isSorted(selectionSort(arr)))
// console.log('--算法性能测试：', measureSort(selectionSort))
// // console.log('--排序是否正确: ', isSorted(selectionSort_Pro(arr)))
// // console.log('--算法性能测试：', measureSort(selectionSort_Pro))

// // 插入排序
// console.log('\n----插入排序-----')
// console.log('--排序是否正确: ', isSorted(insertSort(arr)))
// console.log('--算法性能测试：', measureSort(insertSort))

// // 归并排序
// console.log('\n----归并排序-----')
// console.log('--排序是否正确: ', isSorted(mergeSort(arr)))
// console.log('--算法性能测试：', measureSort(mergeSort))
// console.log('--排序是否正确: ', isSorted(mergeSort2(arr)))
// console.log('--算法性能测试：', measureSort(mergeSort2))

// // 快速排序
// console.log('\n----快速排序-----')
// console.log('--排序是否正确: ', isSorted(quickSort(arr)))
// console.log('--算法性能测试：', measureSort(quickSort))

// // 堆排序
// console.log('\n----堆排序-----')
// printHeap(heapSort(arr))
// console.log('--排序是否正确: ', isSorted(heapSort(arr)))
// console.log('--算法性能测试：', measureSort(heapSort))

// 希尔排序
console.log('\n----希尔排序-----')
console.log('--排序是否正确: ', isSorted(shellSort(arr)))
console.log('--算法性能测试：', measureSort(shellSort))
console.log('--排序是否正确: ', isSorted(shellSort2(arr)))
console.log('--算法性能测试：', measureSort(shellSort2))
