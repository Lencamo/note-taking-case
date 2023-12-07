import BinaryHeap from '../06_Heap/BinaryHeap'

class PriorityQueue<T> {
  private heap: BinaryHeap<T> = new BinaryHeap()

  enqueue(element: T): void {
    this.heap.insert(element) // 末尾追加
  }

  dequeue(): T | undefined {
    return this.heap.extractMax() // 头部删除
  }

  peek(): T | undefined {
    return this.heap.getMax() // 头部element
  }

  get length(): number {
    return this.heap.size
  }

  isEmpty(): boolean {
    return this.heap.isEmmpty()
  }
}

export default PriorityQueue
