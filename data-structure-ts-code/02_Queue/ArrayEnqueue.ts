import ArrayQueue from './ArrayQueue'

// 定义
class ArrayEnqueue<T> extends ArrayQueue<T> {
  addFront(element: T) {
    this.data.unshift(element)
  }
  removeBack(): T | undefined {
    return this.data.pop()
  }
}

export default ArrayEnqueue
