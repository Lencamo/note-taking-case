import { IQueue } from '../types/IList'
// 定义
class ArrayQueue<T> implements IQueue<T> {
  protected data: T[] = []

  enqueue(element: T): void {
    this.data.push(element) // 末尾追加
  }

  dequeue(): T | undefined {
    return this.data.shift() // 头部删除
  }

  peek(): T | undefined {
    return this.data[0] // 头部element
  }

  get length(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  clear(): void {
    this.data = []
  }
}

export default ArrayQueue
