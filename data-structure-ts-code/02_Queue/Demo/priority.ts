import PriorityQueue from '../PriorityQueue'

class Student {
  name: string
  score: number

  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }

  valueOf() {
    return this.score
  }
}

// 应用
const priority = new PriorityQueue<Student>()

priority.enqueue(new Student('zhangsan', 88))
priority.enqueue(new Student('lisi', 95))
priority.enqueue(new Student('wangwu', 91))
priority.enqueue(new Student('lihua', 85))

while (!priority.isEmpty()) {
  console.log(priority.dequeue())
}

// console.log('当前的优先级队列的元素个数：', priority.length)

// console.log(priority.dequeue())
// console.log(priority.dequeue())

// console.log('当前的优先级队列的头部元素为：', priority.peek())

// console.log(priority.dequeue())
// console.log(priority.dequeue())

// console.log('当前的优先级队列是否为空：', priority.isEmpty())
