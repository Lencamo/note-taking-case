import { IStack } from '../types/IList'
// 定义
class ArrayStack<T> implements IStack<T> {
  private data: T[] = []

  push(element: T): void {
    this.data.push(element) // 末尾追加
  }

  pop(): T | undefined {
    return this.data.pop() // 末尾删除
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1] // 末尾element
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

export default ArrayStack
