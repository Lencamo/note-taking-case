import CircularLinkedList from '../Circular-LinkedList'

const circularLinkedList = new CircularLinkedList<string>()

circularLinkedList.append('a')
circularLinkedList.append('b')
circularLinkedList.append('c')
circularLinkedList.append('d')
console.log(circularLinkedList.traverse())
console.log(circularLinkedList.indexOf('c'))

console.log('当前链表的head元素为：', circularLinkedList.peek())

console.log('当前链表的元素个数：', circularLinkedList.length)
console.log('当前链表是否为空：', circularLinkedList.isEmpty())

// console.log('清空当前链表的元素：', circularLinkedList.clear())
// console.log(circularLinkedList.traverse())

// -----------------------
// -----------------------

// 1、插入测试
// circularLinkedList.insert('xxx', 0)
// console.log(circularLinkedList.traverse())

// circularLinkedList.insert('yyy', 2)
// console.log(circularLinkedList.traverse())

// circularLinkedList.insert('zzz', 4)
// console.log(circularLinkedList.traverse())

// 2、删除测试
// console.log(circularLinkedList.removeByIndex(0))
// console.log(circularLinkedList.traverse())

// console.log(circularLinkedList.removeByIndex(2))
// console.log(circularLinkedList.traverse())

// console.log(circularLinkedList.removeByIndex(3))
// console.log(circularLinkedList.traverse())

// 3、查看测试
// console.log(circularLinkedList.getByIndex(0))
// console.log(circularLinkedList.getByIndex(2))
// console.log(circularLinkedList.getByIndex(4))

// 4、更新测试
// console.log(circularLinkedList.update(0, 'aa'))
// console.log(circularLinkedList.traverse())

// console.log(circularLinkedList.update(2, 'cc'))
// console.log(circularLinkedList.traverse())

// console.log(circularLinkedList.update(3, 'dd'))
// console.log(circularLinkedList.traverse())

// -----------------------
// -----------------------
