import DoublyLinkedList from '../Doubly-LinkedList'

const doublyLinkedList = new DoublyLinkedList<string>()

doublyLinkedList.append('c')
doublyLinkedList.append('d')
doublyLinkedList.prepend('b')
doublyLinkedList.prepend('a')
console.log(doublyLinkedList.traverse())
console.log(doublyLinkedList.postTraverse())
// console.log(doublyLinkedList.indexOf('c'))

// console.log('当前链表的head元素为：', doublyLinkedList.peek())

// console.log('当前链表的元素个数：', doublyLinkedList.length)
// console.log('当前链表是否为空：', doublyLinkedList.isEmpty())

// console.log('清空当前链表的元素：', doublyLinkedList.clear())
// console.log(doublyLinkedList.traverse())

// -----------------------
// -----------------------

// 1、插入测试
// doublyLinkedList.insert('xxx', 0)
// console.log(doublyLinkedList.traverse())

// doublyLinkedList.insert('yyy', 2)
// console.log(doublyLinkedList.traverse())

// doublyLinkedList.insert('zzz', 4)
// console.log(doublyLinkedList.traverse())

// 2、删除测试
// console.log(doublyLinkedList.removeByIndex(0))
// console.log(doublyLinkedList.traverse())

// console.log(doublyLinkedList.removeByIndex(2))
// console.log(doublyLinkedList.traverse())

// console.log(doublyLinkedList.removeByIndex(3))
// console.log(doublyLinkedList.traverse())

// 3、查看测试
// console.log(doublyLinkedList.getByIndex(0))
// console.log(doublyLinkedList.getByIndex(2))
// console.log(doublyLinkedList.getByIndex(4))

// 4、更新测试
// console.log(doublyLinkedList.update(0, 'aa'))
// console.log(doublyLinkedList.traverse())

// console.log(doublyLinkedList.update(2, 'cc'))
// console.log(doublyLinkedList.traverse())

// console.log(doublyLinkedList.update(3, 'dd'))
// console.log(doublyLinkedList.traverse())

// -----------------------
// -----------------------
