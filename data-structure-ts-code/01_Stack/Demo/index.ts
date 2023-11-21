import ArrayStack from '../ArrayStack'

// 使用
const stack = new ArrayStack<number>()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log('当前的栈的元素个数：', stack.length)

console.log(stack.pop())
console.log(stack.pop())

console.log('当前的栈顶元素为：', stack.peek())

console.log(stack.pop())
console.log(stack.pop())

console.log('当前的栈是否为空：', stack.isEmpty())
