import BinaryHeap from '../BinaryHeap'
// 打印工具
import { printHeap } from '../utils/printTree'

const heap = new BinaryHeap<number>([], 'max')

// 原地建堆
const messHeap = [100, 19, 36, 17, 3, 25, 1, 2, 7]
heap.buildHeap(messHeap)
printHeap(heap.heapArr)

// 插入测试
heap.insert(65)
printHeap(heap.heapArr)

// 弹出max元素
heap.extractMax()
printHeap(heap.heapArr)
