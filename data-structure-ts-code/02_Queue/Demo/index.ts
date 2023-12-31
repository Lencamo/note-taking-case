import ArrayQueue from '../ArrayQueue'

// 使用
const queue = new ArrayQueue<number>()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log('当前的队列的元素个数：', queue.length)

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log('当前的队列头部元素为：', queue.peek())

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log('当前的队列是否为空：', queue.isEmpty())
