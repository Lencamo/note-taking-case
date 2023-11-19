interface IList<T> {
  peek(): T | undefined

  get length(): number
  isEmpty(): boolean
  clear(): void
}

export interface IStack<T> extends IList<T> {
  push(element: T): void
  pop(): T | undefined
}

export interface IQueue<T> extends IList<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
}

// ============

export interface ILinkedList<T> extends IList<T> {
  append(element: T): void
  traverse(): T[]
  indexOf(checkElement: T): number

  insert(element: T, start: number): void
  removeByIndex(index: number): T | null
  getByIndex(index: number): T | null
  update(index: number, newElement: T): void
}
