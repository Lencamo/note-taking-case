import { ILinkedList } from '../types/IList'

// A Node
class LinkedListNode<T> {
  element: T
  next: LinkedListNode<T> | null = null // 默认值为null

  constructor(element: T) {
    this.element = element
  }
}

// A Linked List
class CircularLinkedList<T> implements ILinkedList<T> {
  head: LinkedListNode<T> | null = null
  private size: number = 0

  // 记录的是最后一个LinkedListNode节点
  private tail: LinkedListNode<T> | null = null

  // -----------------------
  // -----------------------

  // 根据index获取对应的LinkedListNode节点
  private getNodeByIndex(index: number): LinkedListNode<T> | null {
    let current = this.head

    let num = 0
    while (num++ < index && current) {
      current = current.next // 更新current节点
    }

    return current
  }

  // 判断是否为最后一个LinkedListNode节点
  private isTailNode(checkedNode: LinkedListNode<T>): boolean {
    return this.tail === checkedNode
  }

  // -----------------------
  // -----------------------

  peek(): T | undefined {
    return this.head?.element
  }

  get length(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  clear(): void {
    this.head = null
  }

  // -----------------------
  // -----------------------

  // 1、尾部追加
  append(element: T) {
    const newLinkedListNode = new LinkedListNode(element)

    // 判断是否为空链表
    if (this.head === null) {
      this.head = newLinkedListNode
    } else {
      this.tail!.next = newLinkedListNode
    }

    // 更新tail
    this.tail = newLinkedListNode
    this.tail!.next = this.head

    this.size++
  }

  // 2、遍历element
  traverse(): T[] {
    const result: T[] = []
    let current = this.head

    while (current) {
      result.push(current.element)
      if (this.isTailNode(current)) {
        current = null
      } else {
        current = current.next
      }
    }

    // 为了更加明显的表明当前链表为 循环链表
    if (this.head) {
      const extraTip = ('下一个元素为：' + this.head.element) as T
      result.push(extraTip)
    }

    return result
  }

  // 3、获取元素索引值
  indexOf(checkElement: T): number {
    let current = this.head
    let index = 0

    while (current) {
      if (current.element === checkElement) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  // -----------------------
  // -----------------------

  // 1、插入元素
  insert(element: T, start: number) {
    // 越界判断
    if (start < 0 || start > this.size) return false

    const newLinkedListNode = new LinkedListNode(element)

    let current = this.head

    // 判断头部插入
    if (start === 0) {
      // 注意顺序
      newLinkedListNode.next = current
      this.head = newLinkedListNode

      this.tail!.next = this.head // 头部插入：更新tail
    } else {
      const previous = this.getNodeByIndex(start - 1)
      current = previous!.next

      previous!.next = newLinkedListNode
      newLinkedListNode!.next = current

      if (start === this.length) {
        this.tail = newLinkedListNode

        this.tail!.next = this.head // 尾部插入：更新tail
      }
    }

    this.size++
  }

  // 2、删除元素
  removeByIndex(index: number): T | null {
    // 越界判断
    if (index < 0 || index > this.size) return null

    let current = this.head

    // 判断头部删除
    if (index === 0) {
      this.head = current?.next ?? null

      if (this.length === 1) {
        this.tail = null
        this.tail!.next = this.head // 头部删除：更新tail
      }
    } else {
      const previous = this.getNodeByIndex(index - 1)
      current = previous!.next

      previous!.next = current?.next ?? null

      if (index === this.length - 1) {
        this.tail = previous

        this.tail!.next = this.head // 尾部删除：更新tail
      }
    }

    this.size--

    return current?.element ?? null
  }

  // 3、查看元素
  getByIndex(index: number): T | null {
    // 越界判断
    if (index < 0 || index > this.size) return null

    const current = this.getNodeByIndex(index)

    return current?.element ?? null
  }

  // 4、更新元素
  update(index: number, newElement: T) {
    // 越界判断
    if (index < 0 || index >= this.size) return false

    const current = this.getNodeByIndex(index)
    current!.element = newElement

    return true
  }

  // -----------------------
  // -----------------------
}

export default CircularLinkedList
