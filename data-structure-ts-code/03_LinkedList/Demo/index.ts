import LinkedList from '../LinkedList'

const linkedList = new LinkedList<string>()

linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.append('d')
console.log(linkedList.traverse())
console.log(linkedList.indexOf('c'))

console.log('当前链表的head元素为：', linkedList.peek())

console.log('当前链表的元素个数：', linkedList.length)
console.log('当前链表是否为空：', linkedList.isEmpty())

// console.log('清空当前链表的元素：', linkedList.clear())
// console.log(linkedList.traverse())

// -----------------------
// -----------------------

// 1、插入测试
// linkedList.insert('xxx', 0)
// console.log(linkedList.traverse())

// linkedList.insert('yyy', 2)
// console.log(linkedList.traverse())

// linkedList.insert('zzz', 4)
// console.log(linkedList.traverse())

// 2、删除测试
// console.log(linkedList.removeByIndex(0))
// console.log(linkedList.traverse())

// console.log(linkedList.removeByIndex(2))
// console.log(linkedList.traverse())

// console.log(linkedList.removeByIndex(3))
// console.log(linkedList.traverse())

// 3、查看测试
// console.log(linkedList.getByIndex(0))
// console.log(linkedList.getByIndex(2))
// console.log(linkedList.getByIndex(4))

// 4、更新测试
// console.log(linkedList.update(0, 'aa'))
// console.log(linkedList.traverse())

// console.log(linkedList.update(2, 'cc'))
// console.log(linkedList.traverse())

// console.log(linkedList.update(3, 'dd'))
// console.log(linkedList.traverse())

// -----------------------
// -----------------------
